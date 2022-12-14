import React, { useEffect, useState, useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { useDropzone } from 'react-dropzone'

import { IoLogoDesignernews, IoMdClose, } from 'react-icons/io'
import { AiOutlineUser } from 'react-icons/ai'
import { BsTag, BsSquareHalf } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { TbCheckbox } from 'react-icons/tb'
import { ImAttachment } from 'react-icons/im'
import { MdOutlineContentCopy } from 'react-icons/md'
import { TbArrowNarrowRight } from 'react-icons/tb'

import { DateShower } from "../cmps/task-details/date-shower"
import { boardService } from "../services/board.service"

import { TaskTitle } from "../cmps/task-details/task-title"
import { TaskDescription } from "../cmps/task-details/task-description"
import { TaskAttachments } from "../cmps/task-details/task-attachments"
import { TaskActivities } from "../cmps/task-details/task-activities"
import { saveTask, saveBoard, loadBoard, saveGroup } from "../store/board.actions"
import { TaskAdditivesModal } from "../cmps/addivities-modal/task-additives-modal"
import { Members } from "../cmps/task-details/task-members"
import { LoaderIcon } from "../cmps/loader-icon"


import { LabelShower } from "../cmps/task-details/label-shower"
import { TaskChecklist } from "../cmps/task-details/task-checklist"
import { uploadService } from "../services/upload.service"


export const TaskDetails = () => {
    const params = useParams()
    const { boardId, groupId, taskId } = params
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const board = useSelector(state => state.boardModule.board)
    const user = useSelector(state => state.userModule.user)
    const [task, setTask] = useState()
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
        let currTask = group?.tasks?.find(task => task.id === taskId)
        if (!currTask.attachments) currTask.attachments = []
        if (!currTask.checklists) currTask.checklists = []
        if (!currTask.members) currTask.members = []
        isUserJoined(currTask)
        setTask(currTask)
    }

    const onDrop = useCallback(async acceptedFiles => {
        const group = board.groups.find(group => group.id === groupId)
        let currTask = group.tasks.find(task => task.id === taskId)
        const img = await uploadService.uploadImgFromDrag(acceptedFiles)
        if (!currTask.attachments) task.attachments = []
        // if (!task.background) task.background = 'header'
        const newAttachment = boardService.createNewAttachment(img.url, img.height, img.width, img.name, img.type)
        currTask.attachments.unshift(newAttachment)
        onSaveTask(currTask, `attached ${img.name} to`, currTask.title, null, newAttachment)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ noClick: true, onDrop })

    const onCloseModal = () => {
        navigate(`/board/${boardId}`)
    }

    const onStopPropagation = (ev) => {
        ev.stopPropagation()
    }

    const toggleAdditivesModal = (ev, type) => {
        const posDetails = ev.target.getBoundingClientRect()
        const windowWidth = window.innerWidth
        if (type === isAdditivesModalOpen?.type) setIsAdditivesModalOpen(null)
        else setIsAdditivesModalOpen({ type, posDetails, windowWidth })
    }

    const isUserJoined = () => {

        if (!task) return
        const { members } = task
        const member = members.find(id => id === user?._id)
        if (!member) return true
    }

    const onAddUserToTask = () => {
        task.members = [...task.members, user._id]

        onSaveTask(task, `joined`, task.title)

        board.members = [...board.members, user]
        dispatch(saveBoard(board))
    }

    const convertTodoToTask = (txt) => {
        const group = board.groups.find(group => group.id === groupId)
        const newTask = boardService.createTask(txt)
        group.tasks.push(newTask)
        dispatch(saveGroup(group, task, `converted ${txt} from a checklist item on`, task.title))
    }

    const onSaveTask = (newTask, txt, link, opTxt, attachment, onActId, comment) => {
        dispatch(saveTask(groupId, newTask, txt, link, opTxt, attachment, onActId, comment))
    }

    const removeActivity = (id) => {

        const activityIdx = board.activities.findIndex(activity => id === activity.onActId)
        board.activities.splice(activityIdx, 1)
        dispatch(saveBoard(board))
    }

    const handleChange = (ev) => {
        const value = ev.target.value
        task.title = value
        onSaveTask(task, `changed the title on`, value)
    }


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

                {/* <section className="task-details-content " > */}
                <section {...getRootProps({ className: 'task-details-content' })} >
                    <input {...getInputProps()} />
                    <div className="task-details-main">
                        <div className="task-data-container">
                            {(task.members.length !== 0) && <Members members={board.members} membersId={task.members} toggleModal={toggleAdditivesModal} />}
                            {(task.labelIds.length !== 0) && <LabelShower toggleModal={toggleAdditivesModal} labelIds={task.labelIds} />}


                            {task?.dueDate?.time && < DateShower onSaveTask={onSaveTask} toggleModal={toggleAdditivesModal} task={task} />}
                        </div>
                        <TaskDescription task={task}
                            onSaveTask={onSaveTask} />
                        {task?.attachments?.length > 0 && <TaskAttachments task={task}
                            onSaveTask={onSaveTask}
                            toggleAdditivesModal={toggleAdditivesModal} />}
                        {task?.checklists?.length > 0 && <TaskChecklist
                            task={task}
                            onSaveTask={onSaveTask}
                            convertTodoToTask={convertTodoToTask}
                            toggleModal={toggleAdditivesModal}
                            removeActivity={removeActivity}
                        />}

                        <TaskActivities
                            user={user}
                            board={board}
                            task={task}
                            onSaveTask={onSaveTask} />
                    </div>
                    <aside className="details-side-bar">
                        {isUserJoined() && <div className="join-section">
                            <h3>Suggested</h3>
                            <button onClick={onAddUserToTask}><AiOutlineUser />Join</button>
                        </div>}
                        <div className="additives-modal">
                            <h3 >Add to card</h3>
                            <button onClick={(ev) => toggleAdditivesModal(ev, 'members')}><AiOutlineUser />Members</button>
                            <button onClick={(ev) => toggleAdditivesModal(ev, 'label-picker')}><BsTag /> Labels</button>
                            <button onClick={(ev) => toggleAdditivesModal(ev, 'checklist-picker')}><TbCheckbox /> CheckList</button>
                            <button onClick={(ev) => toggleAdditivesModal(ev, 'date-picker')}><AiOutlineClockCircle /> Dates</button>
                            <button onClick={(ev) => toggleAdditivesModal(ev, 'attachment')}><ImAttachment /> Attachments</button>
                            <button onClick={(ev) => toggleAdditivesModal(ev, 'cover-picker')}><span><BsSquareHalf /></span> Cover</button>
                        </div>
                        <div className="actions-modal">
                            <h3>Actions</h3>
                            <button onClick={(ev) => toggleAdditivesModal(ev, 'moveto-picker')}><TbArrowNarrowRight /> Move</button>
                            <button onClick={(ev) => toggleAdditivesModal(ev, 'copy-picker')}><MdOutlineContentCopy /> Copy</button>
                        </div>
                    </aside>
                    {isAdditivesModalOpen && <TaskAdditivesModal
                        modalInfo={isAdditivesModalOpen}
                        task={task}
                        board={board}
                        group={group}
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