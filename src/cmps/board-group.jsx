import { TaskPreview } from "./task-preview"
import { BsThreeDots } from 'react-icons/bs'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { removeGroup, saveGroup } from "../store/board.actions"
import { TxtCompose } from "./txt-compose"
import { boardService } from "../services/board.service"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { TaskAdditivesModal } from "../cmps/addivities-modal/task-additives-modal"
export const BoardGroup = ({ group, boardId, groupIndex }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState(group.title)
    const [isAdditivesModalOpen, setIsAdditivesModalOpen] = useState(null)

    const toggleAdditivesModal = (type) => {
        if (type === isAdditivesModalOpen) setIsAdditivesModalOpen(null)
        else setIsAdditivesModalOpen(type)
    }

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

    const onRemoveGroup = () => {
        dispatch(removeGroup(group.id))
    }

    
    return (

        
        <>
            <header className="group-header" >
                <input type="text"
                    onChange={changeGroupTitle}
                    onBlur={onTitleUpdate}
                    value={title} />
                <button onClick={() => { toggleAdditivesModal('group-actions') }} className="group-actions-btn"><BsThreeDots /></button>
            </header>
         
            <Droppable droppableId={`${group.id}`} type='task'>
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



            {isAdditivesModalOpen && <TaskAdditivesModal
                type={isAdditivesModalOpen}
                // task={task}
                // onSaveTask={onSaveTask} 
                onRemoveGroup={onRemoveGroup}
                toggleModal={toggleAdditivesModal} />}

            <TxtCompose type={'card'} returnTxt={addTask} />
        </>
        // </section>

    )
}