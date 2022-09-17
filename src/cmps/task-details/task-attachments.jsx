import { ImAttachment } from 'react-icons/im'



export const TaskAttachments = ({ task }) => {
    const attachments = task.attachment
    return (
        <section className="attachments-container">
            <div className="attachments-title flex align-center">
                <span> <ImAttachment /></span>   <h1>Attachments</h1>
            </div>
            <section className='img-container'>
                {attachments.map(attachment => <div style={{ backgroundImage: `url(${attachment.url})` }}></div>)}
                {/* {attachments.map(attachment => <img key={attachment.id} src={attachment.url} alt="whatever" />)} */}
            </section>
        </section >
    )
}