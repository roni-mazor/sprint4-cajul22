import { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { LoaderIcon } from "../cmps/loader-icon"
import { loadLoggedInUser } from "../store/user.actions"
import GuestImg from '../assets/img/guest-img.svg'
import { MemberPreview } from './member-preview'

export const AppHeader = ({board}) => {

    const dispatch = useDispatch()
    const member = useSelector(state => state.userModule.user)

    useEffect(() => {
        dispatch(loadLoggedInUser())        
    }, [])
    
    // if (!member) return <LoaderIcon />
    return (
        <header className={board ? 'app-header board' : 'app-header'}>
            <Link to="/workspace" className="header-logo flex align-center">
                <img src="https://a.trellocdn.com/prgb/dist/images/header-logo-spirit.d947df93bc055849898e.gif" alt="" />
            </Link>
            {/* <Link to=""> */}
                <h4 className="log-sig flex">
                    <img src={member?.imgUrl? member.imgUrl : GuestImg} alt="" title={member?.username}/>
                </h4>
            {/* </Link> */}
        </header>
    )
}