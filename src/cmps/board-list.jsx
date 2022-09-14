import React from "react"
import { BoardPreview } from "./board-preview"

export const BoardList = ({ boards }) => {
    return (

        <React.Fragment>
            <h3 >Stared Boards</h3>
            <section className="board-list">

                {boards.map(board => board.board.isStared && <BoardPreview
                    key={board.id}
                    board={board}
                />)}
            </section>
            <h3 >Recently Viewed Boards</h3>
            <section className="board-list ">

                {boards.map(board => !board.board.isStared && <BoardPreview
                    key={board.id}
                    board={board}
                />)}
            </section>
        </React.Fragment>

    )
}