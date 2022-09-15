import { onLogin, onLogout, onSignup, loadUsers, removeUser } from '../store/user.actions.js'
import { LoginSignup } from '../cmps/login-signup.jsx'

export function LoginPage() {
    
    return <section className='login-container'>
       Jello <img src="#" alt="LogoHere" />
       <LoginSignup onLogin={onLogin} onSignup={onSignup} />
    </section>
}
