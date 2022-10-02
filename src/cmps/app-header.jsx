import { useState } from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { SiTrello } from 'react-icons/si'
import { TbBell } from 'react-icons/tb'
import GuestImg from '../assets/img/guest-img.svg'

export const AppHeader = ({ board }) => {

    const member = useSelector(state => state.userModule.user)
    let [isModalOpen, setIsModalOpen] = useState(false)

    const onToggleModal = () => {
        setIsModalOpen(!isModalOpen)
        console.log(isModalOpen)
    }

    // if (!member) return <LoaderIcon />
    return (
        <header className={board ? 'app-header board' : 'app-header'}
            style={board?.color}>
            <Link to="/workspace" className="header-logo flex align-center" ><SiTrello className="jello-logo" /><h1 className="jello-logo-text">Jello</h1></Link>
            <span></span>
            {/* <Link to=""> */}
            <h4 className="log-sig flex align-center">
                {/* <p className="notification-btn flex align-center" onClick={onToggleModal}><TbBell /></p> */}
                <img src={member?.imgUrl ? member.imgUrl : GuestImg} alt="" title={member?.username} />
            </h4>
            {/* </Link> */}
            {/*isModalOpen && <section className='notification-container'>
                <section className='modal-headline'>
                    <span></span>
                    <p>Notifications</p>
                    <span></span>
                </section>
                <hr />
    </section>*/}

        </header>
    )
}