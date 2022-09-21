import React, { useState } from "react"
import { LoaderIcon } from '../loader-icon'
import { ImAttachment } from 'react-icons/im'
import { BsSquareHalf } from 'react-icons/bs'

import { utilService } from '../../services/util.service'

export const TaskAttachments = ({ task, onSaveTask, removeAttachments,onSaveActivity }) => {

    const { attachments } = task

    const formatedTime = utilService.getFormatedTime


    const onRemoveAttachment = (attachmentId) => {
        console.log('attachmentId :', attachmentId)
        task.attachments = attachments.filter(attachment => attachment.id !== attachmentId)
        task.cover = ''
        onSaveTask(task)
        onSaveActivity('removed an attachment')
    }

    const onMakeCover = (attachmentId) => {
        let selectedAttach = attachments.find(attachment => attachment.id === attachmentId)
        // console.log('selectedAttach:', selectedAttach)

        task.cover = selectedAttach
        task.coverClr = ''
        onSaveActivity('changed the cover')
        onSaveTask(task)
    }
    
    const startLoader = () => {
        setTimeout()
    }
    
    const onRemoveCover = () => {
        
        task.cover = ''
        onSaveActivity('removed the cover')
        onSaveTask(task)
    }
    // console.log('date:', date)
    return (
        <section className="attachments-container">
            <div className="attachments-title flex align-center">
                <span className='task-icon'> <ImAttachment /></span>   <h1>Attachments</h1>
            </div>
            <section className='img-container'>
                {attachments.map(attachment => {
                    return (
                        <div key={attachment.id}>
                            {/* <section className="loader-screen" startLoader={startLoader}>
                             <LoaderIcon />
                            </section> */}
                            <a href={attachment.url} style={{ backgroundImage: `url(${attachment.url})` }}></a>
                            <p className="flex column">
                                <span className="attachment-url">{attachment.name}</span>
                                <span className="attachment-details">
                                    <span> Added <span></span>{formatedTime(attachment.createdAt)} - </span>
                                    <span className="delete-attachment"
                                        onClick={() => onRemoveAttachment(attachment.id)}>Delete</span>
                                </span>
                                <span className="attachment-cover">
                                    <span className="icon">
                                        <BsSquareHalf />
                                    </span>
                                    {attachment.id !== task?.cover?.id && <span onClick={() => onMakeCover(attachment.id)}> Make cover</span>}
                                    {attachment.id === task?.cover?.id && <span onClick={() => onRemoveCover(attachment.id)}> Remove cover</span>}
                                </span>
                            </p>
                        </div>
                    )
                })}
            </section>
        </section >
    )
}