import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { IoMdList } from 'react-icons/io'


import { boardService } from "../services/board.service"


export const TaskDetails = () => {
    const params = useParams()
    // const dispatch = useDispatch()
    const { boardId, groupId, taskId } = params
    // const task = useSelector(state => state.boardModule.board)
    const [task, setTask] = useState()

    useEffect(() => {
        loadTask()
    }, [])

    const loadTask = async () => {
        try {
            const currTask = await boardService.getTaskById(boardId, groupId, taskId)
            setTask(currTask)
        } catch (err) {
            console.log('Couldnt get task:', err);
        }
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