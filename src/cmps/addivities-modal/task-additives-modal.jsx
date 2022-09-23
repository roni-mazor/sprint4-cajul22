import { LabelPicker } from "../addivities-modal/label-picker"
import { TodoModal } from "../task-details/todo.modal"
import { AttachmentPicker } from "./attachment-picker"
import { Checklist } from "./checklist-picker"
import { CoverPickerModal } from "./cover-picker"
import { DatePickerModal } from "./date-picker"
import { GroupActions } from "./group-actions"
import { MemberPicker } from "./member-picker"

export const TaskAdditivesModal = ({ onRemoveGroup, onSaveTask, task, toggleModal, modalInfo, onSaveActivity, onSaveTaskAct }) => {

    const renderModalByType = () => {
        switch (modalInfo.type) {
            case 'label-picker':
                return (
                    < LabelPicker
                        task={task}
                        onSaveTask={onSaveTask}
                        onSaveActivity={onSaveActivity}
                        toggleModal={toggleModal} />
                )
            case 'members':
                return (

                    < MemberPicker
                        task={task}
                        onSaveTask={onSaveTask}
                        onSaveActivity={onSaveActivity}
                        toggleModal={toggleModal} />
                )
            case 'attachment':
                return (
                    <AttachmentPicker
                        task={task}
                        onSaveTask={onSaveTask}
                        onSaveActivity={onSaveActivity}
                        toggleModal={toggleModal} />
                )
            case 'group-actions':
                return (
                    <GroupActions
                        onRemoveGroup={onRemoveGroup}
                        onSaveActivity={onSaveActivity}
                        toggleModal={toggleModal} />
                )
            case 'check-list':
                return (
                    <Checklist
                        task={task}
                        onSaveTask={onSaveTask}
                        onSaveActivity={onSaveActivity}
                        onSaveTaskAct={onSaveTaskAct}
                        toggleModal={toggleModal} />
                )
            case 'date-picker':
                return (
                    <DatePickerModal
                        task={task}
                        onSaveTask={onSaveTask}
                        onSaveActivity={onSaveActivity}
                        toggleModal={toggleModal} />
                )
            case 'cover-picker':
                return (
                    <CoverPickerModal
                        task={task}
                        onSaveTask={onSaveTask}
                        onSaveActivity={onSaveActivity}
                        toggleModal={toggleModal} />
                )
            case 'todo':
                return (
                    <TodoModal
                        task={task}
                        onSaveTask={onSaveTask}
                        onSaveActivity={onSaveActivity}
                        toggleModal={toggleModal} />
                )
        }
    }

    const getModalPos = () => {
        const { type, posDetails, windowWidth } = modalInfo
        let left = posDetails.left
        if (type === 'todo' || type === 'check-list' || type === 'attachment') {
            if (windowWidth - posDetails.left < 304) left = windowWidth - 340
            return { top: `${posDetails.top + posDetails.height}px`, left: `${left}px` }
        } else if (type === 'cover-picker' || type === 'label-picker' || type === 'date-picker' || type === 'members') {
            if (windowWidth - posDetails.left < 304) left = windowWidth - 340
            return { top: '51px', left: `${left}px` }
        } else if (type === 'group-actions') {
            return { top: `${posDetails.top}px`, left: `${left - 160}px` }
        }

        //and another adjustment for moblie between 500 or something to allways place in the center
    }



    return (
        <section style={getModalPos()} className="additives-modal-container">
            {renderModalByType()}
        </section>
    )
}