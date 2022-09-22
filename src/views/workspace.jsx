import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { AppHeader } from "../cmps/app-header"
import { LoaderIcon } from "../cmps/loader-icon"
import { BoardList } from "../cmps/board-list"
import { boardService } from "../services/board.service"
import { loadBoards,  resetBoard, updateIsStarred } from "../store/board.actions"
import { loadLoggedInUser } from "../store/user.actions"

export const Workspace = () => {



    const boards = useSelector(state => state.boardModule.boards)
    const member = useSelector(state => state.userModule.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadBoards())
        dispatch(loadLoggedInUser())
        // dispatch(resetBoard())
    }, [])

    const onToggleIsStarred = async (boardId) => {
        const board = boards.find(board => boardId === board._id)
        board.isStarred = !board.isStarred
        dispatch(updateIsStarred(board))

    }
    // console.log('member:', member)
    if (!boards) return <LoaderIcon />
    return (
        <React.Fragment>
            <AppHeader />
                <section className="workspace-banner">
                    <img src="https://images.pexels.com/photos/196658/pexels-photo-196658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="workspace-img"/>
                    <h2>Welcome to Your Workspace</h2>
                </section>
                <hr class="horizontal-rule"/>
            <section className="workspace">
                <BoardList boards={boards}
                    onToggleIsStarred={onToggleIsStarred} />
            </section>
        </React.Fragment>
    )
}