import { TaskPreview } from "./task-preview"
import { BsThreeDots } from 'react-icons/bs'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { saveGroup } from "../store/board.actions"
import { TxtCompose } from "./txt-compose"
import { boardService } from "../services/board.service"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

export const BoardGroup = ({ group, boardId, groupIndex }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState(group.title)


    const changeGroupTitle = ({ target }) => {
        setTitle(target.value)
    }
    const onTitleUpdate = () => {
        const g = { ...group, title }
        dispatch(saveGroup(g))
    }

    const addTask = (txt) => {
        const task = boardService.createTask(txt)
        const g = { ...group }
        g.tasks.push(task)
        dispatch(saveGroup(g))
    }

    // const handleOnDragEnd = (result) => {
    //     const tasks = Array.from(group.tasks)
    //     const [reorderedItem] = tasks.splice(result.source.index, 1)
    //     tasks.splice(result.destination.index, 0, reorderedItem)
    //     const g = { ...group, tasks }
    //     dispatch(saveGroup(g))
    //     console.log(result)
    // }

    // {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}

    return (

        // <section >
        <>
            {/* <Draggable key={group.id} index={groupIndex} draggableId={group.id} >

            {(provided) => ( */}
            <header className="group-header" >
                <input type="text"
                    onChange={changeGroupTitle}
                    onBlur={onTitleUpdate}
                    value={title} />
                <button className="group-actions-btn"><BsThreeDots /></button>
            </header>
             {/* )}

        </Draggable> */}

            {/* <DragDropContext onDragEnd={handleTaskDrag}> */}
            <Droppable droppableId={`${group.id}`}>
                {(provided) => (
                    <ul className="task-container" {...provided.droppableProps} ref={provided.innerRef}>

                        {group.tasks.map((task, index) => {
                            return (
                                <Draggable key={task.id} index={index} draggableId={task.id} >

                                    {(provided) => (
                                        <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                            <TaskPreview task={task} groupId={group.id} boardId={boardId} />
                                        </li>
                                    )
                                    }

                                </Draggable>);

                        })}

                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
            {/* </DragDropContext> */}





            <TxtCompose type={'card'} returnTxt={addTask} />
        </>
        // </section>

    )
}