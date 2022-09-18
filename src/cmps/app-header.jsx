import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { loadLoggedInUser } from "../store/user.actions"
import { userService } from '../services/user.service'
import { BsPersonCircle } from 'react-icons/bs'
import { MemberPreview } from './member-preview'

export const AppHeader = ({ board }) => {

    const dispatch = useDispatch()
    const member = useSelector(state => state.userModule.user)

    useEffect(() => {
        // dispatch(loadLoggedInUser())
        console.log('isLoggedIn.imgUrl:', member.imgUrl)

    }, [])

    // console.log(isLoggedIn)
    return (
        <header className={board ? 'app-header board' : 'app-header'}>
            <Link to="/workspace" className="header-logo flex align-center">
                <img src="https://a.trellocdn.com/prgb/dist/images/header-logo-spirit.d947df93bc055849898e.gif" alt="" />
            </Link>
            {/* <Link to=""> */}
                <h4 className="log-sig">
                    {(!member?.imgUrl) && <BsPersonCircle />}
                    {member?.imgUrl && <MemberPreview member={member}/>}
                </h4>
            {/* </Link> */}
        </header>
    )
}