import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { TaskTitle } from "../cmps/task-details/task-title"
import { TaskDescription } from "../cmps/task-details/task-description"
import { TaskAttachments } from "../cmps/task-details/task-attachments"
import { TaskActivities } from "../cmps/task-details/task-activities"
import { LabelPicker } from "../cmps/label-picker"
import { saveTask } from "../store/board.actions"


export const TaskDetails = () => {
    const params = useParams()
    const navigate = useNavigate()

    // const dispatch = useDispatch()
    const dispatch = useDispatch()
    const { boardId, groupId, taskId } = params
    const board = useSelector(state => state.boardModule.board)
    const [task, setTask] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false)

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
    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState)
    }



    const onSaveTask = (newTask) => {
        dispatch(saveTask(boardId, groupId, newTask))
    }

    const handleChange = (ev) => {
        const value = ev.target.value
        // console.log('value:', value)
    }

    if (!task) return <h1>Loading...</h1>
    return (
        <div className="task-details-container" onClick={onCloseModal}>
                <section className="task-details-content " onClick={onStopPropagation}>
                               <TaskTitle task={task}
                        handleChange={handleChange} />
                    <TaskDescription />
                    <TaskAttachments />
                    <TaskActivities />

                <aside className="details-side-bar">
                    <button onClick={toggleModal}>labels</button>
                    <button onClick={toggleModal}>date</button>
                    <button onClick={toggleModal}>attachments</button>
                </aside>
                {isModalOpen && < LabelPicker task={task} onSaveTask={onSaveTask}  toggleModal={toggleModal} />}
                </section>
                          
        </div>
    )
}