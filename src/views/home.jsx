import { NavLink } from "react-router-dom"

export function Home(){
    return <section className="home-container">
        <p>Logo</p>
        <header>
            <NavLink to="/login">Login</NavLink>
        </header>
    </section>
}