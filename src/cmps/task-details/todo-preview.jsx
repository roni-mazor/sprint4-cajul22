import React, { useState } from "react"
import { BsThreeDots } from 'react-icons/bs'
import { VscChromeClose } from 'react-icons/vsc';
import { IoMdClose, } from 'react-icons/io'

import { Checkbox } from '@mui/material'
import { TaskAdditivesModal } from "../addivities-modal/task-additives-modal";

export const TodoPreview = ({ todo, checklist, onTodoIsDone, onRemoveTodo, onSaveTodo, convertTodoToTask }) => {
    const [focused, setFocused] = useState(false)
    const [txt, setTxt] = useState(todo.title)
    const [isAdditivesModalOpen, setIsAdditivesModalOpen] = useState(null)

    const onFocus = () => setFocused(true)
    const onBlur = (ev) => {
        ev.stopPropagation()
        setTimeout(() => {

            setFocused(false)

        }, 200)
    }

    const toggleAdditivesModal = (ev, type) => {
        ev.stopPropagation()
        const posDetails = ev.target.getBoundingClientRect()
        const windowWidth = window.innerWidth
        if (type === isAdditivesModalOpen) setIsAdditivesModalOpen(null)
        else setIsAdditivesModalOpen({ type, posDetails, windowWidth })
    }

    const onStopProp = (ev) => {
        ev.stopPropagation()
    }

    const handleChange = ({ target: { value } }) => {
        setTxt(value)
    }


    const onSaveTitle = () => {
        if (!txt) return  
        onSaveTodo(txt, todo.id)
    }
    const removeTodo = (ev, todoId) => {
        ev.stopPropagation()
        onRemoveTodo(todoId)
    }

    const onTodoToCard = (ev, todoId) => {
        convertTodoToTask(todo.title)
        onRemoveTodo(todoId)
    }
    return (

        <div className='todo-preview  flex align-center justify-between' onClick={onFocus}>
            <div className="todo-preview-container">
                <span className="todo-checkbox"><Checkbox
                    sx={{ color: 'lightgray' }}
                    onClick={onStopProp}
                    checked={todo.isDone}
                    onChange={() => onTodoIsDone(todo.id)} />
                </span>
                {!focused && <span className={todo.isDone ? 'todo-title done' : 'todo-title'}>
                    {todo.title}</span>}
                {focused && <section className="text-area-container">
                    <textarea className='todo-title-txtarea simple-txtarea'
                        cols="30" rows="10"
                        autoFocus
                        onChange={handleChange}
                        // onBlur={onBlur}
                        value={txt}>
                    </textarea>
                    <div className="todo-edit-btns">
                        <button className="save" onClick={onSaveTitle}>Save</button>
                        <button className="cancel" onClick={onBlur}><IoMdClose /></button>
                    </div>
                </section>}
            </div>
            {!focused && <span className='todo-menu' onClick={(event) => toggleAdditivesModal(event, 'todo')}><BsThreeDots /></span>}
            {isAdditivesModalOpen && <TaskAdditivesModal
                modalInfo={isAdditivesModalOpen}
                toggleModal={toggleAdditivesModal}
                todo={todo}
                onRemoveTodo={removeTodo}
                onTodoToCard={onTodoToCard}
            />}
        </div>
    )

}