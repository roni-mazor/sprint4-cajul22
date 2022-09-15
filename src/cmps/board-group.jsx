import { TaskPreview } from "./task-preview"
import { BsPlusLg, BsThreeDots } from 'react-icons/bs'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { titleUpdate } from "../store/board.actions"

export const BoardGroup = ({ group }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState(group.title)

    const changeGroupTitle = ({ target }) => {
        setTitle(target.value)
    }
    const onTitleUpdate = () => {
        dispatch(titleUpdate(title, group.id))
    }
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
            <section className="task-compose">
                <div className="compose-btn">
                    <span><BsPlusLg /></span>
                    <span>Add a card</span>
                </div>
            </section>
        </section>

    )
}