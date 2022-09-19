import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { toggleLabelTxt } from "../store/board.actions"
import GuestImg from '../assets/img/guest-img.svg'
import { ImAttachment } from 'react-icons/im'
import { Members } from "../cmps/task-details/task-members"
import { useEffect, useState } from "react"

export const TaskPreview = ({ task, boardId, groupId }) => {
    const labels = useSelector(state => state.boardModule.board.labels)
    const isLabelTxtOpen = useSelector(state => state.boardModule.isLabelTxtOpen)
    const [attachCount, setAttachCount] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        setAttachCount(task?.attachments?.length)
    }, [])

    const onToggleLabelTxt = (ev) => {
        ev.preventDefault()
        dispatch(toggleLabelTxt())
    }

    const getCoverHeight = () => {
        if (!task.cover) return
        if (task.cover.height > 1000) return task.cover.height * 0.1
        if (task.cover.height < 290) return task.cover.height
        if (task.cover.height < 600) return task.cover.height * 0.5
        if (task.cover.height < 800) return task.cover.height * 0.3
        else return task.cover.height * 0.4
    }

    const openLabelClassName = (isLabelTxtOpen) ? 'open' : ''
    return (
        <Link to={`/board/${boardId}/${groupId}/${task.id}`} className="task-preview">
            {/* <header className="task-header"> */}
            {task.cover && <div className="task-cover" style={{ backgroundImage: `url(${task.cover.url}) `, height: `${getCoverHeight()}px` }}></div>}

            {/* </header> */}
            <div className="task-content">

                <section className="labels-container">
                    {task.labelIds.map((id) => {
                        const label = labels.find(l => l.id === id)
                        return <div key={id} className={`label-btn ${openLabelClassName}`} onClick={onToggleLabelTxt} style={{ backgroundColor: label.color }} >
                            {isLabelTxtOpen && <span>{label.title}</span>}
                        </div>
                    })}
                </section>
                <p>{task.title}</p>
                <section className="task-user-container flex">
                    {task?.members && task.members.map(member => <img className="task-users" src={member?.imgUrl ? member?.imgUrl : GuestImg} alt="" />)}
                </section>
                <section className="task-badges">
                    {task?.attachments?.length > 0 && <span className="task-badges attached">
                        <ImAttachment />  {attachCount}</span>}
                </section>
            </div>
        </Link>
    )
}