import DateFnsUtils from '@date-io/date-fns';
import { VscChromeClose } from 'react-icons/vsc';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { useState } from 'react';




export const DatePickerModal = ({ task, toggleModal, onSaveTask }) => {

    const [selectedDate, handleDateChange] = useState(task?.dueDate?.time || new Date())


    const onSaveDate = () => {
        task.dueDate = {
            time: selectedDate.getTime() + ((new Date()).getHours() - 12) * 60 * 60 * 1000,
            isDone: false
        }
        onSaveTask(task)
    }


    const onRemoveDate = () => {
        delete task.dueDate
        // the second option is to not render if the object is empty
        // task.dueDate = {}
        onSaveTask(task)
    }

    return (
        <section >
            <section className="add-features-modal">
                <header className='edit-label-header'>
                    <span></span>
                    <div>Dates</div>
                    <span onClick={toggleModal}>
                        < VscChromeClose />
                    </span>
                </header>
                <hr />
                <div className="date-picker-container">
                    <MuiPickersUtilsProvider style={{ width: "304px" }} utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="static"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>


                <button onClick={onSaveDate} className="date-btn" >Save</button>
                <button onClick={onRemoveDate} className="date-btn remove-btn" >Remove</button>
            </section>
        </section >
    )
}