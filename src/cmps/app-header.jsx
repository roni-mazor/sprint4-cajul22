import { useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { SiTrello } from 'react-icons/si'
import { TbBell } from 'react-icons/tb'
import GuestImg from '../assets/img/guest-img.svg'
import { MemberPreview } from './member-preview'
import { socketService } from '../services/socket.service'
import { useEffect } from 'react'

export const AppHeader = ({ board }) => {

    const member = useSelector(state => state.userModule.user)
    const users = useSelector(state => state.userModule.users)
    const isInitialMount = useRef(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isRed, setIsRed] = useState()
    const navigate = useNavigate()
    const onToggleModal = () => {
        setIsModalOpen(!isModalOpen)
        setIsRed(false)
        // console.log(isModalOpen)
    }

    useEffect(() => {
        
        //when change happens to the member then we need to update the 
        //user that there is a new notification for him
        if (isInitialMount.current) {
            isInitialMount.current = false;
            setIsRed(false)
        } else {
            // Your useEffect code here to be run on update
            setIsRed(true)
         }
    }, [member])
    // console.log(member)
    const getUser = (id) => {
        const currUser = users.find(user => user._id === id)
        if (currUser) return currUser.imgUrl
    }

    // if (!member) return <LoaderIcon />
    // console.log('isRed:', isRed)
    return (
        <header className={board ? 'app-header board' : 'app-header'}
            style={board?.color}>
            <Link to="/workspace" className="header-logo flex align-center" ><SiTrello className="jello-logo" /><h1 className="jello-logo-text">Jello</h1></Link>
            <span></span>
            {/* <Link to=""> */}
            <h4 className="log-sig flex align-center">
                <p className={`notification-btn flex align-center ${isRed ? 'red' : ''}`}
                    onClick={onToggleModal}><TbBell /></p>
                {/* <p className="notification-btn flex align-center" onClick={onToggleModal}><TbBell /></p> */}
                <img src={member?.imgUrl ? member.imgUrl : GuestImg} alt="" title={member?.username} />
            </h4>
            {/* </Link> */}
            {isModalOpen && <section className='notification-container'>
                <section className='modal-headline'>
                    <span></span>
                    <p className='headline'>Notifications</p>
                    <span></span>
                </section>
                <hr />
                <section>
                    {member?.notifications?.length && member.notifications.map(({ boardId, groupId, taskId, boardName, taskName, groupName, byUserName, id, imgUrl }) => (
                        <div key={id} onClick={() => { navigate(`/board/${boardId}/${groupId}/${taskId}`) }}>
                            <sections className="notifications-msg flex align-center ">
                                <div className='profile-img'>
                                    <img src={imgUrl} alt="" />
                                </div>
                                {/* {`${byUserName} has added you to \n ${taskName} at group ${groupName} at board ${boardName}`} */}
                                <p className='not-msg'>{`${byUserName} has added you to a new task at ${boardName} board`}</p>
                            </sections>
                            <hr />
                        </div>
                    ))}
                </section>
            </section>}

        </header>
    )
}