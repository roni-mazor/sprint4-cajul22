import { useEffect, useRef, useState } from 'react'
import { GrTextAlignFull } from 'react-icons/gr'

export const TaskDescription = ({ task, onSaveTask, onSaveActivity }) => {

    const [focused, setFocused] = useState(false)
    const [txt, setTxt] = useState(task.description)
    const onFocus = () => setFocused(true)
    const onBlur = () => {
        setTimeout(() => {

            setFocused(false)
        }, 200)
    }

    const onHandleChange = ({ target }) => {
        const { value } = target

        setTxt(value)
    }

    const onSaveTxt = () => {
        let newTask = task
        newTask.description = txt
        onSaveActivity(`changed the description`)
        onSaveTask(newTask)
    }

    const onCancel = () => {
        onBlur()
    }

    return (
        <section className="description-container">
            <div className="description-title">
                <span className='task-icon'> <GrTextAlignFull /></span>   <h3>Description</h3>
            </div>
            <textarea onFocus={onFocus} onBlur={onBlur} onChange={onHandleChange}
                className={`simple-txtarea description-txtarea ${task.description ? 'have-description' : ''}`}
                cols="60" rows="2"
                placeholder='Add a more detailed description...'
                value={txt}></textarea>
            {focused && <div className='description-btn'>
                <button className='description-btn save'
                    onClick={onSaveTxt}>Save</button>
                <button className='description-btn cancel'
                    onClick={onCancel}>Cancel</button>
            </div>}
        </section>
    )
}