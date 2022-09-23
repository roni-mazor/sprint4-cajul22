
import React, { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { SiTrello } from 'react-icons/si'
import { onSignUp } from '../store/user.actions'
import HeroImg from '../assets/img/home-hero.png'
import GuestImg from '../assets/img/guest-img.svg'
import { useDispatch } from "react-redux"
import { loadBoards } from "../store/board.actions"


export function Home() {

    const users = useSelector(state => state.userModule.users)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    

    const onStartDemo = () => {
        const demoUser = users.find(user => user.username === 'demo')
        if (demoUser) {
            navigate('/workspace')
        } else {
            dispatch(onSignUp({ username: 'demo', password: 'demo', fullname: 'demo', imgUrl: GuestImg }))
                .then(navigate('/workspace'))
        }

    }

    return <section className="home-container">
        <header className="home-header-container flex align-center">
            <NavLink to="/workspace" className="home-logo flex align-center" ><SiTrello className="jello-logo" /><h1 className="jello-logo-text">Jello</h1></NavLink>
            <span></span>
            <NavLink to="/login" className="home-login" demoClicked={onStartDemo}>Log in</NavLink>
            <NavLink to="/signup" className="home-signup flex align-center" demoClicked={onStartDemo}>Get Jello for free</NavLink>
        </header>
        <div className="hero-container flex align-center">
            <section className="hero-content flex column">
                <h1>Jello, scheduling and team collaboration<br /> made easy</h1>
                <p>
                    Collaborate, manage projects, and reach new productivity peaks.<br />
                    Managing projects, following timelines,<br />
                    Work together in the office or from home.<br />
                    Take your team to the next level with Jello
                </p>
                <NavLink to="/workspace" onClick={onStartDemo} className="hero-demo-btn flex align-center">Start Demo</NavLink>
            </section>
            <img className="hero-img" src={HeroImg} alt="" />
        </div>
    </section>
}