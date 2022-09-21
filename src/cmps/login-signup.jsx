import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { loadUsers, onLogin, onSignUp } from "../store/user.actions"
import GuestImg from '../assets/img/guest-img.svg'

export function LoginSignup(props) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
    const [isSignup, setIsSignup] = useState(props.isSignup)

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    const clearState = () => {
        setCredentials({ username: '', password: '', fullname: '', imgUrl: '' })
        setIsSignup(false)
    }

    const handleChange = ev => {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    const onSubmitLogin = (ev = null) => {
        console.log('credentials:', credentials)
        if (ev) ev.preventDefault()
        if (!credentials.username) return
        dispatch(onLogin(credentials))
            .then(navigate('/workspace'))
    }

    const onSubmitSignup = (ev = null) => {
        if (ev) ev.preventDefault()
        if (!credentials.username || !credentials.password || !credentials.fullname) return
        console.log(credentials)
        dispatch(onSignUp(credentials))
            .then(navigate('/workspace'))
    }

    const toggleSignup = () => {
        setCredentials({ username: '', password: '', fullname: '', imgUrl: '' })
        setIsSignup(!isSignup)
    }

    return (
        <section className='login-signup-container'>
            <div className="login-section">
                {!isSignup && <form className="login-form flex column" onSubmit={onSubmitLogin}>
                    <h1>Login in to Jello</h1>
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        placeholder="User Name"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                    <button>Login</button>
                    <span>OR</span>
                    <p className="as-guest-btn flex align-center" to="/workspace" onClick={props.onStartDemo}><img src={GuestImg} alt="" /> Continue as Guest</p>
                    <hr />
                    <div className='login-bottom-navigation flex align-center'>
                        <NavLink to="/">Back Home</NavLink>
                        <p onClick={toggleSignup}>Sign Up</p>
                    </div>
                </form>}
            </div>
            <div className="signup-section">
                {isSignup && <form className="signup-form flex column" onSubmit={onSubmitSignup}>
                    <h1>Sign up for your account</h1>
                    <input
                        type="text"
                        name="fullname"
                        value={credentials.fullname}
                        placeholder="Full name"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        placeholder="User name"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                    <button href="/workspace" >Sign up</button>
                    <span>OR</span>
                    <p className="as-guest-btn flex align-center" to="/workspace" onClick={props.onStartDemo}><img src={GuestImg} alt="" /> Continue as Guest</p>
                    <hr />
                    <div className='login-bottom-navigation flex align-center'>
                        <NavLink to="/">Back Home</NavLink>
                        <p onClick={toggleSignup}>Log In</p>
                    </div>
                </form>}
            </div>
        </section>
    )
}
