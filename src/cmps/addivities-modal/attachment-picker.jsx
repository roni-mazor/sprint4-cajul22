import { useState, useEffect } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { uploadService } from '../../services/upload.service'
import { utilService } from '../../services/util.service'


export const AttachmentPicker = ({ task, toggleModal, onSaveTask }) => {


    const [txt, setTxt] = useState('')

    useEffect(() => {


        return () => {
            setTxt('')
        }
    }, [])

    const onHandleChange = ({ target }) => {
        const value = target.value
        setTxt(value)
        console.log('txt:', txt)
    }

    const onUploadImg = async (ev) => {
        const img = await uploadService.uploadImg(ev)
        onSaveUrl(img)
    }

    const onSaveUrl = (img) => {
        console.log('img:', img)
        let newTask = task
        if (!newTask.attachments) newTask.attachments = []
        newTask.attachments.unshift({
            id: utilService.makeId(5),
            url: img.url||img,
            name: img.name||'Media url',
            height: img.height||2000,
            width: img.width,
            createdAt: Date.now()
        })
        console.log('img:', img)
        console.log('newTask:', newTask)
        onSaveTask(newTask)
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
            {/* <p>Computer</p> */}
            <hr />
            <h5>Attach a link</h5>
            <input className='label-title-input' type="text" placeholder='paste link here' onChange={onHandleChange} />
            <button className='attach-btn' onClick={() => onSaveUrl(txt)}>Attach</button>
        </section>
    )
}