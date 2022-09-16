
import { Link } from "react-router-dom"
import { SiTrello } from 'react-icons/si'
import { BsPersonCircle } from 'react-icons/bs'

export const AppHeader = ({ board }) => {


    return (
        <header className={board ? 'app-header board' : 'app-header'}>
            <Link to="/workspace">
                <h3 className="logo"><span><SiTrello /></span> Jello</h3>
            </Link>
            <Link to="/login">
                <h4 className="log-sig">
                    <BsPersonCircle />
                </h4>
            </Link>

        </header>
    )
}