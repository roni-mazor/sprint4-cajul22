import { useRef, useState } from 'react'
import { BsCheck2Square, BsThreeDots } from 'react-icons/bs'
import { IoMdClose, } from 'react-icons/io'

import { utilService } from '../../services/util.service'
import { TodoModal } from './todo.modal'
import { TodoPreview } from './todo-preview'


export const ChecklistPreview = ({ task, checklist, onSaveTask, toggleModal }) => {

    const [focused, setFocused] = useState(false)
    const [titleFocus, setTitleFocus] = useState(false)
    const [txt, setTxt] = useState(checklist.title)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)
    const onTitleFocus = () => {
        setTitleFocus(true)
    }
    const onTitleBlur = () => {
        setTimeout(() => {

            setTitleFocus(false)
        }, 200)
    }


    const onRemoveChecklist = (checklistId) => {
        task.checklists = task.checklists.filter(checklist => checklist.id !== checklistId)

        onSaveTask(task)
    }


    const onHandleChange = ({ target: { value } }) => {
        setTxt(value)
    }

    const onSaveTxt = () => {

        checklist = checklist.list.push({
            id: utilService.makeId(5),
            title: txt,
            isDone: false
        })
        // console.log('checklist:', checklist)
        onSaveTask(task)
        setTxt('')
        onBlur()

    }

    const onClearFocus = () => {
        setTxt('')
        onBlur()
    }

    const onTodoIsDone = (todoId) => {
        // console.log('todoId:', todoId)
        const todo = checklist.list.find(todo => todo.id === todoId)
        todo.isDone = !todo.isDone
        checklist = checklist.list.map(currTodo => currTodo.id === todo.id ? todo : currTodo)
        onSaveTask(task)
        // console.log('todo:', todo)
    }

    const getProgressPercent = () => {


        let count = checklist.list.reduce((acc, todo) => {
            // console.log('todo:', todo)
            if (todo.isDone) acc++
            else acc = acc
            return acc
        }, 0)

        let percentage
        if (checklist.list.length === 0) percentage = 0
        else percentage = Math.round((count / checklist.list.length * 100))
        return `${percentage}%`
    }

    const onRemoveTodo = (todoId) => {
        const idx = checklist.list.findIndex(todo => todo.id === todoId)
        checklist = checklist.list.splice(idx, 1)
        onSaveTask(task)
    }

    const onSaveTitle = () => {
        checklist.title = txt
        onSaveTask(task)
        onTitleBlur()
    }

    const onSaveTodo = (txt, todoId) => {
        console.log('txt:', txt)
        console.log('todoId:', todoId)
        const todo = checklist.list.find(todo => todo.id === todoId)
        todo.title = txt
        checklist = checklist.list.map(currTodo => currTodo.id === todo.id ? todo : currTodo)
        onSaveTask(task)
    }
    // console.log('checklist:', checklist)
    return (
        <section className="checklist-preview">
            {!titleFocus && <div className="checklist-title flex align-center justify-between"
             onClick={onTitleFocus}>
                <div className="flex align-center" >
                    <div className='flex align-center checklist-title-container'>
                        <span className='task-icon'> <BsCheck2Square /></span>
                        <h3>{checklist.title}</h3></div>
                </div>
                <button className='delete-checklist'
                    onClick={() => onRemoveChecklist(checklist.id)}>Delete</button>
            </div>}
            {titleFocus && <div className='title-txtarea-container flex'>
                <span> <BsCheck2Square /></span>
                <div>
                    <textarea className='title-txtarea simple-txtarea'
                        cols="60" rows="2" onChange={onHandleChange}
                        value={txt}></textarea>
                    <div className="checklist-title-edit-btns">
                        <button className="save" onClick={() => onSaveTitle(checklist.id)}>Save</button>
                        <button className="cancel" onClick={onTitleBlur}><IoMdClose /></button>
                    </div>
                </div>
            </div>}
            <div className='progress'>
                <span>{getProgressPercent()}</span>
                <div className='progress-bar'>
                    <div className='progress-bar-current' style={{ width: `${getProgressPercent()}` }}>

                    </div>
                </div>
            </div>
            <div className='todo-list'>
                {checklist.list.map(todo => <TodoPreview key={todo.id}
                    todo={todo}
                    checklist={checklist}
                    onSaveTodo={onSaveTodo}
                    onTodoIsDone={onTodoIsDone}
                    onRemoveTodo={onRemoveTodo} />)}
            </div>
            <div className='add-checklist'>
                {!focused && <button className='add-checklist-item-btn' onClick={onFocus}>Add an item</button>}
                {focused && <div>
                    <textarea
                        onChange={onHandleChange}
                        className='simple-txtarea'
                        cols="60" rows="2"
                        placeholder='Add an item'
                    ></textarea>
                    <button className='save'
                        onClick={onSaveTxt}>Add</button>
                    <button className='cancel'
                        onClick={onClearFocus}>Cancel</button>
                </div>}
            </div>
        </section>
    )
}