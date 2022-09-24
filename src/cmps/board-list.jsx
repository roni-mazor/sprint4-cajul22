import React, { useState } from "react"
import { useSelector } from "react-redux"

import { AiOutlineClockCircle, AiOutlineStar } from 'react-icons/ai'


import { BoardPreview } from "./board-preview"

export const BoardList = ({ boards, onToggleIsStarred, toggleCreateBoardModal }) => {    
    const user = useSelector(state => state.userModule.user)

    const background = {backgroundUrl: "", backgroundColor: "#C1C7D0"} //for testing only!

    
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
                    <section className="create-board-preview" onClick={(ev) => toggleCreateBoardModal(ev)}>
                        <h1>Create new board</h1>
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