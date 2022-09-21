import DateFnsUtils from '@date-io/date-fns';
import { VscChromeClose } from 'react-icons/vsc';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { useState } from 'react';




export const DatePickerModal = ({ task, toggleModal, onSaveTask }) => {

    const [selectedDate, handleDateChange] = useState(new Date());

    const dateFormatter = str => {
        return str
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
                            // value={selectedDate}
                            onChange={console.log}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>


                <button  >Save date</button>
            </section>
        </section >
    )
}