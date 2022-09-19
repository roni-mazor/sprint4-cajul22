import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadUsers } from "../store/user.actions"
import { MemberPreview } from "./member-preview"
import { VscChromeClose } from 'react-icons/vsc'

export function ShareBoard({ onToggleIsShareBoardModal }) {

    const dispatch = useDispatch()
    const users = useSelector(state => state.userModule.users)

    useEffect(() => {
        console.log('board:', users)
        dispatch(loadUsers())
    }, [])


    const onStopPropagation = (ev) => {
        ev.stopPropagation()
    }


    return <div className="share-board-container" onClick={onToggleIsShareBoardModal}>
        <section className="share-board-modal" onClick={onStopPropagation}>
            <header className='share-board-header flex justify-between'>
                <div>Share Board</div>
                <span onClick={onToggleIsShareBoardModal}>
                    < VscChromeClose />
                </span>
            </header>
            <div className='member-search-container flex'>
                <input className="add-member-input-container"
                    type="text" placeholder='Email address or name'
                    /*onChange={({ target: { value } }) => { setFilterBy(value) }}
                    value={filterBy}*/ />
                <button>Share</button>
            </div>
            <section className='user-list-container'>
                {users?.map(member => <MemberPreview member={member} />)}
            </section>
        </section>
    </div>
}