import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Outlet, useParams } from "react-router-dom"
import { BoardHeader } from "../cmps/board-header"
import { BoardGroup } from "../cmps/board-group"
import { loadBoard, saveBoard, setBoard } from "../store/board.actions"
import { loadUsers } from "../store/user.actions"
import { AppHeader } from "../cmps/app-header"
import { TxtCompose } from "../cmps/txt-compose"
import { ShareBoard } from "../cmps/share-board"
import { boardService } from "../services/board.service"
import { LoaderIcon } from "../cmps/loader-icon"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { BoardMenuModal } from "../cmps/board-menu-modal-cmps/board-menu-modal"
import { socketService } from "../services/socket.service"

export const BoardDetails = () => {
    const params = useParams()
    const dispatch = useDispatch()
    let [isShareModalOpen, setIsShareModalOpen] = useState(false)
    const board = useSelector(state => state.boardModule.board)
    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)
    const [filterBy, setFilterBy] = useState({ labelIds: [], txt: '', members: [], showNoMembers: false, isDone: null, time: null })
    const windowWidth = window.innerWidth

    useEffect(() => {
        dispatch(loadBoard(params.boardId))
        socketService.emit('set-board-listening', params.boardId)
        // socketService.on('emit-board-change', (board) => {
        //     console.log('got emitted')
        //     dispatch(setBoard(board))
        // })
        socketService.on('emit-board-change', (boardId) => {
            console.log('got emitted', boardId)
            dispatch(loadBoard(boardId))
        })
    }, [])

    const onCreateGroup = (txt) => {
        const group = boardService.createGroup(txt)
        const b = { ...board }
        b.groups.push(group)
        dispatch(saveBoard(b, group, null, `added ${txt} to the board`))

    }

    const onToggleIsStarred = () => {
        board.isStarred = !board.isStarred
        dispatch(saveBoard(board))
    }

    const onToggleShareModal = () => {
        setIsShareModalOpen(isShareModalOpen = !isShareModalOpen)
    }

    const onHandleDrag = ({ source, destination, draggableId, type }) => {
        var txt = ''
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
            if (sGroup.id !== dGroup.id) {
                txt = `moved`
            }
            const b = { ...board, groups }
            dispatch(saveBoard(b, dGroup, task, txt, task.title, `from ${sGroup.title} to ${dGroup.title}`))

        } else if (type === 'group') {
            var groups = [...board.groups]
            const [group] = groups.splice(source.index, 1)
            groups.splice(destination.index, 0, group)
            txt = `moved ${group}`

            const b = { ...board, groups }
            dispatch(saveBoard(b, txt))
        }
    }

    const toggleMenuModal = () => {
        setIsMenuModalOpen(prevState => !prevState)
    }
    console.log('board:', board)
    const getFilteredBoard = () => {
        return {
            ...board, groups: board?.groups?.map(group => {
                return {
                    ...group, tasks: group.tasks.filter(task => {
                        const regex = new RegExp(filterBy.txt, 'i')
                        return (

                            filterBy.labelIds.every(id => task.labelIds.includes(id))
                             &&
                            regex.test(task.title)
                             &&
                            ((filterBy.showNoMembers) ?
                                !task.hasOwnProperty('members') || task.members.length === 0 :
                                filterBy.members.every(id => task?.members?.includes(id)))
                                 &&
                            ((filterBy.isDone === null) ? true :
                                (filterBy.isDone) ? task?.dueDate?.isDone : !task?.dueDate?.isDone) 
                                &&
                            ((!filterBy.time) ? true :
                                (task?.dueDate?.time - Date.now() < filterBy.time.max &&
                                    task?.dueDate?.time - Date.now() > filterBy.time.min))
                        )
                    })
                }
            })
        }
    }


    if (!board) return <LoaderIcon />
    return (
        <DragDropContext onDragEnd={onHandleDrag}>

            <div className="board-wrapper" style={board.style}  >


                {isShareModalOpen && <ShareBoard x={board.members} onToggleShareModal={onToggleShareModal} />}
                <AppHeader board={board} />



                <section className="board-container"  >
                    <BoardHeader windowWidth={windowWidth} name={board.title} members={board.members} board={board}
                        onToggleIsStarred={onToggleIsStarred}
                        toggleMenuModal={toggleMenuModal}
                        onToggleShareModal={onToggleShareModal} />

                    <div className="board">
                        <main className="board-main-content">
                            <Droppable droppableId="group" type="group" direction="horizontal" >
                                {(provided) => (
                                    <section className="groups-main-container" {...provided.droppableProps} ref={provided.innerRef}  >
                                        {getFilteredBoard().groups.map((group, index) => {
                                            return (
                                                <Draggable key={group.id} index={index} draggableId={group.id}>
                                                    {(provided) => (

                                                        <section className="group-content" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                                                            <BoardGroup groupIndex={index} key={group.id} group={group} boardId={board._id} />
                                                        </section>
                                                    )}
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
                    </div>

                    <Outlet />
                    <BoardMenuModal filterBy={filterBy} setFilterBy={setFilterBy}
                        board={board} toggleMenuModal={toggleMenuModal} isOpen={isMenuModalOpen} />
                    {/* {provided.placeholder} */}
                </section>
            </div >
            {/* )}
            </Droppable> */}
        </DragDropContext>
    )
}