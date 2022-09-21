import { GrList } from 'react-icons/gr'
import { MemberPreview } from '../member-preview'


export const TaskActivities = ({ user }) => {
    return (
        <section className="activities-container">
            <div className="activities-title flex align-center">
                <span className='task-icon'> <GrList /></span><h3>Activity</h3>
            </div>
            <div className='flex'>
                <MemberPreview member={user} />
                <textarea name="" id="" cols="60" rows="2" placeholder='Write a comment'></textarea>
            </div>
        </section>
    )
}