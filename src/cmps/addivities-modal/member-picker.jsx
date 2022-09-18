import { VscChromeClose } from 'react-icons/vsc'
import { useState } from 'react'
// import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { MemberPreview } from '../member-preview'
import { utilService } from '../../services/util.service'

export const MemberPicker = ({ onSaveTask, task, toggleModal }) => {
    const board = useSelector(state => state.boardModule.board)

    const [filterBy, setFilterBy] = useState('')
    let members = useSelector(state => state.boardModule.board.members)
    members = members.filter(member => member.fullname.includes(filterBy))

    const onAddMemberToTask = (memberId) => {
        const member = board.members.find(member => member._id === memberId)
        // console.log('task:', task)       
        task.members = [...task.members, member]
        
        onSaveTask(task)
    }

    //// const onChangeLabelTitle = ({ target: { value } }) => {
    //     setSearchInput((prevSearch) => ({ ...prevSearch, searchInput: value }))
    // }

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
                onChange={({ target: { value } }) => { setFilterBy(value) }}
                value={filterBy} />
            <p>Board members</p>
            <ul className="labels-container">
                {board.members.map(member => (
                    <li key={utilService.makeId(5)} >
                        <span className='member-container flex align-center' onClick={() => onAddMemberToTask(member._id)}>
                            <MemberPreview member={member} />
                            <p>{member.username}</p>
                            <p>{`(${member.fullname})`}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </section >
    )
}