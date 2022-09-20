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
import { saveTask } from "../store/board.actions"
import { loadUser, loadUsers } from "../store/user.actions"
import { uploadService } from "../services/upload.service"
import { ImgUploader } from "../cmps/img-uploader"
import { utilService } from "../services/util.service"
import { TaskAdditivesModal } from "../cmps/addivities-modal/task-additives-modal"
import { Members } from "../cmps/task-details/task-members"
import { LoaderIcon } from "../cmps/loader-icon"


import { LabelShower } from "../cmps/task-details/label-shower"
import { TaskChecklist } from "../cmps/task-details/task-checklist"


export const TaskDetails = () => {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { boardId, groupId, taskId } = params
    const board = useSelector(state => state.boardModule.board)
    const users = useSelector(state => state.userModule.users)
    const user = useSelector(state => state.userModule.user)
    const [task, setTask] = useState()
    let [isJoined, setIsJoined] = useState(false)
    const [isAdditivesModalOpen, setIsAdditivesModalOpen] = useState(null)
    const group = board.groups.find(group => group.id === groupId)

    useEffect(() => {
        loadTask()
        dispatch(loadUsers())
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
        setTask(currTask)
        if (currTask.isUserJoined) return setIsJoined(true)
    }

    const onCloseModal = () => {
        navigate(`/board/${boardId}`)
    }

    const onStopPropagation = (ev) => {
        ev.stopPropagation()
    }

    const toggleAdditivesModal = (type) => {
        console.log('isAdditivesModalOpen:', isAdditivesModalOpen)
        if (type === isAdditivesModalOpen) setIsAdditivesModalOpen(null)
        else setIsAdditivesModalOpen(type)
    }

    const onAddUserToTask = () => {
        toggleSuggestedJoin()
        task.members = [...task.members, user]
        task.isUserJoined = true
        onSaveTask(task)
    }

    const toggleSuggestedJoin = () => {
        setIsJoined(isJoined = !isJoined)
    }



    const onSaveTask = (newTask) => {
        dispatch(saveTask(boardId, groupId, newTask))
    }

    const handleChange = (ev) => {
        const value = ev.target.value
        let newTask = task
        newTask.title = value
        onSaveTask(newTask)
    }

    // console.log('task:', task)
    if (!task) return <LoaderIcon />
    return (
        <div className="task-details-container" onClick={onCloseModal}>
            <section className="task-details-modal" onClick={onStopPropagation}>
                {task.cover &&
                    <header className="task-details-header"
                        style={{ backgroundImage: `url(${task.cover.url})` }}></header>}
                {task.coverClr &&
                    <header className="task-details-header"
                        style={{ backgroundColor: task.coverClr, height:'116px' }}></header>}
                <TaskTitle task={task}
                    handleChange={handleChange}
                    group={group} />

                <section className="task-details-content " >
                    <div>
                        <div className="flex">
                            {task.members !== [] && <Members members={task.members} toggleModal={toggleAdditivesModal} />}
                            <LabelShower toggleModal={toggleAdditivesModal} labelIds={task.labelIds} />

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
                        {/* {task?.checklists?.length >0 &&<TaskChecklist/>} */}
                        <TaskActivities user={user} />
                    </div>
                    <aside className="details-side-bar">
                        {!isJoined && <div>
                            <h3>Suggested</h3>
                            <button onClick={onAddUserToTask}><AiOutlineUser />Join</button>
                        </div>}
                        <h3>Add to card</h3>
                        <button onClick={() => toggleAdditivesModal('members')}><AiOutlineUser />Members</button>
                        <button onClick={() => toggleAdditivesModal('label-picker')}><BsTag /> Labels</button>
                        <button onClick={() => toggleAdditivesModal('date-picker')}><AiOutlineClockCircle /> Dates</button>
                        <button onClick={() => toggleAdditivesModal('attachment')}><ImAttachment /> Attachments</button>
                        <button onClick={() => toggleAdditivesModal('cover-picker')}><span><BsSquareHalf /></span> Cover</button>
                        <button onClick={() => toggleAdditivesModal('check-list')}><TbCheckbox /> CheckList</button>
                    </aside>
                    {isAdditivesModalOpen && <TaskAdditivesModal
                        type={isAdditivesModalOpen}
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