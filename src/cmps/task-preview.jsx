export const TaskPreview = ({ task }) => {


    return (
        <li key={task.id}>
            {task.title}
        </li>
    )
}