import { TaskPreview } from "./task-preview"

export const BoardGroup = ({ group }) => {


    return (
        <section>

            {group.tasks.map(task => <TaskPreview task={task} />)}
        </section>
    )
}