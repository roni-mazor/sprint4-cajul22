import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { AppHeader } from "../cmps/app-header"
import { BoardList } from "../cmps/board-list"
import { loadBoards } from "../store/board.actions"

export const Workspace = () => {

    const boards = useSelector(state => state.boardModule.boards)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadBoards())
    }, [])

    if (!boards) return <h1>Loading...</h1>
    return (
        <React.Fragment>
            <AppHeader/>
            <section className="workspace">
                <BoardList boards={boards} />
            </section>
        </React.Fragment>
    )
}