import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { ImAttachment } from 'react-icons/im'
import { BsSquareHalf } from 'react-icons/bs'

import { utilService } from '../../services/util.service'

export const TaskAttachments = ({ task, onSaveTask }) => {
    // const attachments = task.attachment
    const [attachments, setAttachments] = useState(task.attachment)
    const dispatch = useDispatch()

    const getFormatedTime = (time) => {
        const date = new Date(time)
        const month = utilService.getMonthName(date)
        // date.getMonth()
        const day = date.getDate()
        const hour = date.getHours()
        const minutes = date.getMinutes()
        return `${month} ${day} at ${hour}:${minutes}`
    }

    const onRemoveAttachment = (attachmentId) => {
        console.log('attachmentId :', attachmentId)
        let newAttachments = attachments.filter(attachment => attachment.id !== attachmentId)
        let newTask = task
        newTask.attachment = newAttachments
        onSaveTask(newTask)
    }

    const onMakeCover = (attachmentId) => {
        let selectedAttach = attachments.find(attachment => attachment.id === attachmentId)
        console.log('selectedAttach:', selectedAttach)
        let newTask = task
        newTask.cover = selectedAttach.url
        onSaveTask(newTask)
    }
    // console.log('date:', date)
    return (
        <section className="attachments-container">
            <div className="attachments-title flex align-center">
                <span> <ImAttachment /></span>   <h1>Attachments</h1>
            </div>
            <section className='img-container'>
                {attachments.map(attachment => {
                    return (
                        <div key={attachment.id}>
                            <a href={attachment.url} style={{ backgroundImage: `url(${attachment.url})` }}></a>
                            <p className="flex column">
                                <span className="attachment-url">Media url</span>
                                <span className="attachment-details">
                                    <span> Added <span></span>{getFormatedTime(attachment.createdAt)} - </span>
                                    <span className="delete-attachment"
                                        onClick={() => onRemoveAttachment(attachment.id)}>Delete</span>
                                </span>
                                <span className="attachment-cover">
                                    <span className="icon">
                                        <BsSquareHalf />
                                    </span>
                                    <span onClick={() => onMakeCover(attachment.id)}> Make cover</span>
                                </span>
                            </p>
                        </div>
                    )
                })}


                {/* {attachments.map(attachment => <img key={attachment.id} src={attachment.url} alt="whatever" />)} */}
            </section>
        </section >
    )
}