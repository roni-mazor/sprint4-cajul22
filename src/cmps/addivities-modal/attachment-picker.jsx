import { useState, useEffect } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { boardService } from '../../services/board.service'
import { imgFromLink, uploadService } from '../../services/upload.service'


export const AttachmentPicker = ({ task, toggleModal, onSaveTask }) => {


    const [txt, setTxt] = useState('')

    const onHandleChange = ({ target: { value } }) => {
        setTxt(value)
    }

    const onUploadImg = async (ev) => {
        const img = await uploadService.uploadImg(ev)
        onSaveUrl(img)
    }

    const onSaveUrl = (img) => {
        if (typeof img === 'string') {
            // console.log('hey')
            const image = imgFromLink(img)
            img = image  // console.log('img:', img)
            console.log('img:', img)
        }
        if (!task.attachments) task.attachments = []
        const newAttachment = boardService.createNewAttachment(img.url, img.height, img.width, img.name)
        task.attachments.unshift(newAttachment)
        console.log('newAttachment:', newAttachment)
        // console.log('img:', img)
        if (!task.background) task.background = 'header'
        onSaveTask(task, `attached ${img.name} to`, task.title, null, newAttachment.url)
        toggleModal()
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
            <button className='attach-btn' onClick={() => onSaveUrl(txt)}>Attach</button>
        </section>
    )
}