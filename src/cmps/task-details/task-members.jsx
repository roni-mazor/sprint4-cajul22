import { MemberPreview } from '../member-preview'

export function Members({members, membersId, toggleModal }) {
    
    return <section className='members-container'>
        <p>Members</p>
        <section className="avatars-container" style={{ display: "flex" }}>
            {console.log('membersId:',membersId )
            }
            {membersId.map(id => <MemberPreview members={members} key={id} memberId={id} infoReq={'boardHeader'} />)}
            <button className='add-task-member' onClick={() => { toggleModal('members') }}>+</button>
        </section>
    </section>
}