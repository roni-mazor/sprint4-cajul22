import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { saveTask, toggleLabelTxt } from "../store/board.actions"
import GuestImg from '../assets/img/guest-img.svg'
import { ImAttachment } from 'react-icons/im'
import { TbCheckbox } from 'react-icons/tb'
import { FaRegComment } from 'react-icons/fa'
import { GrTextAlignFull } from 'react-icons/gr'


import { useEffect, useState } from "react"
import { DateBadge } from "./task-details/date-badge"
import { FaPencilAlt } from "react-icons/fa"
import { FastEditModal } from "./fast-edit-modal"
import { utilService } from "../services/util.service"

export const TaskPreview = ({ task, boardId, groupId }) => {
    const labels = useSelector(state => state.boardModule.board.labels)
    const board = useSelector(state => state.boardModule.board)
    const isLabelTxtOpen = useSelector(state => state.boardModule.isLabelTxtOpen)
    const dispatch = useDispatch()
    const [isFastEdit, setIsFastEdit] = useState({ isOpen: false })

    useEffect(() => {
        getTaskMembers()
    }, [])

    const onToggleLabelTxt = (ev) => {
        ev.preventDefault()
        dispatch(toggleLabelTxt())
    }

    const onSaveTask = (newTask, txt, link, opTxt) => {
        dispatch(saveTask(groupId, newTask, txt, link, opTxt))
    }

    const getDoneChecklist = () => {
        if (!task.checklists) return
        let total = 0
        let done = 0
        task.checklists.forEach(checklist => {
            const isDone = checklist.list.reduce((doneTodos, todo) => {
                if (todo.isDone) done++
                total++
                return doneTodos
            }, done)
        })
        return {
            isDone: done,
            totalTodos: total
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

    const todos = getDoneChecklist()
    const dispalyDoneChecklist = () => {
        // const todos = getDoneChecklist()
        if (todos.totalTodos === 0) return
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
        // const todos = getDoneChecklist()
        if (!todos) return
        if (todos.isDone === todos.totalTodos && todos.totalTodos > 0)
            isAllDone = true
        return isAllDone
    }

    const openFastEdit = (ev) => {
        ev.preventDefault()
        const posDetails = ev.target.getBoundingClientRect()
        const windowWidth = window.innerWidth
        setIsFastEdit({ isOpen: true, posDetails, windowWidth })
    }

    const isAllDone = allDone()
    const openLabelClassName = (isLabelTxtOpen) ? 'open' : ''
    const linkToTask = `/board/${boardId}/${groupId}/${task.id}`
    return (<>

        {isFastEdit?.isOpen && <FastEditModal linkToTask={linkToTask} isAllDone={isAllDone} dispalyDoneChecklist={dispalyDoneChecklist}
            onSaveTask={onSaveTask} getTaskMembers={getTaskMembers} labels={labels} getCoverHeight={getCoverHeight}
            task={task} modalInfo={isFastEdit} toggleModal={setIsFastEdit}  groupId={groupId} />}

        <Link to={linkToTask} className="task-preview">
            <button className='edit-btn' onClick={openFastEdit}>
                <FaPencilAlt />
            </button>
            {(!task.background || task.background === 'header') && <div>

                {task.cover && <div className="task-cover"
                    style={{ backgroundImage: `url(${task.cover.url}) `, height: `${getCoverHeight()}px` }}></div>}
                {task.coverClr && <div className="task-cover"
                    style={{ backgroundColor: task.coverClr, height: `32px` }}></div>}

                <div className="task-content" >

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
                    <p className="task-preview-title">{task.title}</p>
                    <section className="task-info-container flex">
                        <section className="task-badges flex align-center">
                            {task?.dueDate && <DateBadge onSaveTask={onSaveTask} task={task} />}
                            {task?.description && <span className="task-badges description"><GrTextAlignFull /></span>}
                            {task.comment && <div className="task-badges comment flex align-center">
                                <span className=""><FaRegComment /></span>
                                <p>{task.comment}</p>
                            </div>}
                            {task?.attachments?.length > 0 &&
                                <div className="task-badges attached flex align-center">
                                    <span className="attach-icon"> <ImAttachment /></span>
                                    <p>{task.attachments.length}</p></div>}

                            {task?.checklists?.length > 0 && <div
                                className={`task-badges checklist flex align-center ${isAllDone ? 'done' : ''}`}>
                                <span className="checklist-icon"><TbCheckbox /></span>
                                <p className="todo-num">{dispalyDoneChecklist()}</p></div>}
                        </section>
                        <section className="task-user-container flex">
                            {getTaskMembers().map(member => <img key={utilService.makeId()} className="task-users"
                                src={member?.imgUrl ? member.imgUrl : GuestImg} alt="" />)}
                        </section>
                    </section>
                </div>
            </div>}
            {task.background === 'body' && <div className="mini-task-container">
                {task.cover && <div className="mini-task" style={{ backgroundImage: `url(${task.cover.url}) `, minHeight: `${getCoverHeight()}px` }}>
                    <p className="img-bg">{task.title}</p></div>}
                {task.coverClr && <div className="mini-task" style={{ backgroundColor: task.coverClr }}>
                    <div className="mini-task-title" ><p >{task.title}</p></div> </div>}
            </div>}
        </Link>
    </>
    )
}