// import DateFnsUtils from '@date-io/date-fns';
import { VscChromeClose } from 'react-icons/vsc';
// import {
//     DatePicker,
//     TimePicker,
//     DateTimePicker,
//     MuiPickersUtilsProvider,
// } from '@material-ui/pickers';
import { useState } from 'react';




export const DatePickerModal = ({ task, toggleModal, onSaveTask }) => {

    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <section>
            <section className="add-features-modal">
                <header className='edit-label-header'>
                    <span></span>
                    <div>Dates</div>
                    <span onClick={toggleModal}>
                        < VscChromeClose />
                    </span>
                </header>
                <hr />

                {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker value={selectedDate} onChange={handleDateChange} />
                    <TimePicker value={selectedDate} onChange={handleDateChange} />
                    <DateTimePicker value={selectedDate} onChange={handleDateChange} />
                </MuiPickersUtilsProvider> */}


                <button  >Save date</button>
            </section>
        </section>
    )
}