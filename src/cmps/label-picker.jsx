import { VscChromeClose } from 'react-icons/vsc'
import { FaPencilAlt } from 'react-icons/fa'


export const LabelPicker = ({ onSaveTask, task, labels, toggleModal }) => {

    // console.log(labels)
    // console.log(task)

    const onLabelCheck = (labelId) => {
        const t = { ...task }
        if (t.labelIds.includes(labelId)) {
            t.labelIds = t.labelIds.filter(lId => lId !== labelId)
        } else {
            t.labelIds.push(labelId)
        }
        onSaveTask(t)
    }

    return (
        <section className="add-features-modal">
            <h1>choose Labels</h1>
            <button onClick={toggleModal}>
                < VscChromeClose />
            </button>
            <ul className="labels-container">
                {labels.map(label => (
                    <li>
                        <label >
                            <input type="checkbox" name={label.id}
                                checked={(task.labelIds.includes(label.id))}
                                onChange={() => { onLabelCheck(label.id) }}
                            />
                            <div className='label-display-btn' style={{ backgroundColor: label.color }}>
                                <span>{label.title}</span>
                            </div>
                            <button>
                                <FaPencilAlt />
                            </button>
                        </label>


                    </li>



                ))}
            </ul>
        </section>
    )
}