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
        let currMember = task.members.find(member => (member._id === memberId))
        if(currMember){
            // if(loggedIn._id === currMember._id) {isJoinedChange()}
            const selectedMembers = task.members.filter(member => member._id !== memberId)
            task.members = [...selectedMembers]
            onSaveTask(task)
            return
        } 

        currMember = board.members.find(member => member._id === memberId)
        task.members = [...task.members, currMember]
        
        onSaveTask(task)
    }

    const onHandleChange = ({ target: { value } }) => {
        setTxt(value)
    }

    const getFilteredUsers = () => {
        const regex = new RegExp(txt, 'i')
        const currMembers = members.filter(member => regex.test(member.fullname))
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
            <ul className="labels-container">
                {getFilteredUsers().map(member => (
                    <li key={utilService.makeId(5)} >
                        <span className='member-container flex align-center' onClick={() => onAddMemberToTask(member._id)}>
                            <MemberPreview member={member} />
                            <p>{member.username}</p>
                            <p>{`(${member.fullname})`}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </section >
    )
}