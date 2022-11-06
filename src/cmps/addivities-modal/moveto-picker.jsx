import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { boardService } from "../../services/board.service"

import { VscChromeClose } from 'react-icons/vsc'

import { saveBoard, saveBoards, saveGroup } from "../../store/board.actions"
import { Link, useNavigate } from "react-router-dom"



export const MoveTo = ({ board, group, task, onSaveTask, toggleModal }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const boards = useSelector(state => state.boardModule.boards)
    const [selectedBoard, setSelectedBoard] = useState(board)
    const [groups, setGroups] = useState(board.groups)
    const [selectedGroup, setSelectedGroup] = useState(group)
    const [position, setPosition] = useState()

    useEffect(() => {
        // dispatch(loadBoards())
        const idx = group.tasks.findIndex(currTask => currTask.id === task.id)
        setPosition(idx)
    }, [])

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
        setPosition(value)
    }

    const onCreateCard = (ev) => {
        const taskIdx = group.tasks.findIndex(currTask => currTask.id === task.id)
        group.tasks.splice(taskIdx, 1)
        groups.map(currGroup => currGroup.id === selectedGroup.id ? selectedGroup : currGroup)
        selectedGroup.tasks.splice(position, 0, task)
        selectedBoard.groups = groups


        if (selectedBoard._id !== board._id) {
            boardService.save(selectedBoard)

        }

        setTimeout(() => {
            dispatch(saveGroup(group, task, `moved`, task.title, `from ${group.title} to ${selectedGroup.title}`))
        }, 600)



    }
    return (
        <section className="add-features-modal">
            <header className='edit-label-header'>
                <span></span>
                <div>Move to</div>
                <span onClick={toggleModal}>
                    < VscChromeClose />
                </span>
            </header>
            <hr />
            <section className='copy-modal'>
                <h5 className='copy-picker-title'>Move card</h5>
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
                <Link to={`/board/${board._id}/`}>
                    <button className='copy-submit'
                        onClick={onCreateCard}>Move</button>
                </Link>
            </section>
        </section>
    )
}