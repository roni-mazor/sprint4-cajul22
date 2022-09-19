import GuestImg from '../assets/img/guest-img.svg'
export const MemberPreview = ({ member }) => {

    // const userInitials = (member.fullname.split(' ')).map(str => str.charAt(0).toUpperCase()).join('')
    return (
        <section className="member-avatar">
            {/* {console.log('member:', member)
            } */}
            <img src={member?.imgUrl ? member?.imgUrl : GuestImg} alt="upload an image" className="member-avatar-img" />
            {/* {member?.imgUrl ? <img src={member?.imgUrl ? member?.imgUrl : GuestImg} alt="upload an image" className="member-avatar-img" />
                : <img src={GuestImg} alt="upload an image" className="member-avatar-img" />} */}
        </section>
    )
}