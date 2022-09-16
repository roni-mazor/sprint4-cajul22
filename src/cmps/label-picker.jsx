import { VscChromeClose } from 'react-icons/vsc'
import { FaPencilAlt } from 'react-icons/fa'
import { FiChevronLeft } from 'react-icons/fi'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveLabels } from '../store/board.actions'
import { useSelector } from 'react-redux'


export const LabelPicker = ({ onSaveTask, task, toggleModal }) => {
    const labels = useSelector(state => state.boardModule.board.labels)
    const [labelEdit, setLabelEdit] = useState(null)
    const dispatch = useDispatch()

    const onLabelCheck = (labelId) => {
        const t = { ...task }
        if (t.labelIds.includes(labelId)) {
            t.labelIds = t.labelIds.filter(lId => lId !== labelId)
        } else {
            t.labelIds.push(labelId)
        }
        onSaveTask(t)
    }

    const onChangeLabelColor = (color) => {
        setLabelEdit((prevLabel) => ({ ...prevLabel, color }))
    }
    const onChangeLabelTitle = ({ target: { value } }) => {
        setLabelEdit((prevLabel) => ({ ...prevLabel, title: value }))
    }

    const saveLabelChanges = () => {
        let newLabels = labels.map(l => {
            if (l.id === labelEdit.id) return labelEdit
            else return l
        })
        dispatch(saveLabels(newLabels))
        setLabelEdit(null)
    }

    return (
        <section className="add-features-modal">
            {(!labelEdit) && <><h1>Labels</h1>

                <hr />
                <button onClick={toggleModal}>
                    < VscChromeClose />
                </button>

                <ul ul className="labels-container">
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
                                <button onClick={() => setLabelEdit(label)}>
                                    <FaPencilAlt />
                                </button>
                            </label>
                        </li>
                    ))}
                </ul></>}

            {labelEdit && <>
                <section>
                    <button onClick={() => { setLabelEdit(null) }}>
                        <FiChevronLeft />
                    </button>
                    <h1>Edit label</h1>
                </section>
                <p>Title</p>
                <input type="text" placeholder='title'
                    onChange={onChangeLabelTitle}
                    value={labelEdit.title} />
                <p>Select a color</p>
                <section className='label-colors-container'>
                    <button
                        onClick={() => { onChangeLabelColor("#C1C7D0") }}
                        style={{ backgroundColor: "#C1C7D0" }}></button>
                </section>
                <button onClick={saveLabelChanges}>Save</button>

            </>}

        </section >
    )
}