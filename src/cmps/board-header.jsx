import { MemberPreview } from "./member-preview"
import { BsThreeDots } from 'react-icons/bs'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { RiUserAddLine } from 'react-icons/ri'
import GuestImg from '../assets/img/guest-img.svg'


export const BoardHeader = ({ board, onToggleIsStarred, members, toggleMenuModal, onToggleShareModal }) => {
    // console.log(windowWidth)
    return (
        <header className="board-header">
            <div className="board-header-container">
                <h1 className="board-title">{board.title}</h1>
                <span className={board.isStarred ? 'starred true' : 'starred'}
                    onClick={onToggleIsStarred}>
                    {board.isStarred ? <AiFillStar /> : <AiOutlineStar />}</span><p>|</p>
                <section className="avatars-container">
                    {members &&  members.map((member) => (

                        <section className="member-avatar flex" title={`${member.fullname}`}>
                            <img src={member.imgUrl ? member.imgUrl : GuestImg} alt="upload an image" className="member-avatar-img" />
                        </section>

                    )
                    )}




                </section>
                <button className="add-board-user"
                    onClick={onToggleShareModal}
                ><RiUserAddLine />
                    <span className="board-header-txt">Share</span> 
                </button>
            </div>
            <button onClick={toggleMenuModal} className="show-menu-btn"><BsThreeDots />

                <span className="board-header-txt">Show menu</span>
            </button>
        </header>
    )
}
