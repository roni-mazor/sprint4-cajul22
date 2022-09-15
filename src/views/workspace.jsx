import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { AppHeader } from "../cmps/app-header"
import { BoardList } from "../cmps/board-list"
import { boardService } from "../services/board.service"
import { loadBoards, updateIsStarred } from "../store/board.actions"

export const Workspace = () => {

    const boards = useSelector(state => state.boardModule.boards)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadBoards())
    }, [])

    const onToggleIsStarred = async (boardId) => {
        // console.log('boardId:', boardId)
        const board = await boardService.getById(boardId)
        // console.log('board:', board)
        board.isStarred = !board.isStarred
        dispatch(updateIsStarred(board))
        // dispatch(loadBoards())
    }
 
    if (!boards) return <h1>Loading...</h1>
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