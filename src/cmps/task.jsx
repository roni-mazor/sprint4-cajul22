export const Task = ({ task }) => {


    return (
        <li key={task.id}>
            {task.title}
        </li>
    )
}