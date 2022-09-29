import { MemberPreview } from "./member-preview"
import { BsThreeDots } from 'react-icons/bs'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { RiUserAddLine } from 'react-icons/ri'
import GuestImg from '../assets/img/guest-img.svg'


export const BoardHeader = ({ windowWidth, board, onToggleIsStarred, members, toggleMenuModal, onToggleShareModal }) => {

    return (
        <header className="board-header">
            <div className="board-header-container">
                <h1 className="board-title">{board.title}</h1>
                <span className={board.isStarred ? 'starred true' : 'starred'}
                    onClick={onToggleIsStarred}>
                    {board.isStarred ? <AiFillStar /> : <AiOutlineStar />}</span><p>|</p>
                <section className="avatars-container" style={{ display: "flex" }}>
                    {members && windowWidth > 650 && members.map((member) => (

                        <section className="member-avatar flex" title={`${member.fullname}`}>
                            <img src={member.imgUrl ? member.imgUrl : GuestImg} alt="upload an image" className="member-avatar-img" />
                        </section>

                    )
                    )}




                </section>
                <button className="add-board-user"
                    onClick={onToggleShareModal}
                ><RiUserAddLine />
                    {windowWidth > 650 && 'Share'}
                </button>
            </div>
            <button onClick={toggleMenuModal} className="show-menu-btn"><BsThreeDots />
                {windowWidth > 650 && 'Show menu'}
            </button>
        </header>
    )
}
