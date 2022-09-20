import { VscChromeClose } from 'react-icons/vsc'
import { saveTask } from '../../store/board.actions'


export const CoverPickerModal = ({ task, onSaveTask, toggleModal }) => {


    const colors = [
        // '#B7DDB0', '#F5EA92', '#FAD29C', '#EFB3AB', '#DFC0EB',
        '#7BC86C', '#F5DD29', '#FFAF3F', '#EF7564', '#CD8DE5',
        // '#5AAC44', '#E6C60D', '#E79217', '#CF513D', '#A86CC1',
        // '#8BBDD9', '#8FDFEB', '#B3F1D0', '#F9C2E4', '#FF8ED4',
        '#026AA7', '#00AECC', '#6DECA9', '#C1C7D0', '#E568AF',
    ]


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