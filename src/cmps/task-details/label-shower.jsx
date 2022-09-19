import { useSelector } from "react-redux"
import { BsPlusLg } from 'react-icons/bs'

export const LabelShower = ({ labelIds, toggleModal }) => {
    const labels = useSelector(state => state.boardModule.board.labels)
    return (
        <section className="label-shower">
            <h3>Labels</h3>
            <section className="labels-shower-container">
                {labelIds.map((id) => {
                    const label = labels.find(l => l.id === id)
                    if (!label) return
                    return <button key={id} className="label-shower-btn" onClick={() => { toggleModal('label-picker') }}
                        style={{ backgroundColor: label.color }} >
                        {label.title}
                    </button>
                })}
                <button onClick={() => { toggleModal('label-picker') }} className="add-label-btn"><BsPlusLg /></button>
            </section>
        </section>
    )
}

//need to think of a good way to check it maybe the position thing can be used to alter the opening statement