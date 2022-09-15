import { Link } from "react-router-dom"

export const TaskPreview = ({ task, boardId, groupId }) => {

    // console.log(task)
    return (
        <Link to={`/board/${boardId}/${groupId}/${task.id}`} className="task-preview">
            <header className="task-header"></header>
            <section className="labels-container">
            </section>
            <p>{task.title}</p>
            <section className="task-badges"></section>
        </Link>
    )
}