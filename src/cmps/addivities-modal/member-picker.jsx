import { VscChromeClose } from 'react-icons/vsc'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { MemberPreview } from '../member-preview'
import { utilService } from '../../services/util.service'

export const MemberPicker = ({ onSaveTask, task, toggleModal, isJoinedChange }) => {
    const board = useSelector(state => state.boardModule.board)

    const dispatch = useDispatch()
    const [txt, setTxt] = useState('')
    const loggedIn = useSelector(state => state.userModule.user)
    const members = useSelector(state => state.boardModule.board.members)

    useEffect(() => {
        
    }, [txt])

    const onAddMemberToTask = (memberId) => {
        let currMember = task.members.find(member => (member === memberId))
        if (currMember) {
            const selectedMembers = task.members.filter(id => id !== memberId)
            task.members = [...selectedMembers]
            onSaveTask(task)
            return
        }
        
        currMember = board.members.find(member => member._id === memberId)
        task.members = [...task.members, currMember._id]
        onSaveTask(task)
    }

    const onHandleChange = ({ target: { value } }) => {
        setTxt(value)
    }

    const getFilteredUsers = () => {
        const regex = new RegExp(txt, 'i')
        const currMembers = members.filter(member => regex.test(member.fullname))
        console.log('currMembers:', currMembers)
        
        return currMembers
    }

    return (
        <section className="add-features-modal">
            <header className='edit-label-header'>
                <span></span>
                <div>Members</div>
                <span onClick={toggleModal}>
                    < VscChromeClose />
                </span>
            </header>

            <hr />

            <input className="label-title-input"
                type="text"
                placeholder='Search members'
                onChange={onHandleChange}
                value={txt} />
            <p>Board members</p>
            <section className="avatars-container flex column">
                {getFilteredUsers().map(member => <MemberPreview task={task} members={members} key={member._id} memberId={member._id} infoReq={'picker'} onAddMemberToTask={onAddMemberToTask}/>)}
            </section>
        </section >
    )
}