import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { IoMdList } from 'react-icons/io'


import { boardService } from "../services/board.service"


export const TaskDetails = () => {
    const params = useParams()

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

    // console.log('task:', task)

    if (!task) return <h1>Loading...</h1>
    return (
        <div className="task-details-container">
            <section className="task-details">
                <div className="task-details-header">
                    <h1>{task.title}</h1>
                </div>
                <div className="description-container">
                    <div className="description-title">
                        <IoMdList />   <h1>description</h1>
                    </div>
                    <textarea name="" id="" cols="60" rows="2"></textarea>
                </div>
            </section>
        </div>
    )
}