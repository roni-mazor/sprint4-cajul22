import { ChecklistPreview } from "./checklist-preview"

export const TaskChecklist = ({ task, onSaveTask, toggleModal }) => {

    return (
        <section className="task-checklist">
            {task.checklists.map(checklist => <ChecklistPreview
                key={checklist.id}
                task={task}
                checklist={checklist}
                onSaveTask={onSaveTask}
                toggleModal={toggleModal}
            />)}
        </section>
    )
}