import React, { useState } from "react"
import {MdOutlineClose} from "react-icons/md"
import boardPreview from "../assets/img/board-preview.svg"
import { AiOutlineClockCircle, AiOutlineStar } from 'react-icons/ai'


import { BoardPreview } from "./board-preview"

export const BoardList = ({ boards, onToggleIsStarred }) => {

    const [isCreateBoardModal, setIsCreateBoardModal] = useState(false)

    const onCreateNewBoard = () => {

    }

    const toggleNewBoardModal = () => {
        setIsCreateBoardModal(!isCreateBoardModal)
    }

    return (
        <React.Fragment>
            {isCreateBoardModal && <section className="create-board-modal">
                <header className="modal-header flex">
                    <div className="modal-title">Create board</div>
                    <span></span>
                    <MdOutlineClose/>
                </header>
                <main className="modal-main-body">
                    <div className="modal-background-choice flex align-center">
                        <img src={boardPreview} alt="" />
                    </div>
                </main>
            </section>}
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
                    <section className="create-board-preview" onClick={toggleNewBoardModal}>
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