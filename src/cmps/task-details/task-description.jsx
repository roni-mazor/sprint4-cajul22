import { useEffect, useRef, useState } from 'react'
import { IoMdList } from 'react-icons/io'

export const TaskDescription = ({task}) => {

    const [focused, setFocused] = useState(false)
    const [txt, setTxt] = useState('')
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)

    const onHandleChange = ({ target }) => {
        const { value } = target
        setTxt(value)
    }

    const onSaveTxt = () => {

    }

    const onCancel = () => {
        setTxt('')
    }

    // console.log('txt:', txt)
    return (
        <section className="description-container">
            <div className="description-title">
                <span> <IoMdList /></span>   <h3>Description</h3>
            </div>
            <textarea onFocus={onFocus} onBlur={onBlur} onChange={onHandleChange}
                className='simple-txtarea description-txtarea' cols="60" rows="2"
                placeholder='Add more detailed description...'
                value={task.description}></textarea>
            {focused && <div className='description-btn'>
                <button className='description-btn save'
                    onClick={onSaveTxt}>Save</button>
                <button className='description-btn cancel'
                    onClick={onCancel}>Cancel</button>
            </div>}
        </section>
    )
}