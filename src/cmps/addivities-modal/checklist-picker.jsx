import { useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { utilService } from '../../services/util.service'

export const Checklist = ({ task, onSaveTask, toggleModal, onSaveActivity, onSaveTaskAct }) => {

    const [txt, setTxt] = useState('Checklist')

    const onHandleChange = ({ target }) => {
        const { value } = target
        setTxt(value)
        console.log('value:', value)

    }

    const onCreateChecklist = (ev) => {

        task.checklists.push({
            id: utilService.makeId(5),
            title: txt,
            list: []
        })


        onSaveTask(task, `added ${txt} at`, task.title)
        toggleModal(ev,'checklist-picker')
    }

    return (
        <section className="add-features-modal">
            <header className='edit-label-header'>
                <span></span>
                <div>Add checklist</div>
                <span onClick={toggleModal}>
                    < VscChromeClose />
                </span>
            </header>
            <hr />
            <h5 className='checklist-picker-title'>Title</h5>
            <input className='label-title-input' type="text" value={txt} onChange={onHandleChange} />
            <button className='checklist-btn' onClick={onCreateChecklist}>Add</button>
        </section>
    )
}