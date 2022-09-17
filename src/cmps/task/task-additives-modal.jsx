import { LabelPicker } from "../label-picker"

export const TaskAdditivesModal = ({ onSaveTask, task, toggleModal, type }) => {

    const renderModalByType = () => {
        switch (type) {
            case 'label-picker':
                return (
                    < LabelPicker
                        task={task}
                        onSaveTask={onSaveTask}
                        toggleModal={toggleModal} />
                )
        }
    }

    return (
        <section className="additives-modal-container">
            {renderModalByType()}
        </section>
    )
}