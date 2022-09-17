import { LabelPicker } from "../label-picker"
import { MemberPicker } from "../member-picker"

export const TaskAdditivesModal = ({ onSaveTask, task, toggleModal, type}) => {

    const renderModalByType = () => {
        switch (type) {
            case 'label-picker':
                return (
                    < LabelPicker
                        task={task}
                        onSaveTask={onSaveTask}
                        toggleModal={toggleModal} />
                )
            case 'members':
                return (
                    
                    < MemberPicker
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