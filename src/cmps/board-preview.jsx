import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { IconContext } from "react-icons"
import { Link } from 'react-router-dom'

export const BoardPreview = ({ board, onToggleIsStarred }) => {

    const onIsStarred = (ev) => {
        ev.preventDefault()
        onToggleIsStarred(board._id)
        // console.log('board.isStarred:', board.isStarred)
    }


    // console.log('board:', board)
    return (
        <Link to={`/board/${board._id}`}>
            <div className='board-preview-container'>
                <section className="board-preview" style={board.style} >
                    {/* <div className='board-preview-darken'> */}
                        <h1>{board.title}</h1>
                        <div className={board.isStarred ? 'starred' : ''} onClick={onIsStarred}>
                            {!board.isStarred && <AiOutlineStar />}
                            {board.isStarred && <AiFillStar />}
                        </div>
                    {/* </div> */}
                </section>

            </div>
        </Link>
    )
}