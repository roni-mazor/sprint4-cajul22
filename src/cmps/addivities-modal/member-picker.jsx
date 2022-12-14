import { VscChromeClose } from 'react-icons/vsc'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AiOutlineCheck } from 'react-icons/ai'
import { MemberPreview } from '../member-preview'
import GuestImg from '../../assets/img/guest-img.svg'
import { socketService } from '../../services/socket.service'
import { useParams } from 'react-router-dom'
import { userService } from '../../services/user.service'

export const MemberPicker = ({ onSaveTask, task, toggleModal }) => {
    const board = useSelector(state => state.boardModule.board)
    const user = useSelector(state => state.userModule.user)
    const [txt, setTxt] = useState('')
    const members = useSelector(state => state.boardModule.board.members)
    const params = useParams()
    const { boardId, groupId, taskId } = params


    const onAddMemberToTask = async (memberId) => {
        let currMember = task.members.find(member => (member === memberId))
        if (currMember) {
            // const selectedMember = task.members.find(member => member.id === currMember)
            const selectedMembers = task.members.filter(id => id !== memberId)
            task.members = [...selectedMembers]
            currMember = board.members.find(member => member._id === memberId)
            onSaveTask(task, `removed ${currMember.fullname} from`, task.title)

            return
        }

        currMember = board.members.find(member => member._id === memberId)
        task.members = [...task.members, currMember._id]


        const loggedinUser = userService.getLoggedinUser()
        const currGroup = board.groups.find((group => group.id === groupId))
        const notification = {
            imgUrl: user.imgUrl,
            onUserId: currMember._id, taskId, boardId, groupId,
            byUserId: loggedinUser._id, byUserName: loggedinUser.fullname,
            boardName: board.title, taskName: task.title, groupName: currGroup.title,
            createdAt: Date.now()
        }
        await userService.addUserNotification(notification)
        socketService.emit('user-task-assignment', notification)


        onSaveTask(task, `added ${currMember.fullname} to`, task.title)
    }

    const onHandleChange = ({ target: { value } }) => {
        setTxt(value)
    }

    const isMemberOnTask = (memberId) => {
        const { members } = task
        const isOnTask = members.find(id => id === memberId)
        if (isOnTask) return true
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
            <section className="avatars-container flex column">
                {getFilteredUsers().map(member =>
                    <div className='member-avatar flex align-center' title={`${member?.fullname}`} onClick={() => onAddMemberToTask(member._id)}>
                        <img src={member.imgUrl ? member.imgUrl : GuestImg} alt="upload an image" className="member-avatar-img" />
                        <pre className="picker-pre">
                            <p>{member.fullname ? member.fullname : 'loading...'}</p>
                            <p>{member.username ? `(${member.username})` : 'loading...'}</p>
                        </pre>
                        <span></span>
                        {isMemberOnTask(member._id) && <AiOutlineCheck />}
                    </div>)}
            </section>
        </section >
    )
}