import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { utilService } from '../services/util.service'
import { loadUsers } from "../store/user.actions"
import { loadBoard, saveBoard } from "../store/board.actions"
import { MemberPreview } from "./member-preview"
import { VscChromeClose } from 'react-icons/vsc'
import GuestImg from '../assets/img/guest-img.svg'

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
        } else {
            setIsSearchOpen(false)
        }
    }, [txt])

    const onStopPropagation = (ev) => {
        ev.stopPropagation()
    }

    const addUserToBoard = (userId) => {
        console.log('userId:', userId)
        const selectedUser = board.members.find(member => member === userId)
        console.log('selectedUser:', selectedUser)
        
        if (selectedUser) {
            const selectedUsers = board.members.filter(user => user !== userId)
            board.members = [...selectedUsers]
            dispatch(saveBoard(board))
            return
        }
        const addedUser = users.find(user => user._id === userId)
        board.members = [...board.members, addedUser._id]
        dispatch(saveBoard(board))
    }

    const getFilteredUsers = () => {
        const regex = new RegExp(txt, 'i')
        const currUsers = users.filter(user => regex.test(user.fullname))

        return currUsers
    }



    const onHandleChange = ({ target: { value } }) => {
        setTxt(value)
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
                    onChange={onHandleChange} />
                <button>Share</button>
            </div>
            {isSearchOpen && <ul className='user-list-container flex column justify-between'>
                {getFilteredUsers().map(user => (
                    <li key={utilService.makeId(5)} className='flex align-center' onClick={() => addUserToBoard(user._id)}>
                        {/* {console.log('user:', users)}                         */}
                        <section className="member-avatar" title={`${user?.fullname}`}>
                            <img src={user?.imgUrl ? user?.imgUrl : GuestImg} alt="upload an image" className="member-avatar-img" />
                        </section>
                        <pre>
                            <p>{user.fullname}</p>
                            <p>@{user.username}</p>
                        </pre>
                        <span></span>
                    </li>))}
            </ul>}
            <section className='board-list-container flex column justify-between'>
                {board.members?.map(memberId => <MemberPreview key={memberId} memberId={memberId} infoReq={'boardList'} addUserToBoard={addUserToBoard}/>)}
            </section>
            {/* <ul className='board-list-container flex column justify-between'>
                {board.members?.map(member => (
                    <li key={member} className='flex align-center'>
                        {console.log('member:', member)
                        }
                        <MemberPreview member={member} />
                        <pre>
                            <p>{member}</p>
                            <p>@{member}</p>
                        </pre>
                        <span></span>
                        <button className='toggle' onClick={() => addUserToBoard(member._id)}>Remove</button>
                    </li>))}
            </ul> */}
        </section>
    </div>
}