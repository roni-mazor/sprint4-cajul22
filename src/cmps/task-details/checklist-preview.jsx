import { useRef, useState } from 'react'
import { BsCheck2Square, BsThreeDots } from 'react-icons/bs'
import { Checkbox } from '@mui/material'

import { utilService } from '../../services/util.service'
import { TodoModal } from './todo.modal'


export const ChecklistPreview = ({ task, checklist, onSaveTask, toggleModal }) => {

    // const addItemRef = useRef()
    const [focused, setFocused] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [txt, setTxt] = useState(task.description)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)



    const onRemoveChecklist = (checklistId) => {
        task.checklists = task.checklists.filter(checklist => checklist.id !== checklistId)

        onSaveTask(task)
    }


    const onHandleChange = ({ target: { value } }) => {
        setTxt(value)
    }

    const handleChange = ({ target }) => {
        const value = target.value
        // console.log('value:', value)
        // checklist.title = value

        onSaveTask(task)
        onBlur()
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

        // console.log('percentage:', percentage)
        return `${percentage}%`
    }

    const onRemoveTodo = (todoId) => {
        // console.log('todoId:', todoId)
        // checklist = checklist.list.filter(todo => todo.id !== todoId)
        const idx = checklist.list.findIndex(todo => todo.id === todoId)
        checklist = checklist.list.splice(idx, 1)
        onSaveTask(task)
    }

    // console.log('checklist:', checklist)
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
                <span>{getProgressPercent()}</span>
                <div className='progress-bar'>
                    <div className='progress-bar-current' style={{ width: `${getProgressPercent()}` }}>

                    </div>
                </div>
            </div>
            <div className='todo-list'>
                {checklist.list.map(todo => <div key={todo.id}
                    className='todo-preview  flex align-center justify-between' >
                    <div >
                        <span><Checkbox
                            checked={todo.isDone}
                            onChange={() => onTodoIsDone(todo.id)} /></span>
                        <span className={todo.isDone ? 'todo-title done' : 'todo-title'}> {todo.title}</span>
                    </div>
                    <span className='todo-menu' onClick={() => onRemoveTodo(todo.id)}><BsThreeDots /></span>
                    {/* <span className='todo-menu' onClick={()=>toggleModal('todo')}><BsThreeDots /></span> */}

                </div>)}
            </div>
            <div className='add-checklist'>
                {!focused && <button className='add-checklist-item-btn' onClick={onFocus}>Add an item</button>}
                {focused && <div>
                    <textarea
                        // onBlur={onClearFocus}
                        onChange={onHandleChange}
                        className='simple-txtarea'
                        cols="60" rows="2"
                        placeholder='Add an item'
                    ></textarea>
                    <button className='add-btn'
                        onClick={onSaveTxt}>Add</button>
                    <button className='cancel-btn'
                        onClick={onClearFocus}>Cancel</button>
                </div>}
            </div>
        </section>
    )
}