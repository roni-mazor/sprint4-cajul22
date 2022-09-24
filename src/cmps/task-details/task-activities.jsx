import { useEffect, useState } from 'react'
import { GrList } from 'react-icons/gr'
import { useSelector } from 'react-redux'
import { MemberPreview } from '../member-preview'
import GuestImg from '../../assets/img/guest-img.svg'
import { utilService } from '../../services/util.service'


export const TaskActivities = ({ board, task, onSaveTask, user }) => {
    const [focused, setFocused] = useState(false)
    const [txt, setTxt] = useState('')
    const [isShown, setIsShown] = useState('')
    const activities = board.activities.filter(activity => activity?.task?.id === task.id)

    // console.log('activities:', activities)
    const onFocus = () => setFocused(true)
    const onBlur = () => {
        if (!txt) {
            console.log('txt:', txt)
            setTimeout(() => {

                setFocused(false)
            }, 200)
        }
    }

    const formatedTime = utilService.getFormatedTime

    const handleChange = ({ target: { value } }) => {
        // console.log(value);
        setTxt(value)
    }

    const onToggleIsShown = () => {
        setIsShown(!isShown)
    }

    const onSaveComment = () => {
        if (!txt) return
        if (!task.comment) task.comment = 1
        task.comment++
        onSaveTask(task, `on`, task.title, txt, null, null, true)

        setTxt('')
        setFocused(false)
    }

    // console.log('user:', user)
    return (
        <section className="activities-container">
            <div className="activities-title flex align-center">
                <span className='task-icon'> <GrList /></span><h3>Activity</h3>
                <button className='show-acts'
                    onClick={onToggleIsShown}>{isShown ? 'Hide details' : 'Show details'}</button>
            </div>
            <div className='new-comment flex'>
                <div className='profile-img'>
                    <img src={user.imgUrl} alt="" />
                </div>
                <div className={focused ? 'comment-box flex column focused' : 'comment-box flex column'}>
                    {/* <MemberPreview user={user} /> */}
                    <textarea
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onChange={handleChange}
                        className='comment-txtarea simple-txtarea'
                        value={txt}
                        name="" id="" cols="60" rows="2" placeholder='Write a comment'></textarea>
                    {focused && <div>
                        <button onClick={onSaveComment}
                            className={txt ? 'comment-btn active' : 'comment-btn'}>Save</button>
                    </div>}

                </div>
            </div>
            <div className='task-activities'>
                {activities.map(activity =>
                    <div key={activity.id}
                        className='activity flex'>
                        {(isShown || activity.comment) && <div className="">
                            <img src={activity?.byMember.imgUrl} alt="" />
                        </div>}
                        {(isShown || activity.comment) &&
                            <div className={`activity-txt flex ${activity.comment ? '' : 'column'}`}>
                                <div>
                                    <span className="username">{activity.byMember.fullname}&nbsp; </span>
                                    {!activity.comment && <>
                                        <span className="txt"> {activity.txt} </span>
                                        <span> {activity.link} </span>
                                    </>}
                                </div>
                                <div className='time'>{formatedTime(activity.createdAt)}</div>
                                {activity.opTxt && <span className={`opTxt ${activity.comment ? 'comment' : ''}`}>
                                    {activity.opTxt}</span>}
                            </div>}
                    </div>)}
            </div>
        </section >
    )
}