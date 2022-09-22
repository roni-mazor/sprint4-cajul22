import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { saveTask, toggleLabelTxt } from "../store/board.actions"
import GuestImg from '../assets/img/guest-img.svg'
import { ImAttachment } from 'react-icons/im'
import { TbCheckbox } from 'react-icons/tb'

import { useEffect, useState } from "react"
import { DateBadge } from "./task-details/date-badge"

export const TaskPreview = ({ task, boardId, groupId }) => {
    const labels = useSelector(state => state.boardModule.board.labels)
    const board = useSelector(state => state.boardModule.board)
    const isLabelTxtOpen = useSelector(state => state.boardModule.isLabelTxtOpen)
    const dispatch = useDispatch()

    useEffect(() => {
        getTaskMembers()
    }, [])

    const onToggleLabelTxt = (ev) => {
        ev.preventDefault()
        dispatch(toggleLabelTxt())
    }

    const onSaveTask = (newTask) => {
        console.log(boardId)
        console.log(groupId)
        console.log(newTask)
        dispatch(saveTask(boardId, groupId, newTask))
    }

    const getDoneChecklist = () => {
        if (!task.checklists) return
        const todos = task.checklists.reduce((totalTodos, checklist) => {
            const isDone = checklist.list.reduce((doneTodos, todo) => {
                if (todo.isDone) doneTodos++
                totalTodos++
                return doneTodos
            }, 0)
            return { isDone, totalTodos }
            //check maybe return the reducer immediatly
        }, 0)
        return {
            isDone: todos.isDone,
            totalTodos: todos.totalTodos
        }
    }

    const getCoverHeight = () => {
        if (!task.cover) return
        if (task.cover.height > 3000) return task.cover.height * 0.05
        if (task.cover.height > 1000) return task.cover.height * 0.1
        if (task.cover.height < 290) return task.cover.height
        if (task.cover.height < 600) return task.cover.height * 0.5
        if (task.cover.height < 800) return task.cover.height * 0.3
        else return task.cover.height * 0.4
    }

    const dispalyDoneChecklist = () => {
        const todos = getDoneChecklist()
        if (!todos) return
        return `${todos.isDone}/${todos.totalTodos}`
    }

    const getTaskMembers = () => {
        const { members } = task
        let taskPreviewMembers = []
        // let taskPreviewMembers = members.map((memberId) => {
        //     return board.members.find(member => member._id === memberId)
        // })
        for (let i = 0; i < members?.length; i++) {
            const currMember = board.members.find(member => member._id === members[i])
            taskPreviewMembers.push(currMember)
        }

        return taskPreviewMembers
    }

    const allDone = () => {
        let isAllDone = false
        const todos = getDoneChecklist()
        if (!todos) return
        if (todos.isDone === todos.totalTodos && todos.totalTodos > 0)
            isAllDone = true
        return isAllDone
    }

    const isAllDone = allDone()
    const openLabelClassName = (isLabelTxtOpen) ? 'open' : ''
    return (
        <Link to={`/board/${boardId}/${groupId}/${task.id}`} className="task-preview">
            {(!task.background || task.background === 'header') && <div>

                {task.cover && <div className="task-cover"
                    style={{ backgroundImage: `url(${task.cover.url}) `, height: `${getCoverHeight()}px` }}></div>}
                {task.coverClr && <div className="task-cover"
                    style={{ backgroundColor: task.coverClr, height: `32px` }}></div>}

                <div className="task-content">

                    <section className="labels-container">
                        {task.labelIds.map((id) => {
                            const label = labels.find(l => l.id === id)
                            return <div key={id} className={`label-btn ${label.colorName} ${openLabelClassName}`}
                                style={{ backgroundColor: !isLabelTxtOpen ? label.color : '' }}
                                onClick={onToggleLabelTxt}  >

                                {isLabelTxtOpen && <div className="color-ball-display preview" style={{ background: label.color }}> </div>}
                                {isLabelTxtOpen && <span>{label.title}</span>}
                            </div>
                        })}
                    </section>
                    <p>{task.title}</p>
                    <section className="task-user-container flex">
                        {getTaskMembers().map(member => <img className="task-users"
                            src={member?.imgUrl ? member.imgUrl : GuestImg} alt="" />)}
                    </section>
                    <section className="task-badges">
                        {task?.dueDate && <DateBadge onSaveTask={onSaveTask} task={task} />}
                        {task?.attachments?.length > 0 && <span className="task-badges attached">
                            <ImAttachment />  {task.attachments.length}</span>}
                        {task?.checklists?.length > 0 &&
                            <span className={isAllDone ? 'task-badges checklist done' : 'task-badges checklist'}>
                                <span><TbCheckbox /></span>
                                {dispalyDoneChecklist()}</span>}
                    </section>
                </div>
            </div>}
            {task.background === 'body' && <div>
                {task.cover && <div className="mini-task" style={{ backgroundImage: `url(${task.cover.url}) `, height: `${getCoverHeight()}px` }}>
                    <p className="img-bg">{task.title}</p></div>}
                {task.coverClr && <div className="mini-task" style={{ backgroundColor: task.coverClr }}>  <p >{task.title}</p></div>}
            </div>}
        </Link>
    )
}