import { ImAttachment } from "react-icons/im"
import { TbArrowNarrowRight, TbCheckbox } from "react-icons/tb"
import { DateBadge } from "./task-details/date-badge"
import GuestImg from '../assets/img/guest-img.svg'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AiOutlineClockCircle, AiOutlineCreditCard, AiOutlineUser } from "react-icons/ai"
import { BsSquareHalf, BsTag } from "react-icons/bs"
import { TaskAdditivesModal } from "./addivities-modal/task-additives-modal"
import { MdOutlineContentCopy } from "react-icons/md"

export const FastEditModal = ({ linkToTask, onSaveTask, getTaskMembers, dispalyDoneChecklist, isAllDone, labels, getCoverHeight, task, toggleModal, modalInfo }) => {
    const [isAdditivesModalOpen, setIsAdditivesModalOpen] = useState(null)
    const { windowWidth, posDetails } = modalInfo
    const [title, setTitle] = useState(task.title)
    const navigate = useNavigate()

    const onOpenCard = () => {
        toggleModal(({ isOpen: false }))
        navigate(linkToTask)
        setIsAdditivesModalOpen(null)
    }

    const saveTitleChange = () => {
        task.title = title
        onSaveTask(task, `changed the title on`, title)
        toggleModal(({ isOpen: false }))

    }

    const toggleAdditivesModal = (ev, type) => {
        const posDetails = ev.target.getBoundingClientRect()
        const windowWidth = window.innerWidth
        console.log({ type, posDetails, windowWidth })
        if (type === isAdditivesModalOpen?.type) setIsAdditivesModalOpen(null)
        else setIsAdditivesModalOpen({ type, posDetails, windowWidth })
    }

    const getModalPos = () => {
        const pos = {}
        const taskHeight = (getCoverHeight() || 0) + 205
        if (windowWidth - posDetails.x < 140) pos.right = '140px'
        else pos.left = `${posDetails.x - 238}px`
        if (window.innerHeight - posDetails.y < taskHeight) pos.bottom = '50px'
        else pos.top = `${posDetails.y - 6}px`
        return pos

    }
    const getAsidePos = () => {
        if (window.innerHeight - posDetails.y < 205) return { top: '-70px' }
        return {}
    }

    return (
        <>
            <div onClick={() => { toggleModal(({ isOpen: false })) }} className="task-details-container" >
            </div>
            {isAdditivesModalOpen?.type && <TaskAdditivesModal
                modalInfo={isAdditivesModalOpen}
                task={task}
                onSaveTask={onSaveTask}
                toggleModal={toggleAdditivesModal}
            />}
            <div>

                <div style={getModalPos()} className="task-preview fast-edit-task">
                    <aside style={getAsidePos()} className="button-container">
                        <button onClick={onOpenCard}><AiOutlineCreditCard /> Open Card</button>
                        <button onClick={(ev) => toggleAdditivesModal(ev, 'members')}><AiOutlineUser />Members</button>
                        <button onClick={(ev) => toggleAdditivesModal(ev, 'label-picker')}><BsTag /> Labels</button>
                        <button onClick={(ev) => toggleAdditivesModal(ev, 'date-picker')}><AiOutlineClockCircle /> Dates</button>
                        <button onClick={(ev) => toggleAdditivesModal(ev, 'cover-picker')}><span><BsSquareHalf /></span> Cover</button>
                        <button onClick={(ev) => toggleAdditivesModal(ev, 'moveto-picker')}><TbArrowNarrowRight /> Move</button>
                        <button onClick={(ev) => toggleAdditivesModal(ev, 'copy-picker')}><MdOutlineContentCopy /> Copy</button>
                    </aside>
                    {(!task.background || task.background === 'header') && <div>

                        {task.cover && <div className="task-cover"
                            style={{ backgroundImage: `url(${task.cover.url}) `, height: `${getCoverHeight()}px` }}></div>}
                        {task.coverClr && <div className="task-cover"
                            style={{ backgroundColor: task.coverClr, height: `32px` }}></div>}

                        <div className="task-content">

                            <section className="labels-container">
                                {task.labelIds.map((id) => {
                                    const label = labels.find(l => l.id === id)
                                    return <div key={id} className={`label-btn ${label.colorName}`}
                                        style={{ backgroundColor: label.color }} >
                                    </div>
                                })}
                            </section>
                            <textarea value={title} id="" cols="30" onChange={({ target: { value } }) => setTitle(value)} rows="10" />
                            <section className="task-user-container flex">
                                {getTaskMembers().map(member => <img className="task-users"
                                    src={member?.imgUrl ? member.imgUrl : GuestImg} alt="" />)}
                            </section>
                            <section className="task-badges flex align-center">
                                {task?.dueDate && <DateBadge onSaveTask={onSaveTask} task={task} />}

                                {task?.attachments?.length > 0 &&
                                    <div className="task-badges attached flex align-center">
                                        <span className="attach-icon"> <ImAttachment /></span>
                                        <p>{task.attachments.length}</p></div>}

                                {task?.checklists?.length > 0 && <div
                                    className={`task-badges checklist flex align-center ${isAllDone ? 'done' : ''}`}>
                                    <span className="checklist-icon"><TbCheckbox /></span>
                                    <p className=".todo-num">{dispalyDoneChecklist()}</p></div>}
                            </section>
                        </div>
                    </div>}
                    {task.background === 'body' && <div className="mini-task-container">
                        {task.cover && <div className="mini-task" style={{ backgroundImage: `url(${task.cover.url}) `, minHeight: `${getCoverHeight()}px` }}>
                            <p className="img-bg">{task.title}</p></div>}
                        {task.coverClr && <div className="mini-task" style={{ backgroundColor: task.coverClr }}>
                            <div className="mini-task-title" ><p >{task.title}</p></div> </div>}
                    </div>}
                    <button onClick={saveTitleChange} className="fast-edit-save-btn">Save</button>
                </div>
            </div>
        </>
    )
}