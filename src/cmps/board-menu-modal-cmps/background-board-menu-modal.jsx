import { BsSearch } from "react-icons/bs"
import { FiChevronLeft } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"

export const BackgroundBoardMenuModal = ({ setModalState, board, toggleMenuModal }) => {


    return (
        <>

            <header className="menu-modal-header ">
                <span onClick={() => setModalState('default')}><FiChevronLeft /></span>
                <h3 className="align-center">
                    Background
                </h3>
                <span onClick={toggleMenuModal}>
                    <IoMdClose />
                </span>
            </header>
            <hr />

        </>
    )
}