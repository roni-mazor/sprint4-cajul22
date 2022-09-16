import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { TaskTitle } from "../cmps/task-details/task-title"
import { TaskDescription } from "../cmps/task-details/task-description"
import { TaskAttachments } from "../cmps/task-details/task-attachments"
import { TaskActivities } from "../cmps/task-details/task-activities"


export const TaskDetails = () => {
    const params = useParams()
    const navigate = useNavigate()

    // const dispatch = useDispatch()
    const { boardId, groupId, taskId } = params
    const board = useSelector(state => state.boardModule.board)
    const [task, setTask] = useState()

    useEffect(() => {
        loadTask()
    }, [])

    const loadTask = () => {

        const group = board.groups.find(group => group.id === groupId)
        const currTask = group.tasks.find(task => task.id === taskId)
        // const currTask =  boardService.getTaskById(boardId, groupId, taskId)
        setTask(currTask)
    }

    const onCloseModal = () => {
        navigate(`/board/${boardId}`)
    }

    const onStopPropagation = (ev) => {
        ev.stopPropagation()
    }
    // console.log('task:', task)

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

                </section>
                <section className="task-btn flex column">
                    <button>Members</button>
                    <button>Labels</button>
                    <button>Attachments</button>
                </section>
           
        </div>
    )
}