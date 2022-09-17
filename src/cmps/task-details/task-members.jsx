import { MemberPreview } from '../member-preview'
import GuestImg from '../../assets/img/guest-img.svg'


export function Members ({user, toggleAdditivesModal}){
    return <section className='members-container'>
        <p>Members</p>
        <section className='flex'>
        <MemberPreview member={user}/>
        <button className='add-task-member' onClick={toggleAdditivesModal}>+</button>
        </section>
    </section>
}