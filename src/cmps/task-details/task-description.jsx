import { useEffect, useRef, useState } from 'react'
import { GrTextAlignFull } from 'react-icons/gr'

export const TaskDescription = ({ task, onSaveTask }) => {

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
        // setTxt(value)
        setTxt(value)
        // console.log('value:', value)
    }

    const onSaveTxt = () => {
        let newTask = task
        newTask.description = txt
        console.log('newTask:', newTask)
        onSaveTask(newTask)
    }

    const onCancel = () => {
        // setTxt('')
    }

    // console.log('txt:', txt)
    return (
        <section className="description-container">
            <div className="description-title">
                <span> <GrTextAlignFull /></span>   <h3>Description</h3>
            </div>
            <textarea onFocus={onFocus} onBlur={onBlur} onChange={onHandleChange}
                className='simple-txtarea description-txtarea' cols="60" rows="2"
                placeholder='Add more detailed description...'
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