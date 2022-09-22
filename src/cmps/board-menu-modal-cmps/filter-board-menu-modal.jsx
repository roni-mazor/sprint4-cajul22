import { Checkbox } from "@mui/material"
import { BsSearch } from "react-icons/bs"
import { FiChevronLeft } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"
import { MemberPreview } from "../member-preview"

export const FilterBoardMenuModal = ({ setModalState, board, toggleMenuModal, setFilterBy, filterBy }) => {
    const labels = board.labels
    console.log(filterBy)

    const handleLabelCheck = (labelId) => {
        let labelIds
        if (filterBy.labelIds.includes(labelId)) labelIds = filterBy.labelIds.filter(id => id !== labelId)
        else labelIds = [...filterBy.labelIds, labelId]
        setFilterBy(prevState => ({ ...prevState, labelIds }))
    }
    const handleMemberCheck = (memberId) => {
        let members
        if (filterBy.members.includes(memberId)) members = filterBy.members.filter(id => id !== memberId)
        else members = [...filterBy.members, memberId]
        setFilterBy(prevState => ({ ...prevState, members }))
    }

    const handleTextChange = ({ target: { value } }) => {
        setFilterBy(prevState => ({ ...prevState, txt: value }))
    }


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

            <div className="filter-wrapper">
                <div >


                    <section className="labels-container">
                        <h4>keywords</h4>
                        <input className="filter-text-input"
                            type="text" placeholder='Enter a keyword...'
                            onChange={handleTextChange}
                            value={filterBy.txt} />
                        <p>Search cards, members, labels, and more.</p>
                    </section>


                    <section classname="labels-container">
                        <h4>Members</h4>
                        <ul className="labels-container">
                            {board.members.map(member => (
                                <li key={member._id} className='label-container'>
                                    <label >
                                        <Checkbox
                                            sx={{ color: 'lightgray' }}
                                            checked={(filterBy.members.includes(member._id))}
                                            size="small" style={{ padding: '5px 9px' }}
                                            onChange={() => handleMemberCheck(member._id)}
                                        />
                                        <span className='member-container flex align-center' onClick={() => console.log(member._id)}>
                                            <MemberPreview infoReq={'boardHeader'} member={member} />
                                            <p>{member.username}</p>
                                            <p>{`(${member.fullname})`}</p>
                                        </span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="filter-container">
                        <h4>Labels</h4>
                        <ul className="labels-container">
                            {labels.map(label => (
                                <li key={label.id} className='label-container'>
                                    <label >
                                        <Checkbox
                                            sx={{ color: 'lightgray' }}
                                            checked={(filterBy.labelIds.includes(label.id))
                                            }
                                            onChange={() => handleLabelCheck(label.id)}
                                            name={label.id} size="small" style={{ padding: '5px 9px' }} />
                                        <div className={`label-display-btn ${label.colorName}`} >
                                            <div className="color-ball-display" style={{ background: label.color }}> </div>
                                        </div>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>

        </>
    )
}