import { TaskPreview } from "./task-preview"
import { BsPlusLg, BsThreeDots } from 'react-icons/bs'

export const BoardGroup = ({ group }) => {

    return (

        <section className="group-content">
            <header className="group-header">
                <input type="text"
                    value={group.title} />
                <button className="group-actions-btn"><BsThreeDots /></button>
            </header>
            <ul className="task-container">
                {group.tasks.map(task => <TaskPreview key={task.id} task={task} />)}
            </ul>
            <section className="task-compose">
                <div className="compose-btn">
                    <span><BsPlusLg /></span>
                    <span>Add a card</span>
                </div>
            </section>
        </section>

    )
}