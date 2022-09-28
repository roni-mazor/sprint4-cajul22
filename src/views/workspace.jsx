import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { AppHeader } from "../cmps/app-header"
import { LoaderIcon } from "../cmps/loader-icon"
import { BoardList } from "../cmps/board-list"
import { updateIsStarred, createBoard, loadBoards } from "../store/board.actions"
import { MdOutlineClose } from "react-icons/md"
import { utilService } from "../services/util.service"
import boardPreview from "../assets/img/board-preview.svg"
import { boardService } from "../services/board.service"

export const Workspace = () => {

    const boards = useSelector(state => state.boardModule.boards)
    const user = useSelector(state => state.userModule.user)
    // const member = useSelector(state => state.userModule.user)
    const [isCreateBoardModal, setIsCreateBoardModal] = useState({ isOpen: false, posDetails: null, windowWidth: null })
    const [newBoardBackground, setNewBoardBackground] = useState()
    const [txt, setTxt] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const backgroundColors = ['rgb(0, 121, 191)', 'rgb(210, 144, 52)', 'rgb(81, 152, 57)', 'rgb(176, 70, 50)', 'rgb(137, 96, 158)', 'rgb(205, 90, 145)']
    const backgroundImgs = ["1663720409027-5f7b019b0990", "1663787652609-57b525eb6ee6", "1663580395169-914a11606e42", "1663583513676-9f6361cd859d"]

    useEffect(() => {
        setNewBoardBackground({ backgroundImage: 'url("https://images.unsplash.com/photo-1663787652609-57b525eb6ee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNjYzOTU5NDEy&ixlib=rb-1.2.1&q=80&w=400")' })
        dispatch(loadBoards())
    }, [])
    // const board = useSelector(state => state.boardModule.board)

    const onCreateNewBoard = async (ev) => {
        if (ev) ev.preventDefault()
        const boardInfo = {
            title: txt,
            style: newBoardBackground,
            _id: utilService.makeId(5),
            user
        }
        // console.log('CREATING BOARD:', boardInfo)
        // dispatch(createBoard(boardInfo))
        const boardId = await boardService.createNewBoard(boardInfo)
        setTimeout(() => { navigate(`/board/${boardId}`) }, 200)
    }

    const onSetBackground = ({ target: { style } }) => {
        const { backgroundImage, backgroundColor } = style
        setNewBoardBackground({ backgroundColor: backgroundColor })
        if (!backgroundImage) {
        } else {
            setNewBoardBackground({ backgroundImage: backgroundImage })
        }
    }

    const onHandleChange = ({ target: { value } }) => {
        setTxt(value)
    }


    const toggleNewBoardModal = (ev) => {
        const isOpen = !isCreateBoardModal.isOpen
        // setIsCreateBoardModal(!isCreateBoardModal)
        console.log('ev:', ev)

        const posDetails = ev.target.getBoundingClientRect()
        const windowWidth = window.innerWidth
        console.log({ posDetails, windowWidth })
        setIsCreateBoardModal({ isOpen, posDetails, windowWidth })
    }

    const onToggleIsStarred = (boardId) => {
        console.log('boardId toggleIsStarred:', boardId)
        if (!boardId) return

        const board = boards.find(board => boardId === board._id)
        console.log('board from toggleIsStarred:', board)

        board.isStarred = !board.isStarred
        dispatch(updateIsStarred(board))

    }

    console.log('isCreateBoardModal location:', isCreateBoardModal.posDetails)

    // console.log('member:', member)
    if (!boards) return <LoaderIcon />
    return (
        <React.Fragment>
            <AppHeader />
            {isCreateBoardModal.isOpen && <section className="create-board-modal" style={{ left: "276px", top: "336.5px" }}>
                <header className="modal-header flex">
                    <div className="modal-title">Create board</div>
                    <span></span>
                    <MdOutlineClose className="close-modal" onClick={toggleNewBoardModal} />
                </header>
                <main className="modal-main-body">
                    <div className="modal-background-choice flex align-center" style={newBoardBackground}>
                        <img src={boardPreview} alt="" />
                    </div>
                    <div className="background-gallery">
                        <label className="background-gallery-title">Background</label>
                        <ul className="photo-gallery-container flex justify-between clean-list">
                            {backgroundImgs.map(imgNum => <li key={imgNum}>
                                <button className="new-board-photo btn" onClick={onSetBackground}
                                    style={{ backgroundImage: `url("https://images.unsplash.com/photo-${imgNum}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjYzOTU5NDEy&ixlib=rb-1.2.1&q=80&w=2048")` }}
                                ></button>
                                <span></span>
                            </li>)}
                        </ul>
                        <ul className="color-gallery-container flex justify-between clean-list">
                            {backgroundColors.map(color => <li key={color}>
                                <button className="new-board-color btn" onClick={onSetBackground}
                                    style={{ backgroundColor: color }}
                                ></button>
                                <span></span>
                            </li>)}
                        </ul>
                    </div>
                    <form onSubmit={onCreateNewBoard}>
                        <label className="new-board-title-container">
                            <div>
                                Board title
                                <span>*</span>
                            </div>
                            <input className="new-board-title"
                                value={txt}
                                type="text"
                                onChange={onHandleChange} required />
                        </label>
                        <button className={(txt !== '') ? "create-board" : "create-board greyed"} disabled={(txt !== '') ? false : true} >Create</button>
                    </form>
                </main>
            </section>}
            <div className="workspace-container">
                <section className="workspace-banner">
                    <div className="workspace-img" ></div>
                    <h2>Welcome to Your Workspace</h2>
                </section>
                <hr className="horizontal-rule" />
                <div className="boards-container">
                    <section className="workspace">
                        <BoardList boards={boards}
                            toggleCreateBoardModal={toggleNewBoardModal}
                            onToggleIsStarred={onToggleIsStarred} />
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}