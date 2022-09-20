import { BsSearch } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"

export const DefaultBoardMenuModal = ({ setModalState, board, toggleMenuModal }) => {


    return (
        <>

            <header className="menu-modal-header ">
                <span></span>
                <h3 className="align-center">
                    Menu
                </h3>
                <span onClick={toggleMenuModal}>
                    <IoMdClose />
                </span>
            </header>
            <hr />
            <div onClick={() => setModalState('background-change')} className="board-menu-nav-btn">
                <div className='menu-background-display' style={board.style}></div>
                <span>
                    Change background
                </span>
            </div>
            <div onClick={() => setModalState('filter-cards')} className="board-menu-nav-btn">
                <span className='icon-container'>
                    <BsSearch />
                </span>
                <span>
                    Filter cards
                </span>
            </div>
        </>
    )
}