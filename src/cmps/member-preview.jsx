export const MemberPreview = ({ member }) => {

    // const userInitials = (member.fullname.split(' ')).map(str => str.charAt(0).toUpperCase()).join('')
    
    const user = {...member}
    console.log('user:', user)
    

    return (
        <section className="member-avatar">
            {console.log('member:', member)}
            <img src={member.imgUrl} alt="upload an image" className="member-avatar-img" />
        </section>
    )
}