import { MemberPreview } from "./member-preview"
import { BsThreeDots } from 'react-icons/bs'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { RiUserAddLine } from 'react-icons/ri'

export const BoardHeader = ({ board, onToggleIsStarred, members, toggleMenuModal, onToggleIsShareBoardModal }) => {
    console.log('members:', members)
    
    return (
        <header className="board-header">            
            <span>                
                <h1 className="board-title">{board.title}</h1>
                <span className={board.isStarred ? 'starred true' : 'starred'}
                    onClick={onToggleIsStarred}>
                    {board.isStarred ? <AiFillStar /> : <AiOutlineStar />}</span><p>|</p>
                <section className="avatars-container" style={{ display: "flex" }}>
                    {members.map(memberId => <MemberPreview key={memberId} memberId={memberId} infoReq={'boardHeader'}/>)}
                </section>
                <button className="add-board-user"
                onClick={onToggleIsShareBoardModal}
                ><RiUserAddLine /> Share</button>
            </span>
            <button onClick={toggleMenuModal} className="show-menu-btn"><BsThreeDots /> Show menu</button>
        </header>
    )
}
