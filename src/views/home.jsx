
import React from "react"
import { useDispatch } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { SiTrello } from 'react-icons/si'
import { onSignUp } from '../store/user.actions'
import HeroImg from '../assets/img/home-hero.png'
import boardExample from '../assets/img/boardExample.png'
import GuestImg from '../assets/img/guest-img.svg'


export function Home() {

    const users = useSelector(state => state.userModule.users)
    const user = useSelector(state => state.userModule.user)

    const navigate = useNavigate()
    const dispatch = useDispatch()



    const onStartDemo = () => {
        if (user) {
            navigate('/workspace')
            return
        }
        const demoUser = users.find(user => user.username === 'demo')
        console.log('demoUser:', demoUser)
        if (demoUser) {
            navigate('/workspace')
        } else {
            dispatch(onSignUp({ username: 'demo', password: 'demo', fullname: 'demo', imgUrl: GuestImg }))
                .then(navigate('/workspace'))
        }

    }

    return <section className="home-container">
        <header className="home-header-container flex align-center">
            <span className="home-logo flex align-center" ><SiTrello className="jello-logo" /><h1 className="jello-logo-text">Jello</h1></span>
            <span></span>
            <NavLink to="/login" className="home-login" demoClicked={onStartDemo}>Log in</NavLink>
            <NavLink to="/signup" className="home-signup flex align-center" demoClicked={onStartDemo}>Get Jello for free</NavLink>
        </header>
        <main className="hero-container">
            <div className="hero-flex-container">
                <section className="hero-content flex column">
                    <h1>Jello, Team collaboration<br /> made easy</h1>
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
            <hr />
            <section className="board-example-container flex column">
                <section className="board-example-txt">
                    <h1>It's more than work. It's a way of working together.</h1>
                    <p>
                        Start with a Trello board, lists, and cards. Customize and expand with more features as your teamwork grows.<br />
                        Manage projects, organize tasks, and build team spirit—all in one place.
                    </p>
                </section>
                <img className="board-example-img" src={boardExample} alt="" />
            </section>
        </main>
        <footer className="home-footer-container">
            <span className="home-logo-footer flex align-center" >
                <SiTrello className="jello-logo" />
                <h1 className="jello-logo-text">Jello </h1>
            </span>
            <h1>Team collaboration, Made easy</h1>
            <hr />
        </footer>
    </section>
}