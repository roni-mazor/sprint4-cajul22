import React from "react"
import { ImAttachment } from 'react-icons/im'
import { Link } from "react-router-dom"


export const TaskAttachments = ({ task }) => {
    const attachments = task.attachment
    return (
        <section className="attachments-container">
            <div className="attachments-title flex align-center">
                <span> <ImAttachment /></span>   <h1>Attachments</h1>
            </div>
            <section className='img-container'>
                {attachments.map(attachment => {
                    return (
                        <div>
                            <a href={attachment.url} style={{ backgroundImage: `url(${attachment.url})` }}></a>
                            <p>
                                <span className="attachment-url">Media url</span>
                            </p>
                        </div>
                    )
                })}


                {/* {attachments.map(attachment => <img key={attachment.id} src={attachment.url} alt="whatever" />)} */}
            </section>
        </section >
    )
}