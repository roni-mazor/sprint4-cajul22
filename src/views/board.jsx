import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { BoardMainHeader } from "../cmps/board-main-header"
import { Group } from "../cmps/group"
import { loadBoard } from "../store/board.actions"

export const Board = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const board = useSelector(state => state.boardModule.board)

    useEffect(() => {
        dispatch(loadBoard(params.boardId))
    }, [])


    if (board) return (
        <section className="board-container">
            <BoardMainHeader members={board.members} />
            <main className="board-main-content">
                {board.groups.map(group => <Group group={group} />)}
            </main>
        </section>
    )
}