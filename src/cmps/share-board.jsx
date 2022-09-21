import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { utilService } from '../services/util.service'
import { loadUsers } from "../store/user.actions"
import { loadBoard, saveBoard } from "../store/board.actions"
import { MemberPreview } from "./member-preview"
import { VscChromeClose } from 'react-icons/vsc'
import GuestImg from '../assets/img/guest-img.svg'

export function ShareBoard({ onToggleShareModal }) {

    const dispatch = useDispatch()
    const users = useSelector(state => state.userModule.users)
    const board = useSelector(state => state.boardModule.board)
    const [txt, setTxt] = useState('')
    const [isSearchOpen, setIsSearchOpen] = useState(false)

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

    const addUserToBoard = (user) => {
        const selectedUser = board.members.find(member => member._id === user._id)
        if (selectedUser) {
            board.members = board.members.filter(currUser => currUser._id !== user._id)
        } else {
            board.members.push(user)
        }
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

    return <div className="share-board-container" onClick={onToggleShareModal}>
        <section className="share-board-modal" onClick={onStopPropagation}>
            <header className='share-board-header flex justify-between'>
                <div>Share board</div>
                <span onClick={onToggleShareModal}>
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
                    <li key={utilService.makeId(5)} className='flex align-center'
                        onClick={() => addUserToBoard(user)}>

                        <section className="member-avatar" title={`${user.fullname}`}>
                            <img src={user.imgUrl ? user.imgUrl : GuestImg}
                                alt="upload an image" className="member-avatar-img" />
                        </section>
                        <pre>
                            <p>{user.fullname}</p>
                            <p>@{user.username}</p>
                        </pre>
                        <span></span>
                    </li>))}
            </ul>}
            <section className='board-list-container flex column justify-between'>
                {board.members.map(member =>
                    <MemberPreview
                        members={board.members}
                        key={member._id}
                        memberId={member._id}
                        infoReq={'boardList'}
                        addUserToBoard={addUserToBoard}
                    />)}
            </section>
        </section>
    </div>
}