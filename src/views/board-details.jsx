import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { BoardHeader } from "../cmps/board-header"
import { BoardGroup } from "../cmps/board-group"
import { loadBoard } from "../store/board.actions"
import { AppHeader } from "../cmps/app-header"

export const BoardDetails = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const board = useSelector(state => state.boardModule.board)

    useEffect(() => {
        dispatch(loadBoard(params.boardId))
    }, [])

    console.log(board)
    if (board) return (
        <section className="board-container">
            <AppHeader/>
            <BoardHeader members={board.members} />
            <main className="board-main-content">
                {board.groups.map(group => <BoardGroup key={group.id} group={group} boardId={board._id} />)}
            </main>
        </section>
    )
}