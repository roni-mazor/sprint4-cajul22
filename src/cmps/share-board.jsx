import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { utilService } from '../services/util.service'
import { loadUsers } from "../store/user.actions"
import { loadBoard, saveBoard } from "../store/board.actions"
import { MemberPreview } from "./member-preview"
import { VscChromeClose } from 'react-icons/vsc'

export function ShareBoard({ onToggleIsShareBoardModal }) {

    const dispatch = useDispatch()
    const users = useSelector(state => state.userModule.users)
    const board = useSelector(state => state.boardModule.board)
    const [txt, setTxt] = useState('')
    const [isSearchOpen, setIsSearchOpen] = useState(false)


    useEffect(() => {
        // console.log('board:', board)
        dispatch(loadUsers())
    }, [])

    useEffect(() => {
        if (txt !== '') {
            setIsSearchOpen(true)
        }else{
            setIsSearchOpen(false)
        }        
    }, [txt])

    const onStopPropagation = (ev) => {
        ev.stopPropagation()
    }

    const addUserToBoard = (userId) => {
        const selectedUser = board.members.find(member => member._id === userId)
        if (selectedUser) {
            const selectedUsers = board.members.filter(user => user._id !== userId)
            board.members = [...selectedUsers]
            dispatch(saveBoard(board))
            return
        }
        const addedUser = users.find(user => user._id === userId)
        board.members = [...board.members, addedUser]
        dispatch(saveBoard(board))
    }

    const getFilteredUsers = () => {

        console.log('users:', users)
        // const regex = new RegExp(txt, 'i') 
    //   const currUsers = users.filter(user => {regex.test(user.fullname)})
      const currUsers = users.filter(user => {user.fullname.includes(txt)})
       console.log('users:', currUsers)
       
       return currUsers       
    }



    const onHandleChange = ({ target: {value} }) => {       
        setTxt(value)        
        // const currUsers = users.find(user => user.fullname.includes(txt))
        // setFilteredUsers(currUsers)
    }

    return <div className="share-board-container" onClick={onToggleIsShareBoardModal}>
        <section className="share-board-modal" onClick={onStopPropagation}>
            <header className='share-board-header flex justify-between'>
                <div>Share board</div>
                <span onClick={onToggleIsShareBoardModal}>
                    < VscChromeClose />
                </span>
            </header>
            <div className='member-search-container flex'>
                <input className="add-member-input-container"
                    type="text" value={txt} placeholder='Email address or name'
                    onChange={onHandleChange}
                   /* onChange={({ target: { value } }) => { setFilterBy(value) }}
                    value={filterBy} *//>
                <button>Share</button>
            </div>
            {isSearchOpen && <ul className='user-list-container flex column justify-between'>
                {getFilteredUsers().map(user => (
                    <li key={utilService.makeId(5)} className='flex align-center'>
                        <MemberPreview member={user} />
                        <pre>
                            <p>{user.fullname}</p>
                            <p>@{user.username}</p>
                        </pre>
                        <span></span>
                    </li>))}
            </ul>}
            <ul className='user-list-container flex column justify-between'>
                {board.members?.map(member => (
                    <li key={utilService.makeId(5)} className='flex align-center'>
                        <MemberPreview member={member} />
                        <pre>
                            <p>{member.fullname}</p>
                            <p>@{member.username}</p>
                        </pre>
                        <span></span>
                        <button className='toggle' onClick={() => addUserToBoard(member._id)}>Remove</button>
                    </li>))}
            </ul>
        </section>
    </div>
}