import { AiOutlineCreditCard } from 'react-icons/ai'



export const TaskTitle = ({task,handleChange}) => {
    return (

        <section className="task-details-title">
            <span>  <AiOutlineCreditCard /> </span><textarea
                onBlur={handleChange}>{task.title}</textarea>
        </section>

    )
}