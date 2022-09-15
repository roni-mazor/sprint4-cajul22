import React from "react"
import { AiOutlineClockCircle, AiOutlineStar } from 'react-icons/ai'

import { BoardPreview } from "./board-preview"

export const BoardList = ({ boards }) => {
    return (

        <React.Fragment>
            <section className="board-list">
                <h3 > <AiOutlineStar /> Stared Boards</h3>
                <div className="board-list-container">

                    {boards.map(board => board.isStarred && <BoardPreview
                        key={board._id}
                        board={board}
                    />)}
                </div>
            </section>
            <section className="board-list ">
                <h3 > <AiOutlineClockCircle /> Recently Viewed Boards</h3>
                <div className="board-list-container">

                    {boards.map(board => !board.isStarred && <BoardPreview
                        key={board._id}
                        board={board}
                    />)}
                </div>
            </section>
        </React.Fragment>

    )
}