import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Outlet, useParams } from "react-router-dom"
import { BoardHeader } from "../cmps/board-header"
import { BoardGroup } from "../cmps/board-group"
import { loadBoard, saveBoard } from "../store/board.actions"
import { AppHeader } from "../cmps/app-header"
import { TxtCompose } from "../cmps/txt-compose"
import { boardService } from "../services/board.service"
// import { background } from '../assets/img/micr4679.jpg'

export const BoardDetails = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const board = useSelector(state => state.boardModule.board)
    const style = (board) ? board.style : { background: '#fff' }

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
    console.log(style)
    // style={{backgroundImage:`url(https://images.unsplash.com/photo-1662705510599-dcd4eb70c745?ixlib=
    // rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
    //     )`



    if (board) return (
        <div className="board-wrapper" style={{ backgroundImage: `url(${style}` }}>
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