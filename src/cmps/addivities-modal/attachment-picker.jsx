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
    }

    const onUploadImg = async (ev) => {
        const url = await uploadService.uploadImg(ev)
        onSaveUrl(url)
    }

    const onSaveUrl = (url) => {
        let newTask = task
        if (!newTask.attachment) newTask.attachment = []
        newTask.attachment.unshift({ id: utilService.makeId(5), url })
        console.log('newTask:', newTask)
        onSaveTask(newTask)
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