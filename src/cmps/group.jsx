import { Task } from "./task"

export const Group = ({ group }) => {


    return (
        <section>

            {group.tasks.map(task => <Task task={task} />)}
        </section>
    )
}