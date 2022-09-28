import { VscChromeClose } from 'react-icons/vsc'
import { FaPencilAlt } from 'react-icons/fa'
import { FiChevronLeft } from 'react-icons/fi'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeLabel, saveLabels } from '../../store/board.actions'
import { useSelector } from 'react-redux'
import { boardService } from '../../services/board.service'
import { Checkbox } from '@mui/material'
import { utilService } from '../../services/util.service'


export const LabelPicker = ({ onSaveTask, task, toggleModal }) => {
    const [labelEdit, setLabelEdit] = useState(null)
    const [filterBy, setFilterBy] = useState('')
    let labels = useSelector(state => state.boardModule.board.labels)
    labels = labels.filter(label => label.title.includes(filterBy))
    const dispatch = useDispatch()
    const colors = utilService.getColors()

    const onLabelCheck = (labelId) => {
        const t = { ...task }
        if (t.labelIds.includes(labelId)) {
            t.labelIds = t.labelIds.filter(lId => lId !== labelId)
        } else {
            t.labelIds.push(labelId)
        }
        onSaveTask(t)
    }

    const onChangeLabelColor = (color, colorName) => {
        setLabelEdit((prevLabel) => ({ ...prevLabel, color, colorName }))
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
        setLabelEdit(null)
    }
    const onCreateLabel = () => {
        setLabelEdit(boardService.createLabel(colors[0]))

    }
    // console.log(labels)
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
                                <Checkbox onChange={() => { onLabelCheck(label.id) }}
                                    sx={{ color: 'lightgray' }}
                                    checked={(task.labelIds.includes(label.id))}
                                    name={label.id} size="small" style={{ padding: '5px 9px' }} />
                                <div className={`label-display-btn ${label.colorName}`} >
                                    <div className="color-ball-display" style={{ background: label.color }}> </div>
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
                    {colors.map(({ color, colorName }) => (
                        <button
                            className={(color === labelEdit.color) ? 'chosen' : ''}
                            onClick={() => { onChangeLabelColor(color, colorName) }}
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