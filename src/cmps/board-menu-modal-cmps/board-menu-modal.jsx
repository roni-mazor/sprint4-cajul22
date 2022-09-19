import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { IoMdClose, } from 'react-icons/io'
import { BackgroundBoardMenuModal } from './background-board-menu-modal'
import { DefaultBoardMenuModal } from './default-board-menu-modal'
import { FilterBoardMenuModal } from './filter-board-menu-modal'


export const BoardMenuModal = ({ board, isOpen, toggleMenuModal, setFilterBy, filterBy }) => {

    const [modalState, setModalState] = useState('default')


    const modalOpenClass = (isOpen) ? 'open' : ''

    const renderModalState = () => {
        switch (modalState) {
            case 'default':
                return (<DefaultBoardMenuModal
                    setModalState={setModalState}
                    board={board} toggleMenuModal={toggleMenuModal} />)
            case 'background-change':
                return (<BackgroundBoardMenuModal
                    setModalState={setModalState}
                    board={board} toggleMenuModal={toggleMenuModal} />)
            case 'filter-cards':
                return (<FilterBoardMenuModal
                    filterBy={filterBy}
                    setFilterBy={setFilterBy}
                    setModalState={setModalState}
                    board={board} toggleMenuModal={toggleMenuModal} />)
        }
    }
    return (
        <section className={`board-menu-modal ${modalOpenClass}`}>
            {renderModalState()}
        </section>
    )
}