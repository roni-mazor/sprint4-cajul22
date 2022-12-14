import { Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"
import { GrList } from 'react-icons/gr'
import GuestImg from '../../assets/img/guest-img.svg'
import { utilService } from "../../services/util.service"
import PDF from '../../assets/img/pdf-icon.png'

export const DefaultBoardMenuModal = ({ setModalState, board, toggleMenuModal }) => {
    // const formatedTime = utilService.getFormatedTime
    const formatedTime = utilService.getDetailedTime

    return (
        <>

            <header className="menu-modal-header ">
                <span></span>
                <h3 className="align-center">
                    Menu
                </h3>
                <span onClick={toggleMenuModal}>
                    <IoMdClose />
                </span>
            </header>
            <main className="menu-modal-main">
                <hr />
                <div onClick={() => setModalState('background-change')} className="board-menu-nav-btn">
                    <div className='menu-background-display' style={board.style} ></div>

                    <span>
                        Change background
                    </span>
                </div>
                <div onClick={() => setModalState('filter-cards')} className="board-menu-nav-btn">
                    <span className='icon-container'>
                        <BsSearch />
                    </span>
                    <span>
                        Filter cards
                    </span>
                </div>
                <hr />
                <div className="activities-title flex">
                    <span className='task-icon'> <GrList /></span><h3>Activity</h3>
                </div>
                <div className="menu-activities-wrapper">
                    <div className="board-menu-activities">
                        {board?.activities?.map(activity => <div key={activity.id}
                            className="activity-container flex">
                            <div className="profile-img">
                                <img src={activity?.byMember?.imgUrl} alt="" />
                            </div>
                            <div className="activity flex column">
                                <div>
                                    <span className="username">{activity?.byMember?.fullname} </span>
                                    {!activity.comment && <span className="txt"> {activity.txt} </span>}
                                    {activity.taskId && <Link onClick={toggleMenuModal}
                                        to={`/board/${board._id}/${activity.groupId}/${activity.taskId}`}>
                                        {activity.link}
                                    </Link>}
                                    {activity.opTxt &&
                                        <span className={`opTxt ${activity.comment ? 'comment' : ''}`}>
                                            {activity.opTxt}</span>}
                                </div>
                                {activity.taskId && <Link className="activity-time"
                                    to={`/board/${board._id}/${activity?.groupId}/${activity?.taskId}`}>
                                    {formatedTime(activity.createdAt)}
                                </Link>}
                                {!activity.taskId && <div className="activity-time">{formatedTime(activity.createdAt)}</div>}
                                {activity.attachment && <img className="activity-attachment"
                                    src={activity.attachment.type === 'application/pdf' ? PDF : activity.attachment.url}
                                    alt="task attachment" />}
                            </div>
                        </div>)}
                    </div>
                </div>
            </main>
        </>
    )
}