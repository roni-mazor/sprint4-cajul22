import React, { useState } from "react"
import { BsThreeDots } from 'react-icons/bs'
import { VscChromeClose } from 'react-icons/vsc';
import { IoMdClose, } from 'react-icons/io'

import { Checkbox } from '@mui/material'

export const TodoPreview = ({ todo, checklist, onTodoIsDone, onRemoveTodo, onSaveTodo }) => {
    const [focused, setFocused] = useState(false)
    const [txt, setTxt] = useState(todo.title)
    const onFocus = () => setFocused(true)
    const onBlur = (ev) => {
        ev.stopPropagation()
        setTimeout(() => {

            setFocused(false)

        }, 200)
    }


    const onStopProp = (ev) => {
        ev.stopPropagation()
    }

    const handleChange = ({ target: { value } }) => {
        setTxt(value)
    }



    const onSaveTitle = () => {
        // console.log('txt:', txt)
        onSaveTodo(txt, todo.id)
    }

    // console.log(focused);
    return (

        <div className='todo-preview  flex align-center justify-between' onClick={onFocus}>
            <div >
                <span><Checkbox 
                className="todo-checkbox"
                    onClick={onStopProp}
                    checked={todo.isDone}
                    onChange={() => onTodoIsDone(todo.id)} />
                </span>
                {!focused && <span className={todo.isDone ? 'todo-title done' : 'todo-title'}>
                    {todo.title}</span>}
                {focused && <div>

                    <textarea className='todo-title-txtarea simple-txtarea'
                        cols="30" rows="10"
                        autoFocus
                        onChange={handleChange}
                        onBlur={onBlur}
                        value={txt}>
                    </textarea>
                    <div className="todo-edit-btns">
                        <button className="save" onClick={onSaveTitle}>Save</button>
                        <button className="cancel" onClick={onBlur}><IoMdClose /></button>
                    </div>
                </div>}
            </div>
            {!focused && <span className='todo-menu' onClick={() => onRemoveTodo(todo.id)}> < VscChromeClose /></span>}
            {/* <span className='todo-menu' onClick={()=>toggleModal('todo')}><BsThreeDots /></span> */}

        </div>
    )

}