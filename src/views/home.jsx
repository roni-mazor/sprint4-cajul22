import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { userService } from "../services/user.service"
import { useSelector, useDispatch } from "react-redux"
import { SiTrello } from 'react-icons/si'
import HeroImg from '../assets/img/home-hero.png'
import { loadUsers } from '../store/user.actions'

export function Home() {
    
    // const [isLoggedIn, setIsLoggedIn] = useState(userService.getLoggedinUser)
    const loggedIn = useSelector(state => state.userModule.user)
    const users = useSelector(state => state.userModule.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!loggedIn) userService.createUsers()               
        // navigate('/workspace')
        // dispatch(loadLoggedInUser())             
    }, [])
    
    return <section className="home-container">
        <header className="home-header-container flex align-center">
            <NavLink to="/workspace" className="home-logo flex align-center"><SiTrello className="jello-logo" /><h1 className="jello-logo-text">Jello</h1></NavLink>
            <span></span>
            <NavLink to="/login" className="home-login">Log in</NavLink>
            <NavLink to="/signup" className="home-signup flex align-center">Get Jello for free</NavLink>
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
                <a href="/workspace" className="hero-demo-btn flex align-center">Start Demo</a>
            </section>
            <img className="hero-img" src={HeroImg} alt="" />
        </div>
    </section>
}