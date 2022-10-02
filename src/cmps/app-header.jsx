import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { SiTrello } from 'react-icons/si'
import { TbBell } from 'react-icons/tb'
import GuestImg from '../assets/img/guest-img.svg'
import { MemberPreview } from './member-preview'
import { socketService } from '../services/socket.service'

export const AppHeader = ({ board }) => {

    const member = useSelector(state => state.userModule.user)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()
    const onToggleModal = () => {
        setIsModalOpen(!isModalOpen)
        console.log(isModalOpen)
    }

    // if (!member) return <LoaderIcon />
    return (
        <header className={board ? 'app-header board' : 'app-header'}
            style={board?.color}>
            <Link to="/workspace" className="header-logo flex align-center" ><SiTrello className="jello-logo" /><h1 className="jello-logo-text">Jello</h1></Link>
            <span></span>
            {/* <Link to=""> */}
            <h4 className="log-sig flex align-center">
                <p className="notification-btn flex align-center" onClick={onToggleModal}><TbBell /></p>
                <img src={member?.imgUrl ? member.imgUrl : GuestImg} alt="" title={member?.username} />
            </h4>
            {/* </Link> */}
            {isModalOpen && <section className='notification-container'>
                <section className='modal-headline'>
                    <span></span>
                    <p>Notifications</p>
                    <span></span>
                </section>
                <hr />
                <section className="notifications-container">
                    {member.notifications.map(({ boardId, groupdId, taskId, boardName, taskName, groupName, byUserName, id }) => (
                        <div key={id} onClick={() => { navigate(`/board/${boardId}/${groupdId}/${taskId}`) }}>
                            <p>{`${byUserName} has added you to ${taskName} at group ${groupName} at board ${boardName}`}</p>
                        </div>
                    ))}
                </section>
            </section>}

        </header>
    )
}