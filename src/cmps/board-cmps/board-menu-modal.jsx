import { IoMdClose, } from 'react-icons/io'


export const BoardMenuModal = ({ board, isOpen, toggleMenuModal }) => {


    const modalOpenClass = (isOpen) ? 'open' : ''
    return (
        <section className={`board-menu-modal ${modalOpenClass}`}>
            <header className="menu-modal-header ">
                <span></span>
                <h3>
                    Menu
                </h3>
                <span onClick={toggleMenuModal}>
                    <IoMdClose />
                </span>
            </header>
            <hr />
            <div className="background-change-btn">
                <div className='menu-background-display' style={{ backgroundImage: `url(${board.style}` }}></div>
                <span>
                    Change background
                </span>
            </div>
        </section>
    )
}