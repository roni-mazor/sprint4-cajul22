import { useState, useEffect } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { boardService } from '../../services/board.service'
import { uploadService } from '../../services/upload.service'
import { utilService } from '../../services/util.service'


export const AttachmentPicker = ({ task, toggleModal, onSaveTask }) => {


    const [txt, setTxt] = useState('')

    const onHandleChange = ({ target: { value } }) => {
        setTxt(value)
    }

    const onUploadImg = async (ev) => {
        const img = await uploadService.uploadImg(ev)
        if (!task.attachments) task.attachments = []
        if (!task.background) task.background = 'header'
        const newAttachment = boardService.createNewAttachment(img.url, img.height, img.width, img.name)
        task.attachments.unshift(newAttachment)
        onSaveTask(task, `attached ${img.name} to`, task.title, null, newAttachment.url)
        toggleModal(ev, 'attachment-picker')
    }

    const onSaveUrl = (ev, img) => {

        const image = uploadService.imgFromLink(img)

        if (!task.attachments) task.attachments = []
        if (!task.background) task.background = 'header'
        const newAttachment = boardService.createNewAttachment(image.url, image.height, image.width, image.name)
        task.attachments.unshift(newAttachment)
        onSaveTask(task, `attached ${image.name} to`, task.title, null, newAttachment.url)
        toggleModal(ev, 'attachment-picker')
    }

    return (
        <section className="add-features-modal">
            <header className='edit-label-header'>
                <span></span>
                <div>Attachment</div>
                <span onClick={toggleModal}>
                    < VscChromeClose />
                </span>
            </header>
            <hr />
            <p>
                <label htmlFor="Attachment"> Computer </label>
                <input type="file" id="Attachment" onChange={onUploadImg} hidden />
            </p>
            <hr />
            <h5>Attach a link</h5>
            <input className='label-title-input' type="text" value={txt} placeholder='paste link here' onChange={onHandleChange} />
            <button className='attach-btn' onClick={(event) => onSaveUrl(event, txt)}>Attach</button>
        </section>
    )
}