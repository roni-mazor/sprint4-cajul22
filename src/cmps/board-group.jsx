import { TaskPreview } from "./task-preview"
import { BsThreeDots } from 'react-icons/bs'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { saveGroup } from "../store/board.actions"
import { TaskCompose } from "./task-compose"

export const BoardGroup = ({ group }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState(group.title)


    const changeGroupTitle = ({ target }) => {
        setTitle(target.value)
    }
    const onTitleUpdate = () => {
        const g = { ...group, title }
        dispatch(saveGroup(g))
    }

    const addTask = (task) => {
        const g = { ...group }
        g.tasks.push(task)
        console.log(g)
        dispatch(saveGroup(g))
    }
    console.log(group)
    return (

        <section className="group-content">
            <header className="group-header">
                <input type="text"
                    onChange={changeGroupTitle}
                    onBlur={onTitleUpdate}
                    value={title} />
                <button className="group-actions-btn"><BsThreeDots /></button>
            </header>
            <ul className="task-container">
                {group.tasks.map(task => <TaskPreview key={task.id} task={task} />)}
            </ul>
            <TaskCompose addTask={addTask} />

        </section>

    )
}