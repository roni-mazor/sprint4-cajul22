import { Checkbox } from "@mui/material"
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import { FaRegUserCircle } from "react-icons/fa"
import { FiChevronLeft } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"
import { MemberPreview } from "../member-preview"


export const FilterBoardMenuModal = ({ setModalState, board, toggleMenuModal, setFilterBy, filterBy }) => {

    const getLabels = () => {
        const l = board.groups.reduce((labelsInUse, group) => {
            group.tasks.forEach(task => {
                task.labelIds.forEach(id => {
                    if (!labelsInUse.includes(id)) labelsInUse.push(id)
                })
            })
            return labelsInUse
        }, [])
        return l

    }
    const labelsinUse = getLabels()
    const labels = board.labels.filter(label => labelsinUse.includes(label.id))

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

    const togglesShowNoMembers = () => {
        setFilterBy(prevState => ({ ...prevState, showNoMembers: !prevState.showNoMembers }))
    }
    const filterByDueDone = (val) => {
        const isDone = (filterBy.isDone === val) ? null : val
        setFilterBy(prevState => ({ ...prevState, isDone }))
    }
    const filterByDueTime = (min, max) => {
        if (min === filterBy.time?.min && max === filterBy.time?.max) setFilterBy(prevState => ({ ...prevState, time: null }))
        else setFilterBy(prevState => ({ ...prevState, time: { min, max } }))
    }

    getLabels()
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
                            <li key='no-members-btn' className='label-container'>
                                <label >
                                    <Checkbox
                                        sx={{ color: 'lightgray' }}
                                        checked={(filterBy.showNoMembers)}
                                        size="small" style={{ padding: '5px 9px' }}
                                        onChange={togglesShowNoMembers}
                                    />
                                    <span className='member-container flex align-center'>
                                        <span className="no-member-avatar"><AiOutlineUser /></span>
                                        <p>No members</p>
                                    </span>
                                </label>
                            </li>
                            {board.members.map(member => (
                                <li key={member._id} className='label-container'>
                                    <label >
                                        <Checkbox
                                            sx={{ color: 'lightgray' }}
                                            checked={(filterBy.members.includes(member._id))}
                                            size="small" style={{ padding: '5px 9px' }}
                                            onChange={() => handleMemberCheck(member._id)}
                                        />
                                        <span className='member-container flex align-center' >
                                            <MemberPreview infoReq={'boardHeader'} memberId={member._id} members={board.members} />
                                            <p>{member.username}</p>
                                            <p>{`(${member.fullname})`}</p>
                                        </span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="labels-container">
                        <h4>Due date</h4>
                        <ul className="labels-container">
                            <li className="label-container">
                                <label >
                                    <Checkbox
                                        sx={{ color: 'lightgray' }}
                                        checked={(filterBy.time?.max === 1)}
                                        size="small" style={{ padding: '5px 9px' }}
                                        onChange={() => filterByDueTime(-Infinity, 1)}
                                    />
                                    <span className="date-filter-container">
                                        <span style={{ backgroundColor: 'rgb(235, 90, 70)', color: 'white' }} className="clock-icon"><AiOutlineClockCircle /></span>
                                        Overdue
                                    </span>
                                </label>
                            </li>
                            <li className="label-container">
                                <label >
                                    <Checkbox
                                        sx={{ color: 'lightgray' }}
                                        checked={(filterBy.time?.min === 1 && filterBy.time?.max === 24 * 60 * 60 * 1000)}
                                        size="small" style={{ padding: '5px 9px' }}
                                        onChange={() => filterByDueTime(1, 24 * 60 * 60 * 1000)}
                                    />
                                    <span className="date-filter-container">
                                        <span style={{ backgroundColor: 'rgb(242, 214, 0)', color: 'white' }} className="clock-icon"><AiOutlineClockCircle /></span>
                                        Due in 24 hours
                                    </span>
                                </label>
                            </li>
                            <li className="label-container">

                                <label >
                                    <Checkbox
                                        sx={{ color: 'lightgray' }}
                                        checked={(filterBy.time?.min === 1 && filterBy.time?.max === 24 * 60 * 60 * 1000 * 7)}
                                        size="small" style={{ padding: '5px 9px' }}
                                        onChange={() => filterByDueTime(1, 24 * 60 * 60 * 1000 * 7)}
                                    />
                                    <span className="date-filter-container">
                                        <span style={{ backgroundColor: 'rgb(212 214 221)', color: '#5e6c84' }} className="clock-icon"><AiOutlineClockCircle /></span>
                                        Due in the next week
                                    </span>
                                </label>
                                <li className="label-container">

                                </li>
                                <label >
                                    <Checkbox
                                        sx={{ color: 'lightgray' }}
                                        checked={(filterBy.isDone === false)}
                                        size="small" style={{ padding: '5px 9px' }}
                                        onChange={() => filterByDueDone(false)}
                                    />
                                    Not marked as complete
                                </label>
                            </li>
                            <li className="label-container">
                                <label >
                                    <Checkbox
                                        sx={{ color: 'lightgray' }}
                                        checked={(filterBy.isDone === true)}
                                        size="small" style={{ padding: '5px 9px' }}
                                        onChange={() => filterByDueDone(true)}
                                    />
                                    Marked as complete
                                </label>
                            </li>
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