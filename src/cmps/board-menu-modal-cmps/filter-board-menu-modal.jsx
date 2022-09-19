import { Checkbox } from "@mui/material"
import { BsSearch } from "react-icons/bs"
import { FiChevronLeft } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"

export const FilterBoardMenuModal = ({ setModalState, board, toggleMenuModal }) => {
    const labels = board.labels

    return (
        <>

            <header className="menu-modal-header ">
                <span onClick={() => setModalState('default')}><FiChevronLeft /></span>
                <h3 className="align-center">
                    Filter
                </h3>
                <span onClick={toggleMenuModal}>
                    <IoMdClose />
                </span>
            </header>
            <hr />

            <hr />
            <section className="label-filter-container">
                <h3>Labels</h3>
                <ul ul className="labels-container">
                    {labels.map(label => (
                        <li className='label-container'>
                            <label >
                                <Checkbox onChange={() => { }}
                                    // checked={(filterBy.labels.includes(label.id))}
                                    name={label.id} size="small" style={{ padding: '5px 9px' }} />
                                <div className='label-display-btn' style={{ backgroundColor: label.color }}>
                                    <span>{label.title}</span>
                                </div>
                            </label>
                        </li>
                    ))}
                </ul>

            </section>

        </>
    )
}