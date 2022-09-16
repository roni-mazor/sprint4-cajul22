import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const TaskPreview = ({ task, boardId, groupId }) => {
    const labels = useSelector(state => state.boardModule.board.labels)
    console.log(task.labelIds)
    console.log(labels)
    return (
        <Link to={`/board/${boardId}/${groupId}/${task.id}`} className="task-preview">
            <header className="task-header"></header>
            <section className="labels-container">
                {task.labelIds.map((id) => {
                    const label = labels.find(l => l.id === id)
                    console.log(label)
                    return <div style={{ backgroundColor: label.color }} ></div>
                })}
            </section>
            <p>{task.title}</p>
            <section className="task-badges"></section>
        </Link>
    )
}