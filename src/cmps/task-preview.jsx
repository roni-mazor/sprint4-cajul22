export const TaskPreview = ({ task }) => {

    console.log(task)
    return (
        <li className="task-preview">
            {task.title}
        </li>
    )
}