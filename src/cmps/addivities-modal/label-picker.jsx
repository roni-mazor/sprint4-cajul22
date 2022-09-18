import { VscChromeClose } from 'react-icons/vsc'
import { FaPencilAlt } from 'react-icons/fa'
import { FiChevronLeft } from 'react-icons/fi'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeLabel, saveLabels } from '../../store/board.actions'
import { useSelector } from 'react-redux'
import { boardService } from '../../services/board.service'
import { Checkbox } from '@mui/material'


export const LabelPicker = ({ onSaveTask, task, toggleModal }) => {
    const [labelEdit, setLabelEdit] = useState(null)
    const [filterBy, setFilterBy] = useState('')
    let labels = useSelector(state => state.boardModule.board.labels)
    labels = labels.filter(label => label.title.includes(filterBy))
    const dispatch = useDispatch()
    const colors = [
        '#B7DDB0', '#F5EA92', '#FAD29C', '#EFB3AB', '#DFC0EB',
        '#7BC86C', '#F5DD29', '#FFAF3F', '#EF7564', '#CD8DE5',
        '#5AAC44', '#E6C60D', '#E79217', '#CF513D', '#A86CC1',
        '#8BBDD9', '#8FDFEB', '#B3F1D0', '#F9C2E4', '#FF8ED4',
        '#026AA7', '#00AECC', '#6DECA9', '#C1C7D0', '#E568AF',
    ]

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
        let newLabelIdx = labels.findIndex(l => l.id === labelEdit.id)
        if (newLabelIdx === -1) labels.push(labelEdit)
        else labels.splice(newLabelIdx, 1, labelEdit)

        dispatch(saveLabels(labels))
        setLabelEdit(null)
    }
    const onDeleteLabel = () => {
        let newLabels = labels.filter(l => (l.id !== labelEdit.id))
        dispatch(removeLabel(newLabels, labelEdit.id))
        // dispatch(saveLabels(newLabels))
        setLabelEdit(null)
    }
    const onCreateLabel = () => {
        setLabelEdit(boardService.createLabel())

    }

    return (
        <section className="add-features-modal">
            {(!labelEdit) && <>
                <header className='edit-label-header'>
                    <span></span>
                    <div>Labels</div>
                    <span onClick={toggleModal}>
                        < VscChromeClose />
                    </span>
                </header>

                <hr />
                <input className="label-title-input"
                    type="text" placeholder='Search labels...'
                    onChange={({ target: { value } }) => { setFilterBy(value) }}
                    value={filterBy} />

                <ul ul className="labels-container">
                    {labels.map(label => (
                        <li className='label-container'>
                            <label >
                                {/* <input type="checkbox" name={label.id}
                                    checked={(task.labelIds.includes(label.id))}
                                    onChange={() => { onLabelCheck(label.id) }}
                                /> */}
                                <Checkbox onChange={() => { onLabelCheck(label.id) }}
                                    checked={(task.labelIds.includes(label.id))}
                                    name={label.id} size="small" style={{ padding: '5px 9px' }} />
                                <div className='label-display-btn' style={{ backgroundColor: label.color }}>
                                    <span>{label.title}</span>
                                </div>
                                <button className='edit-btn' onClick={() => setLabelEdit(label)}>
                                    <FaPencilAlt />
                                </button>
                            </label>
                        </li>
                    ))}
                </ul>
                <button className='create-label-btn' onClick={onCreateLabel}>Create a new label</button>
            </>}

            {labelEdit && <>
                <header className="edit-label-header">
                    <span onClick={() => { setLabelEdit(null) }}>
                        <FiChevronLeft />
                    </span>
                    <div>Edit label</div>
                    <span onClick={toggleModal}>
                        < VscChromeClose />
                    </span>
                </header>
                <hr />
                <p>Title</p>
                <input className="label-title-input"
                    type="text"
                    onChange={onChangeLabelTitle}
                    value={labelEdit.title} />
                <p>Select a color</p>
                <section className='label-colors-container'>
                    {colors.map(color => (
                        <button
                            className={(color === labelEdit.color) ? 'chosen' : ''}
                            onClick={() => { onChangeLabelColor(color) }}
                        >
                            <div style={{ backgroundColor: color }} ></div>
                        </button>))}
                </section>
                <hr />
                <section className='save-delete-label'>
                    <button className='save-label-btn' onClick={saveLabelChanges}>Save</button>
                    <button className='delete-label-btn' onClick={onDeleteLabel}>Delete</button>
                </section>

            </>}

        </section >
    )
}