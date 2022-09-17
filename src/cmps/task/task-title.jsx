import { AiOutlineCreditCard } from 'react-icons/ai'



export const TaskTitle = ({ task, handleChange }) => {
    return (

        <section className="task-details-title flex">
            <span>  <AiOutlineCreditCard /> </span>
            <textarea className='simple-txtarea'
                cols="60" rows="2" onBlur={handleChange}>{task.title}</textarea>
        </section>

    )
}