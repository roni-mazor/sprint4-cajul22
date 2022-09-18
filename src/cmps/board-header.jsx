import { MemberPreview } from "./member-preview"
import { BsThreeDots } from 'react-icons/bs'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export const BoardHeader = ({ board, onToggleIsStarred }) => {



    return (
        <header className="board-header">
            <span>
                <h1 className="board-title">{board.title}</h1>
                <span className={board.isStarred ? 'starred true' : 'starred'}
                    onClick={onToggleIsStarred}>
                    {board.isStarred ? <AiFillStar /> : <AiOutlineStar />}</span><p>|</p>                 <section className="avatars-container" style={{ display: "flex" }}>
                    {board.members.map(member => <MemberPreview member={member} />)}
                </section>
            </span>
            <button className="show-menu-btn"><BsThreeDots /> Show menu</button>
        </header>
    )
}
