import { useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { SiTrello } from 'react-icons/si'
import { TbBell } from 'react-icons/tb'
import GuestImg from '../assets/img/guest-img.svg'
import { MemberPreview } from './member-preview'
import { socketService } from '../services/socket.service'
import { useEffect } from 'react'
import { utilService } from '../services/util.service'

export const AppHeader = ({ board }) => {

    const member = useSelector(state => state.userModule.user)
    const users = useSelector(state => state.userModule.users)
    const isInitialMount = useRef(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isRed, setIsRed] = useState()
    const navigate = useNavigate()
    const formatedTime = utilService.getDetailedTime
    const onToggleModal = () => {
        setIsModalOpen(!isModalOpen)
        setIsRed(false)
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
    const getUser = (id) => {
        const currUser = users.find(user => user._id === id)
        if (currUser) return currUser.imgUrl
    }

    // if (!member) return <LoaderIcon />
    return (
        <>
            <header className={board ? 'app-header board' : 'app-header'}
                style={{ backgroundColor: board?.color?.backgroundColor  }}>
                <Link style={{ opacity: '1' }} to="/workspace" className="header-logo flex align-center" ><SiTrello className="jello-logo" /><h1 style={{ opacity: '1' }} className="jello-logo-text">Jello</h1></Link>
                <span></span>
                {/* <Link to=""> */}
                <h4 style={{ opacity: '1' }} className="log-sig flex align-center">
                    <p style={{ opacity: '1' }} className={`notification-btn flex align-center ${isRed ? 'red' : ''}`}
                        onClick={onToggleModal}><TbBell /></p>
                    {/* <p className="notification-btn flex align-center" onClick={onToggleModal}><TbBell /></p> */}
                    <img style={{ opacity: '1' }} src={member?.imgUrl ? member.imgUrl : GuestImg} alt="" title={member?.username} />
                </h4>
                {/* </Link> */}

            </header>
            {isModalOpen && <section style={{ opacity: '1' }} className='notification-container'>
                <section className='modal-headline'>
                    <span></span>
                    <p className='headline'>Notifications</p>
                    <span></span>
                </section>
                <hr />
                <section>
                    {member?.notifications?.length && member.notifications.map(({ boardId, groupId, taskId, boardName, taskName, groupName, byUserName, id, imgUrl, createdAt }) => (
                        <div key={id} onClick={() => {
                            navigate('/workspace')
                            setTimeout(() => {
                                navigate(`/board/${boardId}/${groupId}/${taskId}`)

                            }, 100)
                        }}>
                            <sections className="notifications-msg flex">
                                <div className='profile-img'>
                                    <img src={imgUrl} alt="" />
                                </div>
                                {/* {`${byUserName} has added you to \n ${taskName} at group ${groupName} at board ${boardName}`} */}
                                <div className='not-txt flex column'>
                                    <p className='not-msg'>
                                        <span className='not-msg user-name'>{byUserName}</span>has added you to
                                        <span className='not-msg task-name'>{taskName}</span>
                                        {`at ${boardName} board`}</p>
                                    <p className='not-msg-time'>{formatedTime(createdAt)}</p>
                                </div>
                            </sections>
                            <hr />
                        </div>
                    ))}
                </section>
            </section>}
        </>
    )
}