import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { IconContext } from "react-icons"
import { Link } from 'react-router-dom'

export const BoardPreview = ({ board, onToggleIsStarred }) => {

    const onIsStarred = (ev) => {
        ev.preventDefault()
        onToggleIsStarred(board._id)
    }


    return (
        <Link to={`/board/${board._id}`}>
            <div className="board-preview-container">
                <section className="board-preview" style={board.style} >
                    <span className="board-preview-fade">
                        <h1>{board.title}</h1>
                        <div className={board.isStarred ? 'starred' : ''} onClick={onIsStarred}>
                            {!board.isStarred && <AiOutlineStar />}
                            {board.isStarred && <AiFillStar />}
                        </div>
                    </span>
                </section>

            </div>
        </Link>
    )
}