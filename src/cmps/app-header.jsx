import { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useSelector} from "react-redux"
import { LoaderIcon } from "../cmps/loader-icon"
import { SiTrello } from 'react-icons/si'
import GuestImg from '../assets/img/guest-img.svg'
import { MemberPreview } from './member-preview'

export const AppHeader = ({ board }) => {

    const member = useSelector(state => state.userModule.user)


    // if (!member) return <LoaderIcon />
    return (
        <header className={board ? 'app-header board' : 'app-header'}>
                <Link to="/workspace"  className="header-logo flex align-center" ><SiTrello className="jello-logo" /><h1 className="jello-logo-text">Jello</h1></Link>
                <span></span>
            {/* <Link to=""> */}
            <h4 className="log-sig flex align-center">
                <img src={member?.imgUrl ? member.imgUrl : GuestImg} alt="" title={member?.username} />
            </h4>
            {/* </Link> */}
        </header>
    )
}