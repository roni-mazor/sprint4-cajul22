import { VscChromeClose } from 'react-icons/vsc'


export const TodoModal = ({onToggleModal}) => {
return(
    <section className="add-features-modal">
            <header className='edit-label-header'>
                <span></span>
                <div>Item actions</div>
                <span onClick={onToggleModal}>
                    < VscChromeClose />
                </span>
            </header>
            <hr />
            <h5 className='checklist-picker-title'>Title</h5>
           
        </section>
)
}