import { useEffect, useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { BsSearch } from 'react-icons/bs'
import { photoService } from '../../services/photo.service'
import { utilService } from '../../services/util.service'


export const CoverPickerModal = ({ task, onSaveTask, toggleModal }) => {

    const [cardClr, setCardClr] = useState(null)
    const [cardFocus, setCardFocus] = useState(null)
    const [clrFocus, setClrFocus] = useState(null)
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
        if (task.cover || task.coverClr) setCardFocus(task.background)
        if (task.coverClr) setClrFocus(task.coverClr)
        if (task.cover) setClrFocus(null)
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
        // console.log('color:', color)
        task.cover = null
        task.coverClr = color
        setCardClr({
            backgroundColor: color,
            opacity: 100
        })
        onSaveTask(task)
        setClrFocus(color)
    }

    const onMakeCover = (cover) => {

        task.cover = cover
        task.coverClr = ''
        setCardClr({
            backgroundImage: `url(${cover.url})`,
            opacity: 100
        })
        onSaveTask(task)
        setClrFocus(cover)
    }

    const onMakeUnsplashCover = (cover) => {
        task.coverClr = ''
        task.cover = cover
        task.cover.url = cover.urlFull
        setCardClr({
            backgroundImage: `url(${cover.url})`,
            opacity: 100
        })
        onSaveTask(task)
        setClrFocus(cover)
    }

    const onToggleCover = (cover) => {
        if (!cardClr) {
            return
        }
        task.background = cover
        onSaveTask(task)
        setCardFocus(cover)

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
                        <div className={cardFocus === 'header' ? 'header-cover focused' : 'header-cover'}
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
                        <div className={cardFocus === 'body' ? 'focused' : ''}>
                            <div className=' body-cover' style={cardClr}
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
                        className={color === clrFocus ? 'cover-clr-picker focused' : 'cover-clr-picker'}
                        // className="cover-clr-picker"
                        onClick={() => onPickColor(color)}
                        style={{ backgroundColor: color }}>
                    </span>)}
                </div>
                {task.attachments.length > 0 &&
                    <div>
                        <h5>Attachments</h5>
                        <div className='cover-attach-container'>
                            {task.attachments.map(attachment => <div
                                key={attachment.id}
                                className={task?.cover?.id === attachment.id ? 'cover-attach focused' : 'cover-attach'}
                                onClick={() => onMakeCover(attachment)}
                                style={{ backgroundImage: `url(${attachment.url})` }}>
                            </div>)}
                        </div>
                    </div>}
                <h5>Photos from Unsplash</h5>
                <Photos
                    task={task}
                    onMakeUnsplashCover={onMakeUnsplashCover} />
            </div>

        </section>
    )
}

const Photos = ({ task, onMakeUnsplashCover }) => {
    const [photos, setPhotos] = useState(null)

    useEffect(() => {
        loadPhotos()
    }, [])

    const loadPhotos = async (searchBy) => {
        if (!searchBy) searchBy = 'cover'
        let photos = await photoService.getPhotos(searchBy)
        photos.splice(0, 4)
        // console.log('photos:', photos)
        setPhotos(photos)
    }

    const onSearchPhoto = ({ target: { value } }) => {
        loadPhotos(value)
    }


    return (<div className='unsplash-cover'>

        <div className="search-photos-container">
            <input type="text" className="filter-text-input" placeholder="Photos" onChange={utilService.debounce(onSearchPhoto, 1000)} />
            <span className='icon-container'>
                <BsSearch />
            </span>
        </div>
        <section className="backgrounds-container">
            {photos && photos.map(p => (
                <div className={task?.cover?.url === p.urlFull ? 'focused' : ''}
                    onClick={() => onMakeUnsplashCover(p)} style={{ backgroundImage: `url(${p.urlSmall})` }} >
                    <a target="_blank" className="creator-link" href={p.creatorUrl}>{p.creatorName}</a>
                </div>

            ))}
        </section>
    </div>
    )
}