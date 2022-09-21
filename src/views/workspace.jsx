import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { AppHeader } from "../cmps/app-header"
import { LoaderIcon } from "../cmps/loader-icon"
import { BoardList } from "../cmps/board-list"
import { boardService } from "../services/board.service"
import { loadBoards, resetBoard, updateIsStarred } from "../store/board.actions"
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
        // console.log('boardId:', boardId)
        const board = await boardService.getById(boardId)
        // console.log('board:', board)
        board.isStarred = !board.isStarred
        dispatch(updateIsStarred(board))
    
    }
    // console.log('member:', member)
    if (!boards) return <LoaderIcon />
    return (
        <React.Fragment>
            <AppHeader />
            <section className="workspace">
                <BoardList boards={boards}
                    onToggleIsStarred={onToggleIsStarred} />
            </section>
        </React.Fragment>
    )
}