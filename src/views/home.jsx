import { NavLink } from "react-router-dom"
import { SiTrello } from 'react-icons/si'
import HeroImg from '../assets/img/home-hero.png'

export function Home() {
    return <section className="home-container">
        <header className="home-header-container flex align-center">
            <NavLink to="/workspace" className="home-logo flex align-center"><SiTrello className="jello-logo" /><h1 className="jello-logo-text">Jello</h1></NavLink>
            <NavLink to="/login" className="home-login">Log in</NavLink>
            <NavLink to="/signup" className="home-signup">Sign up</NavLink>
        </header>
        <div className="hero-container flex align-center">
            <section className="hero-content flex column justify-content">
                <h1>Jello, scheduling and team collaboration made easy</h1>
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