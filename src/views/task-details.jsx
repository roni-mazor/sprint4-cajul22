import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { IoMdClose, } from 'react-icons/io'
import { AiOutlineUser } from 'react-icons/ai'
import { BsTag, BsSquareHalf } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { TbCheckbox } from 'react-icons/tb'
import { ImAttachment } from 'react-icons/im'

import { BsTag, BsSquareHalf } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { TbCheckbox } from 'react-icons/tb'
import { ImAttachment } from 'react-icons/im'


import { TaskTitle } from "../cmps/task-details/task-title"
import { TaskDescription } from "../cmps/task-details/task-description"
import { TaskAttachments } from "../cmps/task-details/task-attachments"
import { TaskActivities } from "../cmps/task-details/task-activities"
import { saveTask } from "../store/board.actions"
import { loadUsers } from "../store/user.actions"
import { uploadService } from "../services/upload.service"
import { ImgUploader } from "../cmps/img-uploader"
import { utilService } from "../services/util.service"
import { TaskAdditivesModal } from "../cmps/addivities-modal/task-additives-modal"
import { Members } from "../cmps/task-details/task-members"


import { LabelShower } from "../cmps/task-details/label-shower"


export const TaskDetails = () => {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { boardId, groupId, taskId } = params
    const board = useSelector(state => state.boardModule.board)
    const users = useSelector(state => state.userModule.users)
    const user = useSelector(state => state.userModule.user)
    const [task, setTask] = useState()
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
        const currTask = group.tasks.find(task => task.id === taskId)
        setTask(currTask)
    }

    const onCloseModal = () => {
        navigate(`/board/${boardId}`)
    }

    const onStopPropagation = (ev) => {
        ev.stopPropagation()
    }
    const toggleAdditivesModal = (type) => {
        if (type === isAdditivesModalOpen) setIsAdditivesModalOpen(null)
        else setIsAdditivesModalOpen(type)
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

   
    console.log('task:', task)
    if (!task) return <h1>Loading...</h1>
    return (
        <div className="task-details-container" onClick={onCloseModal}>
            <section className="task-details-modal" onClick={onStopPropagation}>
                <TaskTitle task={task}
                    handleChange={handleChange}
                    group={group} />

                <section className="task-details-content " >
                    <div>
                        <Members user={user} toggleModal={toggleAdditivesModal} />
                        <LabelShower toggleModal={toggleAdditivesModal} labelIds={task.labelIds} />
                        <TaskDescription task={task} />
                        {task.attachment && <TaskAttachments task={task} />}
                        <TaskActivities user={user} />
                    </div>
                    <aside className="details-side-bar">
                        <h3>Suggested</h3>
                        <button /*onClick={() => toggleAdditivesModal('members')}*/><AiOutlineUser />Join</button>
                        <h3>Add to card</h3>
                        <button onClick={() => toggleAdditivesModal('members')}><AiOutlineUser />Members</button>
                        <button onClick={() => toggleAdditivesModal('label-picker')}><BsTag /> Labels</button>
                        <button onClick={toggleAdditivesModal}><AiOutlineClockCircle /> Dates</button>
                        <button onClick={() => toggleAdditivesModal('attachment')}><ImAttachment /> Attachments</button>
                        <button><span><BsSquareHalf /></span> Cover</button>
                        <button><TbCheckbox /> CheckList</button>
                    </aside>
                    {isAdditivesModalOpen && <TaskAdditivesModal
                        type={isAdditivesModalOpen}
                        task={task}
                        onSaveTask={onSaveTask}
                        toggleModal={toggleAdditivesModal} />}
                </section>
                <button className="close-modal"
                    onClick={onCloseModal}><IoMdClose /></button>
            </section>

        </div>
    )
}