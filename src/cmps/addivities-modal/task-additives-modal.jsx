import { LabelPicker } from "../addivities-modal/label-picker"
import { TodoModal } from "../task-details/todo.modal"
import { AttachmentPicker } from "./attachment-picker"
import { Checklist } from "./checklist-picker"
import { CoverPickerModal } from "./cover-picker"
import { DatePickerModal } from "./date-picker"
import { GroupActions } from "./group-actions"
import { MemberPicker } from "./member-picker"

export const TaskAdditivesModal = ({ onRemoveGroup, onSaveTask, task, toggleModal, modalInfo, todo, onRemoveTodo, onTodoToCard }) => {
    console.log('todo:', todo)
    const renderModalByType = () => {
        switch (modalInfo.type) {
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
            case 'checklist-picker':
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
            case 'cover-picker':
                return (
                    <CoverPickerModal
                        task={task}
                        onSaveTask={onSaveTask}
                        toggleModal={toggleModal} />
                )
            case 'todo':
                return (
                    <TodoModal
                        task={task}
                        todo={todo}
                        onRemoveTodo={onRemoveTodo}
                        onTodoToCard={onTodoToCard}
                        onSaveTask={onSaveTask}
                        toggleModal={toggleModal} />
                )
        }
    }

    const getModalPos = () => {
        const { type, posDetails } = modalInfo
        if (type === 'todo' || type === 'checklist-picker') {
            // console.log(type)
            return { top: `${posDetails.top + posDetails.height}px`, left: `${posDetails.left}px` }
        } else if (type === 'cover-picker' || type === 'label-picker' || type === 'date-picker' || type === 'members') {
            return { top: '51px', left: `${posDetails.left}px` }
            // maybe the members should be in this position?
        } else if (type === 'group-actions') {
            return { top: `${posDetails.top}px`, left: `${posDetails.left - 160}px` }
        } else if (type === 'attachment') {

            return { top: `${posDetails.top-240}px`, left: `${posDetails.left - 134}px` }
        }
    }

    return (
        <section style={getModalPos()} className="additives-modal-container">
            {renderModalByType()}
        </section>
    )
}