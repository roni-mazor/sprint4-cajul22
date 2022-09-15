import { useState } from "react"
import { BsPlusLg } from 'react-icons/bs'
import { VscChromeClose } from 'react-icons/vsc'
import { boardService } from "../services/board.service"


export const TaskCompose = ({ addTask }) => {
    const [newTaskTxt, setNewTaskTxt] = useState('')
    const [composeMode, setComposeMode] = useState(false)

    const toggleNewTaskModal = () => {
        setComposeMode(prevMode => !prevMode)
    }

    const onAddTask = () => {
        const task = boardService.createTask(newTaskTxt)
        setNewTaskTxt('')
        setComposeMode(false)
        addTask(task)
    }

    const handleTxtChange = ({ target }) => {
        setNewTaskTxt(target.value)
    }
    return (
        <>
            {(composeMode) ?
                <div className="add-task-modal">
                    <textarea name="" placeholder="enter a title for this card"
                        value={newTaskTxt}
                        onChange={handleTxtChange}></textarea>
                    <section className="compose-btns-container">
                        <button className="add-task-btn" onClick={onAddTask}>Add card</button>
                        <button className="close-compose-btn" onClick={toggleNewTaskModal}><VscChromeClose /></button>
                    </section>
                </div>
                :
                <section className="task-compose">
                    <div onClick={toggleNewTaskModal} className="compose-btn">
                        <span><BsPlusLg /></span><span>Add a card</span>
                    </div>
                </section>}
        </>
    )
}