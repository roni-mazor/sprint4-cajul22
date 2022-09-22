import React from "react"
import { AiOutlineClockCircle, AiOutlineStar } from 'react-icons/ai'

import { BoardPreview } from "./board-preview"

export const BoardList = ({ boards, onToggleIsStarred }) => {

    const onCreateNewBoard = () => {
        
    }

    return (
        <React.Fragment>
            <section className="board-list">
                <h3 > <AiOutlineStar /> Stared Boards</h3>
                <div className="board-list-container starred">

                    {boards.map(board => board.isStarred && <BoardPreview
                        key={board._id}
                        board={board}
                        onToggleIsStarred={onToggleIsStarred}
                    />)}
                </div>
            </section>
            <section className="board-list ">
                <h3 > <AiOutlineClockCircle /> Recently Viewed Boards</h3>
                <div className="board-list-container">
                <section className="create-board-preview" onClick={onCreateNewBoard}>
                    <h1>Create New Board</h1>
                </section>
                    {boards.map(board => !board.isStarred && <BoardPreview
                        key={board._id}
                        board={board}
                        onToggleIsStarred={onToggleIsStarred}
                    />)}
                </div>
            </section>
        </React.Fragment>

    )
}