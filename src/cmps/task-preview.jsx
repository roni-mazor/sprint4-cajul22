import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { toggleLabelTxt } from "../store/board.actions"

export const TaskPreview = ({ task, boardId, groupId }) => {
    const labels = useSelector(state => state.boardModule.board.labels)
    const isLabelTxtOpen = useSelector(state => state.boardModule.isLabelTxtOpen)
    const dispatch = useDispatch()

    const openLabelTxt = (ev) => {
        ev.preventDefault()
        dispatch(toggleLabelTxt())


    }

    const openLabelClassName = (isLabelTxtOpen) ? 'open' : ''
    return (
        <Link to={`/board/${boardId}/${groupId}/${task.id}`} className="task-preview">
            <header className="task-header"></header>
            <section className="labels-container">
                {task.labelIds.map((id) => {
                    const label = labels.find(l => l.id === id)
                    return <div  key={id} className={`label-btn ${openLabelClassName}`} onClick={openLabelTxt} style={{ backgroundColor: label.color }} >
                        {toggleLabelTxt && label.title}
                    </div>
                })}
            </section>
            <p>{task.title}</p>
            <section className="task-badges"></section>
        </Link>
    )
}