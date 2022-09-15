export const TaskPreview = ({ task }) => {

    console.log(task)
    return (
        <li className="task-preview">
            <header className="task-header"></header>
            <section className="labels-container">
            </section>
            <p>{task.title}</p>
            <section className="task-badges"></section>
        </li>
    )
}