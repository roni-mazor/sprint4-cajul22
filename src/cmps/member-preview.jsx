import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadUsers } from "../store/user.actions"
import { AiOutlineCheck } from 'react-icons/ai'
import GuestImg from '../assets/img/guest-img.svg'
export const MemberPreview = ({ members, memberId, infoReq, addUserToBoard, onAddMemberToTask }) => {

    const [renderedMember, setRenderedMember] = useState()

    useEffect(() => {
        getCurrMember()
    }, [])

    const addedToTask = () => {
        // members.find(member => member._id === )
    }


    const getCurrMember = () => {
        if (!members) return
        const currMember = members.find(member => member._id === memberId)
        setRenderedMember(currMember)
    }

    return (
        <section>
            {infoReq === 'boardHeader' && <section className="member-avatar flex" title={`${renderedMember?.fullname}`}>
                <img src={renderedMember?.imgUrl ? renderedMember?.imgUrl : GuestImg} alt="upload an image" className="member-avatar-img" />
            </section>}

            {infoReq === 'picker' && <section className="member-avatar flex" title={`${renderedMember?.fullname}`} onClick={() => onAddMemberToTask(renderedMember._id)}>
                <img src={renderedMember?.imgUrl ? renderedMember?.imgUrl : GuestImg} alt="upload an image" className="member-avatar-img" />
                <pre className="picker-pre">
                    <p>{renderedMember?.fullname ? renderedMember.fullname : 'loading...'}</p>
                    <p>{renderedMember?.username ? `(${renderedMember.username})` : 'loading...'}</p>
                </pre>
                <span></span>
                {/* {addedToTask() === true && <AiOutlineCheck />} checked sign should be seen only when member is assigned to task */}
            </section>}

            {infoReq === 'boardList' && <section className="member-avatar flex" title={`${renderedMember?.fullname}`}>
                <img src={renderedMember?.imgUrl ? renderedMember?.imgUrl : GuestImg} alt="upload an image" className="member-avatar-img" />
                <pre className="board-list-pre">
                    <p>{renderedMember?.fullname ? renderedMember.fullname : 'loading...'}</p>
                    <p>@{renderedMember?.username ? renderedMember.username : 'loading...'}</p>
                </pre>
                <span></span>
                <button className='toggle' onClick={() => addUserToBoard(renderedMember)}>Remove</button>
            </section>}
        </section>
    )
}