import { VscChromeClose } from 'react-icons/vsc'
// import { FaPencilAlt } from 'react-icons/fa'
// import { FiChevronLeft } from 'react-icons/fi'
import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { saveLabels } from '../store/board.actions'
import { useSelector } from 'react-redux'
import { MemberPreview } from '../member-preview'
// import { boardService } from '../../services/board.service'
// import { MemberPreview } from '../member-preview'


export const MemberPicker = ({ onSaveTask, task, toggleModal }) => {
    const members = useSelector(state => state.userModule.users)

    const [searchInput, setSearchInput] = useState('')

    // const onChangeLabelColor = (color) => {
    //     setLabelEdit((prevLabel) => ({ ...prevLabel, color }))
    // }
    const onChangeLabelTitle = ({ target: { value } }) => {
        setSearchInput((prevSearch) => ({ ...prevSearch, searchInput: value }))
    }

    // const saveLabelChanges = () => {
    //     let newLabelIdx = labels.findIndex(l => l.id === labelEdit.id)
    //     if (newLabelIdx === -1) labels.push(labelEdit)
    //     else labels.splice(newLabelIdx, 1, labelEdit)

    //     dispatch(saveLabels(labels))
    //     setLabelEdit(null)
    // }
    // const onDeleteLabel = () => {
    //     let newLabels = labels.filter(l => (l.id !== labelEdit.id))
    //     dispatch(saveLabels(newLabels))
    //     setLabelEdit(null)
    // }
    // const onCreateLabel = () => {
    //     setLabelEdit(boardService.createLabel())

    // }

    return (
        <section className="add-features-modal">
            <header className='edit-label-header'>
                <span></span>
                <div>Members</div>
                <span onClick={toggleModal}>
                    < VscChromeClose />
                </span>
            </header>

            <hr />

            <input className="label-title-input"
                type="text" placeholder='Search members'
                onChange={onChangeLabelTitle}
                value={searchInput.searchInput} />
            <p>Board members</p>
            <ul className="labels-container">
                {members.map(member => (
                    <li key={member.fullname} className='member-container flex align-center'>
                        <MemberPreview member={member}/>
                        <p>{member.username}</p>
                        <p>{`(${member.fullname})`}</p>
                    </li>
                ))}
            </ul>
        </section >
    )
}