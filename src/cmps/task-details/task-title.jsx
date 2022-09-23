import { AiOutlineCreditCard } from 'react-icons/ai'



export const TaskTitle = ({ group, task, handleChange }) => {
    return (

        <section className="task-details-title flex">
            <span>  <AiOutlineCreditCard /> </span>
            <textarea className='simple-txtarea'
                cols="60" value={task.title} onBlur={handleChange} />
            <p className="mini-title">In list {group.title}</p>
        </section>

    )
}