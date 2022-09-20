import { VscChromeClose } from 'react-icons/vsc'
import { utilService } from '../../services/util.service'
import { saveTask } from '../../store/board.actions'


export const CoverPickerModal = ({ task, onSaveTask, toggleModal }) => {


    const colors = utilService.getBackgroundColors()
       


    const onPickColor = (color) => {
        console.log('color:', color)
        task.cover = null
        task.coverClr = color
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
                <button className='checklist-btn' >Remove cover</button>
                <h5 className='checklist-picker-title'>Colors</h5>
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