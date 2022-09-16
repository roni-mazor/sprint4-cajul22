import { GrList } from 'react-icons/gr'


export const TaskActivities = () => {
    return (
        <section className="activities-container">
            <div className="activities-title flex align-center">
                <span> <GrList /></span><h1>Activities</h1>
            </div>
            
            <textarea name="" id="" cols="60" rows="2" placeholder='Write a comment'></textarea>
        </section>
    )
}