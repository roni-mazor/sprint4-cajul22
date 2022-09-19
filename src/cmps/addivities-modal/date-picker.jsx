// import DateFnsUtils from '@date-io/date-fns';
import { VscChromeClose } from 'react-icons/vsc';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker,
// } from '@material-ui/pickers';
import { useState } from 'react';




export const DatePickerModal = ({ task, toggleModal, onSaveTask }) => {

    const [selectedDate, handleDateChange] = useState(new Date());

    const dateFormatter = str => {
        return str
    }
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
{/* 
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        autoOk={true}
                        showTodayButton={true}
                        value={selectedDate}
                        format="YYYY-MM-DD"
                        inputValue={inputValue}
                        onChange={onDateChange}
                        rifmFormatter={dateFormatter}
                    />
                </MuiPickersUtilsProvider> */}


                <button  >Save date</button>
            </section>
        </section>
    )
}