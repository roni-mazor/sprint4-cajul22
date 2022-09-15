import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

export const BoardPreview = ({ board, onToggleIsStarred }) => {

    const onIsStarred = (ev) => {
        ev.preventDefault()
        onToggleIsStarred(board._id)
        // console.log('board.isStarred:', board.isStarred)
    }


    console.log('board:', board)
    return (
        <Link to={`/board/${board._id}`}>
            <section className="board-preview" >

                <h1>{board.title}</h1>
                <div className={board.isStarred ? 'starred' : ''} onClick={onIsStarred}>
                    {!board.isStarred && <AiOutlineStar />}
                    {board.isStarred && <AiFillStar />}
                </div>
            </section>
        </Link>
    )
}