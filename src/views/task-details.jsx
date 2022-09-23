import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { IoMdClose, } from 'react-icons/io'
import { AiOutlineUser } from 'react-icons/ai'
import { BsTag, BsSquareHalf } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { TbCheckbox } from 'react-icons/tb'
import { ImAttachment } from 'react-icons/im'


import { TaskTitle } from "../cmps/task-details/task-title"
import { TaskDescription } from "../cmps/task-details/task-description"
import { TaskAttachments } from "../cmps/task-details/task-attachments"
import { TaskActivities } from "../cmps/task-details/task-activities"
import { saveTask, saveBoard, loadBoard } from "../store/board.actions"
import { TaskAdditivesModal } from "../cmps/addivities-modal/task-additives-modal"
import { Members } from "../cmps/task-details/task-members"
import { LoaderIcon } from "../cmps/loader-icon"


import { LabelShower } from "../cmps/task-details/label-shower"
import { TaskChecklist } from "../cmps/task-details/task-checklist"
import { DateShower } from "../cmps/task-details/date-shower"


export const TaskDetails = () => {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { boardId, groupId, taskId } = params
    const board = useSelector(state => state.boardModule.board)
    const user = useSelector(state => state.userModule.user)
    const [task, setTask] = useState()
    let [isJoined, setIsJoined] = useState(false)
    const [isAdditivesModalOpen, setIsAdditivesModalOpen] = useState(null)
    const group = board.groups.find(group => group.id === groupId)

    useEffect(() => {
        loadBoard()
        loadTask()
    }, [])

    useEffect(() => {
        loadTask()
    }, [board])

    const loadTask = () => {

        // const currTask =  boardService.getTaskById(boardId, groupId, taskId)
        const group = board.groups.find(group => group.id === groupId)
        let currTask = group.tasks.find(task => task.id === taskId)
        if (!currTask.attachments) currTask.attachments = []
        if (!currTask.checklists) currTask.checklists = []
        if (!currTask.members) currTask.members = []
        isUserJoined(currTask)
        setTask(currTask)
        // console.log('task:', task)        
    }

    const onCloseModal = () => {
        navigate(`/board/${boardId}`)
    }

    const onStopPropagation = (ev) => {
        ev.stopPropagation()
    }

    const toggleAdditivesModal = (ev, type) => {
        const posDetails = ev.target.getBoundingClientRect()
        const windowDetails = window.screen
        console.log({ type, posDetails })
        if (type === isAdditivesModalOpen) setIsAdditivesModalOpen(null)
        else setIsAdditivesModalOpen({ type, posDetails, windowDetails })
    }

    const isUserJoined = () => {
        if (!task) return
        const { members } = task
        const member = members.find(id => id === user._id)
        if (!member) return true
    }

    const onAddUserToTask = () => {
        task.members = [...task.members, user._id]

        onSaveTask(task, `joined`, task.title)

        board.members = [...board.members, user]
        dispatch(saveBoard(board))
    }

    const toggleSuggestedJoin = () => {
        setIsJoined(isJoined = !isJoined)
    }


    const onSaveTask = (newTask, txt, link, opTxt, attachment, comment) => {
        dispatch(saveTask(groupId, newTask, txt, link, opTxt, attachment, comment))
    }

    const handleChange = (ev) => {
        const value = ev.target.value
        let newTask = task
        newTask.title = value
        onSaveTask(newTask, `changed the title on`, value)
    }

    // console.log('task:', task)
    if (!task) return <LoaderIcon />
    return (
        <div className="task-details-container" onClick={onCloseModal}>
            <section className="task-details-modal" onClick={onStopPropagation}>
                {task.cover &&
                    <header className="task-details-header"
                        style={{ backgroundImage: `url(${task.cover.url})`, backgroundColor: task.cover.color }}>
                        <button className="cover-btn-header"
                            onClick={(ev) => toggleAdditivesModal(ev, 'cover-picker')}><span><BsSquareHalf /></span> Cover</button>
                    </header>}
                {task.coverClr &&
                    <header className="task-details-header"
                        style={{ backgroundColor: task.coverClr, height: '116px' }}>
                        <button className="cover-btn-header"
                            onClick={(ev) => toggleAdditivesModal(ev, 'cover-picker')}><span><BsSquareHalf /></span> Cover</button>
                    </header>}
                <TaskTitle task={task}
                    handleChange={handleChange}
                    group={group} />

                <section className="task-details-content " >
                    <div className="task-details-main">
                        <div className="flex">
                            {(task.members.length !== 0) && <Members members={board.members} membersId={task.members} toggleModal={toggleAdditivesModal} />}
                            <LabelShower toggleModal={toggleAdditivesModal} labelIds={task.labelIds} />


                        {task?.dueDate?.time && < DateShower onSaveTask={onSaveTask} toggleModal={toggleAdditivesModal} task={task} />}
                        </div>
                        <TaskDescription task={task}
                            onSaveTask={onSaveTask} />
                        {task?.attachments?.length > 0 && <TaskAttachments task={task}
                            onSaveTask={onSaveTask} />}
                        {task?.checklists?.length > 0 && <TaskChecklist
                            task={task}
                            onSaveTask={onSaveTask}
                            toggleModal={toggleAdditivesModal}
                        />}

                        <TaskActivities
                            user={user}
                            board={board}
                            task={task}
                            onSaveTask={onSaveTask} />
                    </div>
                    <aside className="details-side-bar">
                        {isUserJoined() && <div>
                            <h3>Suggested</h3>
                            <button onClick={onAddUserToTask}><AiOutlineUser />Join</button>
                        </div>}
                        <h3>Add to card</h3>
                        <button onClick={(ev) => toggleAdditivesModal(ev, 'members')}><AiOutlineUser />Members</button>
                        <button onClick={(ev) => toggleAdditivesModal(ev, 'label-picker')}><BsTag /> Labels</button>
                        <button onClick={(ev) => toggleAdditivesModal(ev, 'date-picker')}><AiOutlineClockCircle /> Dates</button>
                        <button onClick={(ev) => toggleAdditivesModal(ev, 'attachment')}><ImAttachment /> Attachments</button>
                        <button onClick={(ev) => toggleAdditivesModal(ev, 'cover-picker')}><span><BsSquareHalf /></span> Cover</button>
                        <button onClick={(ev) => toggleAdditivesModal(ev, 'check-list')}><TbCheckbox /> CheckList</button>
                    </aside>
                    {isAdditivesModalOpen && <TaskAdditivesModal
                        modalInfo={isAdditivesModalOpen}
                        task={task}
                        onSaveTask={onSaveTask}
                        toggleModal={toggleAdditivesModal}
                    />}
                </section>
                <button className="close-modal"
                    onClick={onCloseModal}><IoMdClose /></button>
            </section>

        </div>
    )
}