import { Checkbox } from "@mui/material"
import { AiOutlineClockCircle } from "react-icons/ai"

export const DateBadge = ({ task, onSaveTask }) => {
    const time = new Date(task.dueDate.time)
    const getDate = () => {
        const monthNames = ["Jan", "Feb", "Mar", "Ap", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ]
        return `${monthNames[time.getMonth()]} ${time.getDate()}`
    }

    const onChangeDone = (ev) => {
        ev.preventDefault()
        
        task.dueDate.isDone = !task.dueDate.isDone
        onSaveTask(task)
    }

    return (
        <span className="date-badge">
            <Checkbox className="date-checkbox"
                onChange={onChangeDone}
                checked={(task.dueDate.isDone)}
                size="smaller" style={{ padding: '5px 9px' }} />
            <span className="clock-icon"><AiOutlineClockCircle /></span>
            <span>{getDate()}</span>
        </span>
    )
}