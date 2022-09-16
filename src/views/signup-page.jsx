import { onLogin, onLogout, onSignup, loadUsers, removeUser } from '../store/user.actions.js'
import { LoginSignup } from '../cmps/login-signup.jsx'
import { SiTrello } from 'react-icons/si'
import LoginLeftImg from '../assets/img/left-loginsignup.svg'
import LoginRightImg from '../assets/img/right-loginsignup.svg'

export function SignupPage() {
    
    return <section className='login-container flex align-center column'>
        <div className="home-logo flex align-center"><SiTrello className="jello-logo" /><h1 className="jello-logo-text">Jello</h1></div>        
       <LoginSignup className="login-modal-container" onLogin={onLogin} onSignup={onSignup}/>
       <img className='login-screen-img left' src={LoginLeftImg} alt="" />
       <img className='login-screen-img right' src={LoginRightImg} alt="" />
    </section>
}
