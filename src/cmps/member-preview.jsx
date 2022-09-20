import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import GuestImg from '../assets/img/guest-img.svg'
import { loadUsers } from "../store/user.actions"
export const MemberPreview = ({ memberId, infoReq, addUserToBoard, onAddMemberToTask }) => {

    const users = useSelector(state => state.userModule.users)
    const [renderedMember, setRenderedMember] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(loadUsers())
        getCurrMember()
    }, [])




    const getCurrMember = () => {
        console.log('users:', users)
        
        const currMember = users.find(user => user._id === memberId)
         console.log('currMember:', currMember)

        setRenderedMember(currMember)
    }

    // const userInitials = (member.fullname.split(' ')).map(str => str.charAt(0).toUpperCase()).join('')
    return (
        <section>
            {infoReq === 'boardHeader' && <section className="member-avatar flex" title={`${renderedMember?.fullname}`}>
                <img src={renderedMember?.imgUrl ? renderedMember?.imgUrl : GuestImg} alt="upload an image" className="member-avatar-img" />
            </section>}
            
            {infoReq === 'picker' && <section className="member-avatar flex" title={`${renderedMember?.fullname}`} onClick={() => onAddMemberToTask(renderedMember._id)}>
                {/* infoReq === 'picker' &&  */}
                <img src={renderedMember?.imgUrl ? renderedMember?.imgUrl : GuestImg} alt="upload an image" className="member-avatar-img" />
                <pre className="picker-pre">
                    <p>{renderedMember?.fullname ? renderedMember?.fullname : 'loading...'}</p>
                    <p>{renderedMember?.username ? `(${renderedMember?.username})` : 'loading...'}</p>
                </pre>
            </section>}

            {infoReq === 'boardList' && <section className="member-avatar flex" title={`${renderedMember?.fullname}`}>
                {/* infoReq === 'boardList' &&  */}
                <img src={renderedMember?.imgUrl ? renderedMember?.imgUrl : GuestImg} alt="upload an image" className="member-avatar-img" />
                <pre className="board-list-pre">
                    <p>{renderedMember?.fullname ? renderedMember?.fullname : 'loading...'}</p>
                    <p>@{renderedMember?.username ? renderedMember?.username : 'loading...'}</p>
                </pre>
                <span></span>
                <button className='toggle' onClick={() => addUserToBoard(renderedMember._id)}>Remove</button>
            </section>}
        </section>
    )
}