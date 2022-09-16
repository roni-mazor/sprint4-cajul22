
import { Link } from "react-router-dom"

export const AppHeader = () => {
    return (
        <header className="app-header">
            <Link to="/workspace">
                <h3 className="logo">Jello</h3>
            </Link>
            <Link to="/login">
                <h4 className="log-sig">LOGIN/SIGNUP</h4>
            </Link>
        </header>
    )
}