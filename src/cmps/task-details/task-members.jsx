import { MemberPreview } from '../member-preview'
import { useSelector } from 'react-redux'
import GuestImg from '../../assets/img/guest-img.svg'


export function Members({ user, toggleAdditivesModal }) {
    const members = useSelector(state => state.userModule.users)

    return <section className='members-container'>
        <p>Members</p>
        <section className='flex'>
            <MemberPreview member={user} />
            {members.map(member => (
                    <MemberPreview member={member} />
            ))}           
            <button className='add-task-member' onClick={toggleAdditivesModal}>+</button>
        </section>
    </section>
}