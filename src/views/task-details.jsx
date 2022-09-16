import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { IoMdList } from 'react-icons/io'


import { boardService } from "../services/board.service"
import { LabelPicker } from "../cmps/label-picker"
import { saveTask } from "../store/board.actions"


export const TaskDetails = () => {
    const params = useParams()

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

    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState)
    }



    const onSaveTask = (newTask) => {
        dispatch(saveTask(boardId, groupId, newTask))
    }

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
                <aside className="details-side-bar">
                    <button onClick={toggleModal}>labels</button>
                    <button onClick={toggleModal}>date</button>
                    <button onClick={toggleModal}>attachments</button>
                </aside>
                {isModalOpen && < LabelPicker task={task} onSaveTask={onSaveTask} labels={board.labels} toggleModal={toggleModal} />}
            </section>
        </div>
    )
}