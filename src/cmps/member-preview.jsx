import React, { useEffect, useState } from "react"
import { useSelector, useDispatch} from "react-redux"
import GuestImg from '../assets/img/guest-img.svg'
import { loadUsers } from "../store/user.actions"
export const MemberPreview = ({ memberId }) => {

    const users = useSelector(state => state.userModule.users)
    const [renderedMember, setRenderedMember] = useState()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(loadUsers())
        getCurrMember()
    }, [])

const getCurrMember = () => {
    const currMember = users.find(user => user._id === memberId)
    setRenderedMember(currMember)
}

    // const userInitials = (member.fullname.split(' ')).map(str => str.charAt(0).toUpperCase()).join('')
    return (
        <section className="member-avatar">
            {/* {console.log('member:', renderedMember)
            } */}
            <img src={renderedMember?.imgUrl ? renderedMember?.imgUrl : GuestImg} alt="upload an image" className="member-avatar-img" />
            {/* {member?.imgUrl ? <img src={member?.imgUrl ? member?.imgUrl : GuestImg} alt="upload an image" className="member-avatar-img" />
                : <img src={GuestImg} alt="upload an image" className="member-avatar-img" />} */}
        </section>
    )
}