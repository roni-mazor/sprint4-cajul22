import { useState } from "react"
import { BsPlusLg } from 'react-icons/bs'
import { VscChromeClose } from 'react-icons/vsc'



export const TxtCompose = ({ type, returnTxt }) => {
    const [Txt, setTxt] = useState('')
    const [composeMode, setComposeMode] = useState(false)

    const toggleModal = () => {
        setComposeMode(prevMode => !prevMode)
    }

    const onReturnTxt = () => {
        returnTxt(Txt)
        setTxt('')
        setComposeMode(false)
    }

    const handleTxtChange = ({ target }) => {
        setTxt(target.value)
    }
    return (
        <>
            {(composeMode) ?
                <div className="add-task-modal">
                    <textarea name="" placeholder={"enter a title for this " + type}
                        value={Txt}
                        onChange={handleTxtChange}></textarea>
                    <section className="compose-btns-container">
                        <button className="add-task-btn" onClick={onReturnTxt}>Add {type}</button>
                        <button className="close-compose-btn" onClick={toggleModal}><VscChromeClose /></button>
                    </section>
                </div>
                :
                <section className="task-compose">
                    <div onClick={toggleModal} className="compose-btn">
                        <span className="plus-sign" ><BsPlusLg /></span><span>Add a {type}</span>
                    </div>
                </section>}
        </>
    )
}