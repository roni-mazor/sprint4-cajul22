import { useEffect, useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { utilService } from '../../services/util.service'


export const CoverPickerModal = ({ task, onSaveTask, toggleModal }) => {

    const [cardClr, setCardClr] = useState(null)
    const [headerFocus, setHeaderFocus] = useState()
    const [bodyFocus, setBodyFocus] = useState()
    const colors = utilService.getBackgroundColors()


    useEffect(() => {
        if (!task.cover && !task.coverClr) return
        if (task.cover) setCardClr({
            backgroundImage: `url(${task.cover.url})`,
            opacity: 100
        })
        if (task.coverClr) setCardClr({
            backgroundColor: task.coverClr,
            opacity: 100
        })
        if (task.background === 'header') {
            setHeaderFocus({
                boxShadow: '0 0 0 2px #ffffff, 0 0 0 4px #0079bf'
            })
        }
        if (task.background === 'body') {
            setBodyFocus({
                boxShadow: '0 0 0 2px #ffffff, 0 0 0 4px #0079bf'
            })
        }
        return () => {
            setCardClr(null)
        }
    }, [])

    console.log('cardClr:', cardClr)

    const onRemoveCover = () => {
        task.coverClr = ''
        onSaveTask(task)
        setCardClr({})
    }

    const onPickColor = (color) => {
        console.log('color:', color)
        task.cover = null
        task.coverClr = color
        setCardClr({
            backgroundColor: color,
            opacity: 100
        })
        onSaveTask(task)
    }

    const onToggleCover = (cover) => {
        if (!cardClr) {
            setCardClr({ cursor: 'default' })
            return
        }
        console.log('cover:', cover)
        task.background = cover
        onSaveTask(task)
     

    }

    return (
        <section className="add-features-modal">
            <header className='edit-label-header'>
                <span></span>
                <div>Cover</div>
                <span onClick={toggleModal}>
                    < VscChromeClose />
                </span>
            </header>
            <hr />
            <div className='cover-modal flex column'>
                <div>
                    <h4>Size</h4>
                    <div className='cover-pick'>
                        <div className=' header-cover' style={headerFocus}
                            onClick={() => onToggleCover('header')}>
                            <div className='card-header' style={cardClr}></div>
                            <div className='card-body'>
                                <div className='top-line'></div>
                                <div className='middle-line'></div>
                                <div className='bottom-line flex'>
                                    <div className='left'></div>
                                    <div className='right'></div>
                                </div>
                                <div className='dot-corner'></div>
                            </div>
                        </div>
                        <div style={bodyFocus}>
                            <div className='body-cover' style={cardClr}
                                onClick={() => onToggleCover('body')}>
                                <div className='card-body'>
                                    <div className='top-line'></div>
                                    <div className='middle-line'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='cover-btn'
                    onClick={onRemoveCover}>Remove cover</button>
                <h5 className='cover-picker-title'>Colors</h5>
                <div className='color-picker'>
                    {colors.map(color => <span key={color}
                        className="cover-clr-picker"
                        onClick={() => onPickColor(color)}
                        style={{ backgroundColor: color }}>
                    </span>)}
                </div>
            </div>

        </section>
    )
}