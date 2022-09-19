import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Outlet, useParams } from "react-router-dom"
import { BoardHeader } from "../cmps/board-header"
import { BoardGroup } from "../cmps/board-group"
import { loadBoard, saveBoard, updateIsStarred } from "../store/board.actions"
import { AppHeader } from "../cmps/app-header"
import { TxtCompose } from "../cmps/txt-compose"
import { boardService } from "../services/board.service"
import { LoaderIcon } from "../cmps/loader-icon"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { BoardMenuModal } from "../cmps/board-menu-modal-cmps/board-menu-modal"
// import { background } from '../assets/img/micr4679.jpg'

export const BoardDetails = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const board = useSelector(state => state.boardModule.board)
    const style = (board) ? board.style : { background: '#fff' }
    const [MenuModalOpen, setMenuModalOpen] = useState(false)
    const [filterBy, setFilterBy] = useState({ labelIds: [], txt: '',members:[] })

    useEffect(() => {
        // console.log('board:', board)
        dispatch(loadBoard(params.boardId))
    }, [])

    const onCreateGroup = (txt) => {
        console.log(txt)
        const group = boardService.createGroup(txt)
        const b = { ...board }
        b.groups.push(group)
        dispatch(saveBoard(b))
    }

    const onToggleIsStarred = () => {
        board.isStarred = !board.isStarred
        dispatch(updateIsStarred(board))
    }
    const onHandleDrag = ({ source, destination, draggableId, type }) => {
        if (type === 'task') {
            const sIndex = source.index
            const sourceGroupId = source.droppableId
            const dIndex = destination.index
            const destinationGroupId = destination.droppableId
            const taskId = draggableId

            var groups = [...board.groups]
            const sGroup = groups.find((g) => g.id === sourceGroupId)
            const [task] = sGroup.tasks.splice(sIndex, 1)
            const dGroup = groups.find((g) => g.id === destinationGroupId)
            dGroup.tasks.splice(dIndex, 0, task)
        } else {
            var groups = [...board.groups]
            const [group] = groups.splice(source.index, 1)
            groups.splice(destination.index, 0, group)
        }
        const b = { ...board, groups }
        dispatch(saveBoard(b))
    }

    const toggleMenuModal = () => {
        setMenuModalOpen(prevState => !prevState)
    }

    const getFilteredBoard = () => {
        const b = {
            ...board, groups: board.groups.map(g => {
                return {
                    ...g, tasks: g.tasks.filter(t => {
                        const regex = new RegExp(filterBy.txt, 'i')
                        return (
                            filterBy.labelIds.every(id => t.labelIds.includes(id)) &&
                            regex.test(t.title)
                        )
                    })
                }
            })
        }
        return b
    }


    if (!board) return <LoaderIcon />
    return (
        <div className="board-wrapper" style={{ backgroundImage: `url(${style})` }}>
            {/* {getFilteredBoard()} */}
            <AppHeader board={board} />
            <section className="board-container" >
                <BoardHeader toggleMenuModal={toggleMenuModal} name={board.title} members={board.members} board={board}
                    onToggleIsStarred={onToggleIsStarred} />


                <DragDropContext onDragEnd={onHandleDrag}>
                    <main className="board-main-content">

                        <Droppable droppableId="group" type="group" direction="horizontal" >

                            {(provided) => (
                                <section className="groups-main-container" {...provided.droppableProps} ref={provided.innerRef}  >


                                    {getFilteredBoard().groups.map((group, index) => {
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

                                    {provided.placeholder}
                                </section>)}

                        </Droppable>
                        <section className="group-content group-compose">
                            <TxtCompose type={'list'} returnTxt={onCreateGroup} />
                        </section>
                    </main>
                </DragDropContext>





                <Outlet />
                <BoardMenuModal filterBy={filterBy} setFilterBy={setFilterBy}
                    board={board} toggleMenuModal={toggleMenuModal} isOpen={MenuModalOpen} />
            </section>
        </div >
    )
}