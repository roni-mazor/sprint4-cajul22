import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { IoMdClose, } from 'react-icons/io'
import { AiOutlineUser } from 'react-icons/ai'


import { TaskTitle } from "../cmps/task/task-title"
import { TaskDescription } from "../cmps/task/task-description"
import { TaskAttachments } from "../cmps/task/task-attachments"
import { TaskActivities } from "../cmps/task/task-activities"
import { LabelPicker } from "../cmps/label-picker"
import { saveTask } from "../store/board.actions"
import { loadUsers } from "../store/user.actions"
import { uploadService } from "../services/upload.service"
import { ImgUploader } from "../cmps/img-uploader"
import { utilService } from "../services/util.service"
import { TaskAdditivesModal } from "../cmps/task/task-additives-modal"
import { Members } from "../cmps/task/task-members"


import { BsTag } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { TbCheckbox } from 'react-icons/tb'
import { ImAttachment } from 'react-icons/im'
import { LabelShower } from "../cmps/task/label-shower"


export const TaskDetails = () => {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { boardId, groupId, taskId } = params
    const board = useSelector(state => state.boardModule.board)
    const members = useSelector(state => state.userModule.users)
    const [task, setTask] = useState()
    const [isAdditivesModalOpen, setIsAdditivesModalOpen] = useState(null)
    const group = board.groups.find(group => group.id === groupId)
    const user = useSelector(state => state.userModule.user)

    useEffect(() => {
        loadTask()
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

    const onUploadImg = async (ev) => {
        const url = await uploadService.uploadImg(ev)
        let newTask = task
        if (!newTask.attachment) newTask.attachment = []
        newTask.attachment.unshift({ id: utilService.makeId(5), url })
        console.log('newTask:', newTask)
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
                        <Members user={user} toggleModal={toggleAdditivesModal}/>
                        <LabelShower toggleModal={toggleAdditivesModal}  labelIds={task.labelIds} />
                        <TaskDescription />
                        {task.attachment && <TaskAttachments task={task} />}
                        <TaskActivities user={user} />
                    </div>
                    <aside className="details-side-bar">
                        <h3>Suggested</h3>
                        <button /*onClick={() => toggleAdditivesModal('members')}*/><AiOutlineUser/>Join</button>
                        <h3>Add to card</h3>
                        <button onClick={() => toggleAdditivesModal('members')}><AiOutlineUser/>Members</button>
                        <button onClick={() => toggleAdditivesModal('label-picker')}><BsTag /> Labels</button>
                        <button onClick={toggleAdditivesModal}><AiOutlineClockCircle /> Dates</button>
                        <button onClick={toggleAdditivesModal}><ImAttachment /> Attachments</button>
                        <button>Cover</button>
                        <button><TbCheckbox /> CheckList</button>
                        {/* <ImgUploader onUploadImg={onUploadImg} /> */}
                        {/* <label htmlFor="Attachment">
                            <input type="file" id="Attachment" onChange={onUploadImg} />
                        </label> */}
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