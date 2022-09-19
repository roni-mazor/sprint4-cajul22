import { useRef, useState } from 'react'
import { BsCheck2Square } from 'react-icons/bs'


export const ChecklistPreview = ({ task, checklist, onSaveTask }) => {

    const addItemRef = useRef()
    const [focused, setFocused] = useState(false)
    // const [txt, setTxt] = useState(task.description)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)



    const onRemoveChecklist = (checklistId) => {
        task.checklists = task.checklists.filter(checklist => checklist.id !== checklistId)

        onSaveTask(task)
    }

    const handleChange = ({ target }) => {
        const value = target.value
        // console.log('value:', value)
        // checklist.title = value

        onSaveTask(task)
        onBlur()
    }

    return (
        <section className="checklist-preview">
            <div className="checklist-title flex align-center justify-between">
                <div className="flex align-center">
                    <span> <BsCheck2Square /></span><h3>{checklist.title}</h3>
                    {/* <textarea className='simple-txtarea'
                cols="60" rows="2" onBlur={handleChange}>{task.title}</textarea> */}
                </div>
                <button className='delete-checklist'
                    onClick={() => onRemoveChecklist(checklist.id)}>Delete</button>
            </div>
            <div className='progress'>
                <span>0%</span>
                <div className='progress-bar'></div>
            </div>
            <div className='add-checklist'>
                {!focused && <button className='add-checklist-item-btn' onClick={onFocus}>Add an item</button>}
                {focused && <textarea
                    onBlur={handleChange}
                    className='simple-txtarea'
                    cols="60" rows="2"
                >Add an item</textarea>}
            </div>
        </section>
    )
}