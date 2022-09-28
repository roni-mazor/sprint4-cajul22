import { useState } from 'react'
import { Checkbox } from '@mui/material'

import { VscChromeClose } from 'react-icons/vsc'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { boardService } from '../../services/board.service'
import { loadBoards, saveBoard } from '../../store/board.actions'
import { useDispatch } from 'react-redux'



export const CopyPicker = ({ board, group, task, onSaveTask, toggleModal }) => {

    const dispatch = useDispatch()
    const boards = useSelector(state => state.boardModule.boards)
    const [txt, setTxt] = useState(task.title)
    const [checklists, setChecklists] = useState(false)
    const [labels, setLabels] = useState(false)
    const [members, setMembers] = useState(false)
    const [comment, setComment] = useState(false)
    const [selectedBoard, setSelectedBoard] = useState(board)
    const [groups, setGroups] = useState(board.groups)
    const [selectedGroup, setSelectedGroup] = useState(group)
    const [position, setPosition] = useState()


    useEffect(() => {
        // dispatch(loadBoards())
        const idx = group.tasks.findIndex(currTask => currTask.id === task.id)
        setPosition(idx)
    }, [])


    const onHandleChange = ({ target: { value } }) => {
        setTxt(value)

    }

    const onGetMembers = () => {
        setMembers(!members)
    }

    const onGetChecklists = () => {
        setChecklists(!checklists)
    }

    const onGetLabels = () => {
        setLabels(!labels)
    }

    const onGetComments = () => {
        setComment(!comment)
    }

    const getSelectedBoard = async ({ target: { value } }) => {
        // const selectedBoard = boards.find(currBoard => currBoard._id === value)

        const selectedBoard = await boardService.getById(value)
        setSelectedBoard(selectedBoard)
        setGroups(selectedBoard.groups)
        setSelectedGroup(selectedBoard.groups[0])
    }





    const getSelectedGroup = ({ target: { value } }) => {

        const selectedGroup = groups.find(currGroup => currGroup.id === value)
        setSelectedGroup(selectedGroup)
    }

    const onGetPosition = ({ target: { value } }) => {
        if (!value) return
        setPosition(value)
    }

    // console.log('boards:', boards)
    const onCreateCard = (ev) => {
        const newTask = boardService.createTask(txt)
        newTask.cover = task.cover
        newTask.coverClr = task.coverClr
        newTask.background = task.background
        if (members) newTask.members = task.members
        if (checklists) newTask.checklists = task.checklists
        if (labels) newTask.labelIds = task.labelIds
        // if (comment) newTask.comment = task.comment
        selectedGroup.tasks.splice(position, 0, newTask)
        groups.map(currGroup => currGroup.id === selectedGroup.id ? selectedGroup : currGroup)
        selectedBoard.groups = groups
        // boards.map(currBoard => currBoard._id === selectedBoard._id ? selectedBoard : currBoard)
        if (selectedBoard._id === board._id) {
            dispatch(saveBoard(selectedBoard, selectedGroup, task, `copied`, `${task.title} from ${task.title}`, `in list ${selectedGroup.title}`))

        } else boardService.save(selectedBoard)
        toggleModal(ev, 'copy-picker')



    }
    console.log('selectedBoard:', selectedBoard)
    return (
        <section className="add-features-modal">
            <header className='edit-label-header'>
                <span></span>
                <div>Copy</div>
                <span onClick={toggleModal}>
                    < VscChromeClose />
                </span>
            </header>
            <hr />
            <section className='copy-modal'>
                <h5 className='copy-picker-title'>Title</h5>
                <textarea className='copy-title-txtarea'
                    cols="30" value={txt} onChange={onHandleChange} />

                {(task?.checklists?.length > 0 || task?.labelIds?.length > 0
                    || task?.members?.length > 0)
                    && <h5 className='copy-picker-title'>Keep..</h5>}
                {task?.checklists?.length > 0 && <div className='copy-keep'>
                    <Checkbox onChange={onGetChecklists} />
                    <div>Checklist <span>({task.checklists.length})</span></div>
                </div>}
                {task?.labelIds?.length > 0 && <div className='copy-keep'>
                    <Checkbox onChange={onGetLabels} />
                    <div>Labels <span>({task.labelIds.length})</span></div>
                </div>}
                {task?.members?.length > 0 && <div className='copy-keep'>
                    <Checkbox onChange={onGetMembers} />
                    <div>Members <span>({task.members.length})</span></div>
                </div>}
                {/* {task?.comment > 0 && <div className='copy-keep'>
                    <Checkbox onChange={onGetComments} />
                    <div>Comments <span>({task.comment})</span></div>
                </div>} */}
                <h5 className='copy-picker-title'>Copy to..</h5>
                <div className='to-board copy-btn flex'>
                    <p className='board-copy'>Board</p>
                    <p className='board-copy-title'>{selectedBoard.title}
                        {selectedBoard._id === board._id && <span>&nbsp;(current)</span>}
                    </p>
                    <select className='select select-board' onChange={getSelectedBoard}>
                        <option value=""></option>
                        {boards.map(currBoard => <option key={currBoard._id}
                            value={currBoard._id}>
                            {currBoard.title}
                            {currBoard._id === board._id && <span>&nbsp;(current)</span>}
                        </option>)}
                    </select>
                </div>
                <div className='copy-body flex'>
                    <div className='to-group copy-btn'>
                        <p className='copy-list'>List</p>
                        <p className='copy-list-title'>{selectedGroup.title}
                            {selectedGroup.id === group.id && <span>&nbsp;(current)</span>}</p>
                        <select className='select select-group' onChange={getSelectedGroup}>
                            <option value=""></option>
                            {groups?.map(currGroup => <option key={currGroup.id}
                                value={currGroup.id}>
                                {currGroup.title}
                                {currGroup.id === group.id && <span>&nbsp;(current)</span>}
                            </option>)}
                        </select>
                    </div>
                    <div className='to-position copy-btn'>
                        <p className='copy-position'>Position</p>
                        <p className='copy-position-title'>{+position + 1}
                            {selectedGroup.id === group.id && <span>&nbsp;(current)</span>}</p>
                        <select className='select select-position' onChange={onGetPosition}>
                            <option value=""></option>
                            {selectedGroup.tasks?.map((currTask, idx) => <option key={currTask.id}
                                value={idx}>
                                {idx + 1}
                                {currTask.id === task.id && <span>&nbsp;(current)</span>}
                            </option>)}
                            {<option value={selectedGroup.tasks.length}>{selectedGroup.tasks.length + 1}</option>}
                        </select>
                    </div>
                </div>
                <button className='copy-submit'
                    onClick={onCreateCard}>Create card</button>
            </section>
        </section>
    )
}