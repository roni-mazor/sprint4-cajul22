import { AiOutlineStar } from 'react-icons/ai'
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

export const BoardPreview = ({ board }) => {

    const onIsStarred = () => {
        board.isStarred = !board.isStarred
        console.log('board.isStarred:', board.isStarred)
    }


    console.log('board:', board)
    return (
        <Link to={`/board/${board._id}`}>
            <div className="board-preview" >

                <h1>{board.title}</h1>
                <span onClick={onIsStarred}>
                    <AiOutlineStar />
                </span>
            </div>
        </Link>
    )
}