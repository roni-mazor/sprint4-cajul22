import { Checkbox } from "@mui/material"
import { AiOutlineDown } from "react-icons/ai"



export const DateShower = ({ task, onSaveTask, toggleModal }) => {


    const time = new Date(task.dueDate.time)
    const getDate = () => {
        const monthNames = ["Jan", "Feb", "Mar", "Ap", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ]
        const hoursFromNow = ((time - new Date()) / 1000 / 60 / 60)
        const hoursToTommorow = 24 - (new Date()).getHours()
        const hoursToYesterday = (new Date()).getHours() - 24

        if ((hoursFromNow < 0 && hoursFromNow > hoursToYesterday) || (hoursFromNow > 0 && hoursFromNow < hoursToTommorow)) {
            return 'Today '
        } else if (hoursFromNow > 0 && hoursFromNow < hoursToTommorow + 24) {
            return 'Tommorow '
        } else if (hoursFromNow <= -48 - hoursToYesterday || hoursFromNow >= 48 - hoursToTommorow) {
            return `${monthNames[time.getMonth()]} ${time.getDate()}`
        } else if (hoursFromNow > hoursToYesterday - 24 && hoursFromNow < hoursToYesterday) {
            return 'Yesterday '
        }
    }

    const onOpenModal = (ev) => {
        ev.preventDefault()
        toggleModal(ev, 'date-picker')
    }

    const onChangeDone = () => {
        task.dueDate.isDone = !task.dueDate.isDone
        if (task.dueDate.isDone) onSaveTask(task, `marked the due date on`, task.title, `as complete`)
        else if (!task.dueDate.isDone) onSaveTask(task, `marked the due date on`, task.title, `as incomplete`)
    }
    return (
        <section className="date-shower">
            <h3>Due Date</h3>
            <label className="date-shower-container" >
                <Checkbox
                    onChange={onChangeDone}
                    sx={{ color: 'lightgray' }}
                    checked={(task.dueDate.isDone)}
                    size="small" style={{ padding: '0', margin: '2px' }} />
                <div className='time-display-btn' >
                    {`${getDate()} ${time.toLocaleTimeString()}`}
                    {task.dueDate.isDone && <span className="isdone complete" >complete</span>}
                    {(!task.dueDate.isDone && ((time - new Date()) / 1000 / 60 / 60) < 0) && <span className="isdone overdue" >overdue</span>}
                    {(!task.dueDate.isDone && ((time - new Date()) / 1000 / 60 / 60) > 0 && ((time - new Date()) / 1000 / 60 / 60) < 36) && <span className="isdone due-soon" >due soon</span>}
                    <span onClick={onOpenModal} className="arrow-down"><AiOutlineDown /></span>
                </div>
            </label>
        </section>
    )
}