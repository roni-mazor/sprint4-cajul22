import { VscChromeClose } from "react-icons/vsc"


export const GroupActions = ({ toggleModal, onRemoveGroup }) => {

    console.log('openeeed')
    return (
        <section className="add-features-modal group-actions-modal">
            <header className='edit-label-header'>
                <span></span>
                <div>Actions</div>
                <span onClick={toggleModal}>
                    < VscChromeClose />
                </span>
            </header>

            <hr />
            <button className="create-label-btn" onClick={onRemoveGroup} > Remove</button>

        </section >
    )
}