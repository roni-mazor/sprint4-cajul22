import { MemberPreview } from '../member-preview'

export function Members({ members, toggleModal }) {
    // const members = useSelector(state => state.userModule.users)

    return <section className='members-container'>
        <p>Members</p>
        <section className="avatars-container" style={{ display: "flex" }}>
            {/* <MemberPreview member={user} /> */}
            {members?.map(memberId => <MemberPreview key={memberId} memberId={memberId} infoReq={'boardHeader'} />)}
            <button className='add-task-member' onClick={() => { toggleModal('members') }}>+</button>
        </section>
    </section>
}