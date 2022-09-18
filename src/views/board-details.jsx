import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Outlet, useParams } from "react-router-dom"
import { BoardHeader } from "../cmps/board-header"
import { BoardGroup } from "../cmps/board-group"
import { loadBoard, saveBoard } from "../store/board.actions"
import { AppHeader } from "../cmps/app-header"
import { TxtCompose } from "../cmps/txt-compose"
import { boardService } from "../services/board.service"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
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

    const handleTaskDrag = ({ source, destination, draggableId }) => {
        console.log()

        const sIndex = source.index
        const sourceGroupId = source.droppableId
        const dIndex = destination.index
        const destinationGroupId = destination.droppableId
        const taskId = draggableId

        const groups = [...board.groups]
        const sGroup = groups.find((g) => g.id === sourceGroupId)
        const [task] = sGroup.tasks.splice(sIndex, 1)
        const dGroup = groups.find((g) => g.id === destinationGroupId)
        dGroup.tasks.splice(dIndex, 0, task)

        const b = { ...board, groups }
        dispatch(saveBoard(b))

    }


    if (board) return (
        <div className="board-wrapper" style={{ backgroundImage: `url(${style}` }}>
            <AppHeader board={board} />
            <section className="board-container" >
                <BoardHeader name={board.title} members={board.members} />


                <DragDropContext onDragStart={console.log}>
                    <main className="board-main-content">

                        <Droppable droppableId="group" direction="horizontal">
                            {/* {...provided.droppableProps} ref={provided.innerRef} */}

                            {(provided) => (
                                <section className="groups-main-container" {...provided.droppableProps} ref={provided.innerRef}  >

                                    <DragDropContext onDragEnd={handleTaskDrag} >
                                        {board.groups.map((group, index) => {
                                            return (

                                                <Draggable key={group.id} index={index} draggableId={group.id}>
                                                    {(provided) => (
                                                        <section {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                            <section className="group-content"  >

                                                                <BoardGroup groupIndex={index} key={group.id} group={group} boardId={board._id} />

                                                            </section>
                                                        </section>)}

                                                </Draggable>
                                            )
                                        })}
                                    </DragDropContext>


                                    {provided.placeholder}
                                </section>)}

                        </Droppable>
                        <section className="group-content group-compose">
                            <TxtCompose type={'list'} returnTxt={onCreateGroup} />
                        </section>
                    </main>
                </DragDropContext>





                <Outlet />
            </section>
        </div >
    )
}