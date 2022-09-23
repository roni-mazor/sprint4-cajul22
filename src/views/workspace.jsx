import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { AppHeader } from "../cmps/app-header"
import { LoaderIcon } from "../cmps/loader-icon"
import { BoardList } from "../cmps/board-list"
import { updateIsStarred, createBoard } from "../store/board.actions"
import { MdOutlineClose } from "react-icons/md"
import boardPreview from "../assets/img/board-preview.svg"

export const Workspace = () => {

    const boards = useSelector(state => state.boardModule.boards)
    const member = useSelector(state => state.userModule.user)
    const [isCreateBoardModal, setIsCreateBoardModal] = useState(false)
    const dispatch = useDispatch()


    useEffect(() => {

    }, [])

    const onCreateNewBoard = (boardInfo) => {
        console.log('CREATING BOARD:', boardInfo)
        dispatch(createBoard(boardInfo))        
    }



    const toggleNewBoardModal = () => {
        setIsCreateBoardModal(!isCreateBoardModal)
    }

    const onToggleIsStarred = (boardId) => {
        console.log('boardId toggleIsStarred:', boardId)
        if(!boardId) return
        
        const board = boards.find(board => boardId === board._id)
        console.log('board from toggleIsStarred:', board)
        
        board.isStarred = !board.isStarred
        dispatch(updateIsStarred(board))

    }
    
    // console.log('member:', member)
    if (!boards) return <LoaderIcon />
    return (
        <React.Fragment>
            <AppHeader />
            {isCreateBoardModal && <section className="create-board-modal">
                <header className="modal-header flex">
                    <div className="modal-title">Create board</div>
                    <span></span>
                    <MdOutlineClose />
                </header>
                <main className="modal-main-body">
                    <div className="modal-background-choice flex align-center">
                        <img src={boardPreview} alt="" />
                    </div>
                </main>
            </section>}
            <div className="workspace-container">
                <section className="workspace-banner">
                    <img src="https://images.pexels.com/photos/196658/pexels-photo-196658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="workspace-img" />
                    <h2>Welcome to Your Workspace</h2>
                </section>
                <hr className="horizontal-rule" />
                <div className="boards-container">
                    <section className="workspace">
                        <BoardList boards={boards}
                            toggleCreateBoardModal={onCreateNewBoard}
                            onToggleIsStarred={onToggleIsStarred} />
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}