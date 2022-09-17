import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { userService } from '../services/user.service'
import { SiTrello } from 'react-icons/si'
import { BsPersonCircle } from 'react-icons/bs'

export const AppHeader = ({ board }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(userService.getLoggedinUser)

    console.log(isLoggedIn)
    return (
        <header className="app-header flex align-center justify-between"/*{board ? 'app-header board' : 'app-header'}*/>
            <Link to="/workspace" className="header-logo flex align-center">
                <img src="https://a.trellocdn.com/prgb/dist/images/header-logo-spirit.d947df93bc055849898e.gif" alt="" />
            </Link>
            <Link to="">
                <h4 className="log-sig">
                    {!isLoggedIn?.imgUrl && <BsPersonCircle />}
                    {isLoggedIn?.imgUrl && <img src={isLoggedIn.imgUrl} alt="" />}
                </h4>
            </Link>
        </header>
    )
}