import { ChecklistPreview } from "./checklist-preview"

export const TaskChecklist = ({ task }) => {
    return (
        <section className="task-checklist">
            {/* <div className="checklist-title flex align-center">
                <span> <BsCheck2Square /></span><h3>Activity</h3>
            </div> */}
            {task.checklists.map(checklist => <ChecklistPreview
                key={checklist.id}
                checklist={checklist} />)}
        </section>
    )
}