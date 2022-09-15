import { onLogin, onLogout, onSignup, loadUsers, removeUser } from '../store/user.actions.js'
import { LoginSignup } from '../cmps/login-signup.jsx'
import Logo from '../assets/img/login-jello-logo.svg'
import LoginLeftImg from '../assets/img/left-loginsignup.svg'
import LoginRightImg from '../assets/img/right-loginsignup.svg'

export function LoginPage() {
    
    return <section className='login-container flex align-center column'>
        <h1 className='login-headline'><img className='login-logo' src={Logo} alt="LogoHere" /> Jello</h1>        
       <LoginSignup className="login-modal-container" onLogin={onLogin} onSignup={onSignup}/>
       <img className='login-screen-img left' src={LoginLeftImg} alt="" />
       <img className='login-screen-img right' src={LoginRightImg} alt="" />
    </section>
}
