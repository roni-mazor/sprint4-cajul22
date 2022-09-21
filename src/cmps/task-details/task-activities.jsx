import { useEffect, useState } from 'react'
import { GrList } from 'react-icons/gr'
import { useSelector } from 'react-redux'
import { MemberPreview } from '../member-preview'
import GuestImg from '../../assets/img/guest-img.svg'


export const TaskActivities = ({ task, onSaveTask, user }) => {
    const [focused, setFocused] = useState(false)
    const [txt, setTxt] = useState('')


    const onFocus = () => setFocused(true)
    const onBlur = () => {
        if (!txt) {
            setTimeout(() => {

                setFocused(false)
            }, 200)
        }
    }

    const handleChange = ({ target: { value } }) => {
        // console.log(value);
        setTxt(value)
    }
    console.log('user:', user)
    return (
        <section className="activities-container">
            <div className="activities-title flex align-center">
                <span className='task-icon'> <GrList /></span><h3>Activity</h3>
                <button className='show-acts'>Show details</button>
            </div>
            <div className='new-comment flex'>
                <div className='profile-img'>
                    {/* <img src={user.imgUrl} alt="" /> */}
                </div>
                <div className={focused ? 'comment-box flex column focused' : 'comment-box flex column'}>
                    {/* <MemberPreview user={user} /> */}
                    <textarea
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onChange={handleChange}
                        className='comment-txtarea'
                        value={txt}
                        name="" id="" cols="60" rows="2" placeholder='Write a comment'></textarea>
                    {focused && <div>
                        <button className={txt ? 'comment-btn active' : 'comment-btn'}>Save</button>
                    </div>}

                </div>
            </div>
        </section>
    )
}