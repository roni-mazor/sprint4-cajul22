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
        ev.stopPropagation()
        task.dueDate.isDone = !task.dueDate.isDone
        onSaveTask(task)
    }

    const getBgColor = () => {
        if (task.dueDate.isDone) {
            return { background: '#61bd4f' }
        } else if (!task.dueDate.isDone && ((time - new Date()) / 1000 / 60 / 60) < 0) {
            return { background: '#ec9488' }
        }  else if (!task.dueDate.isDone && ((time - new Date()) / 1000 / 60 / 60) < 36) {
            return { background: '#f2d600' }
        } else return { background: '#fff', color: '#5e6c84' }
    }

    return (
        <span className="date-badge" style={getBgColor()}>
            <Checkbox className="date-checkbox"
                onClick={onChangeDone}
                checked={(task.dueDate.isDone)}
                size="small" style={{ padding: '0', margin: '0' }} />
            <span className="clock-icon"><AiOutlineClockCircle /></span>
            <span>{getDate()}</span>
        </span>
    )
}