import { VscChromeClose } from 'react-icons/vsc'


export const TodoModal = ({ todo, onRemoveTodo, toggleModal, onTodoToCard }) => {

    const onStopPropagation = (ev) => {
        ev.stopPropagation()
    }
    return (
        <section className="add-features-modal"
            onClick={onStopPropagation}>
            <header className='edit-label-header todo-modal-header'>
                <span></span>
                <div >Item actions</div>
                <span onClick={toggleModal}>
                    < VscChromeClose />
                </span>
            </header>
            <hr />
            <div className='todo-actions'>
                <p className='checklist-picker-convert' onClick={(event) => onTodoToCard(event, todo.id)}>Convert to card</p>
                <p className='checklist-picker-delete' onClick={(event) => onRemoveTodo(event, todo.id)}>Delete</p>
            </div>
        </section>
    )
}