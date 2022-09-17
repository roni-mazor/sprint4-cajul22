import { IoMdList } from 'react-icons/io'

export const TaskDescription = () => {
    return (
        <section className="description-container">
            <div className="description-title">
                <span> <IoMdList /></span>   <h3>description</h3>
            </div>
            <textarea className='simple-txtarea' name="" id="" cols="60" rows="2"></textarea>
        </section>
    )
}