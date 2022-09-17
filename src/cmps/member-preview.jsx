import { BsPersonCircle } from 'react-icons/bs'
import GuestImg from '../assets/img/guest-img.svg'
export const MemberPreview = ({ member }) => {

    // const userInitials = (member.fullname.split(' ')).map(str => str.charAt(0).toUpperCase()).join('')
    return (
        <section className="member-avatar">
            {member?.imgUrl ? <img src={member.imgUrl} alt="upload an image" className="member-avatar-img" />
                : /*<h4 className="log-sig"><BsPersonCircle /></h4>*/ <img src={GuestImg} alt="upload an image" className="member-avatar-img" />}
        </section>
    )
}