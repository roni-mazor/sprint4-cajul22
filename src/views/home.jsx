import { NavLink } from "react-router-dom"

export function Home(){
    return <section className="home-container">
        <header className="home-header-container flex align-center">
        <p className="home-logo">Logo</p>
            <NavLink to="/login" className="home-login">Log in</NavLink>
        </header>
    </section>
}