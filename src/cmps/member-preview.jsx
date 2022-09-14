export const MemberPreview = ({ member }) => {

    // const userInitials = (member.fullname.split(' ')).map(str => str.charAt(0).toUpperCase()).join('')
    return (
        <section className="member-avatar">
            <img src={member.imgUrl} alt="upload an image" className="member-avatar-img" />
        </section>
    )
}