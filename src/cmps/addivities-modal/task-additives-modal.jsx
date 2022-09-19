import { LabelPicker } from "../addivities-modal/label-picker"
import { TodoModal } from "../task-details/todo.modal"
import { AttachmentPicker } from "./attachment-picker"
import { Checklist } from "./checklist-picker"
import { DatePickerModal } from "./date-picker"
import { GroupActions } from "./group-actions"
import { MemberPicker } from "./member-picker"

export const TaskAdditivesModal = ({ onRemoveGroup, onSaveTask, task, toggleModal, type }) => {

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
            case 'attachment':
                return (
                    <AttachmentPicker
                        task={task}
                        onSaveTask={onSaveTask}
                        toggleModal={toggleModal} />
                )
            case 'group-actions':
                return (
                    <GroupActions
                        onRemoveGroup={onRemoveGroup}
                        toggleModal={toggleModal} />
                )
            case 'check-list':
                return (
                    <Checklist
                        task={task}
                        onSaveTask={onSaveTask}
                        toggleModal={toggleModal} />
                )
            case 'date-picker':
                return (
                    <DatePickerModal
                        task={task}
                        onSaveTask={onSaveTask}
                        toggleModal={toggleModal} />
                )
            case 'todo':
                return (
                    <TodoModal
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