import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Outlet, useParams } from "react-router-dom"
import { BoardHeader } from "../cmps/board-header"
import { BoardGroup } from "../cmps/board-group"
import { loadBoard, saveBoard } from "../store/board.actions"
import { AppHeader } from "../cmps/app-header"
import { TxtCompose } from "../cmps/txt-compose"
import { boardService } from "../services/board.service"
import { background } from '../assets/img/micr4679.jpg'

export const BoardDetails = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const board = useSelector(state => state.boardModule.board)

    useEffect(() => {
        dispatch(loadBoard(params.boardId))
    }, [])

    const onCreateGroup = (txt) => {
        console.log(txt)
        const group = boardService.createGroup(txt)
        const b = { ...board }
        b.groups.push(group)
        dispatch(saveBoard(b))
    }

    console.log(board)
    if (board) return (
        <div>
            <AppHeader board={board} />
            <section className="board-container" >
                <BoardHeader name={board.title} members={board.members} />
                <main className="board-main-content">
                    {board.groups.map(group => <BoardGroup key={group.id} group={group} boardId={board._id} />)}
                    <section className="group-content group-compose">
                        <TxtCompose type={'list'} returnTxt={onCreateGroup} />
                    </section>
                </main>
                <Outlet />
            </section>
        </div>
    )
}