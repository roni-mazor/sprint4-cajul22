import { MemberPreview } from "./member-preview"
import { BsThreeDots } from 'react-icons/bs'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { RiUserAddLine } from 'react-icons/ri'
import GuestImg from '../assets/img/guest-img.svg'
import { Draggable } from "react-beautiful-dnd"

export const BoardHeader = ({ board, onToggleIsStarred, members, toggleMenuModal, onToggleShareModal }) => {
    return (
        <header className="board-header">
            <span>
                <h1 className="board-title">{board.title}</h1>
                <span className={board.isStarred ? 'starred true' : 'starred'}
                    onClick={onToggleIsStarred}>
                    {board.isStarred ? <AiFillStar /> : <AiOutlineStar />}</span><p>|</p>
                <section className="avatars-container" style={{ display: "flex" }}>
                    {members && members.map((member) =>(
                        // <Draggable key={member.id} index={index} draggableId={member._id}>
                            // {(provided) => (
                                // {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}
                                <section   className="member-avatar flex" title={`${member.fullname}`}>
                                    <img src={member.imgUrl ? member.imgUrl : GuestImg} alt="upload an image" className="member-avatar-img" />
                                </section>
                            // )}
                        // </Draggable>
                        )
                        // <MemberPreview key={member._id} memberId={member._id} members={members} infoReq={'boardHeader'}/>
                    )}
            



                </section>
                <button className="add-board-user"
                    onClick={onToggleShareModal}
                ><RiUserAddLine /> Share</button>
            </span>
            <button onClick={toggleMenuModal} className="show-menu-btn"><BsThreeDots /> Show menu</button>
        </header>
    )
}
