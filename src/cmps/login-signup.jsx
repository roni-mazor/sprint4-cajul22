import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { userService } from '../services/user.service'
import GuestImg from '../assets/img/guest-img.svg'
import { ImgUploader } from '../cmps/img-uploader'

export function LoginSignup(props) {

    const dispatch = useDispatch()

    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
    const [isSignup, setIsSignup] = useState(props.isSignup)
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getUsers()
            .then(setUsers)
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

    const onLogin = (ev = null) => {
        if (ev) ev.preventDefault()
        if (!credentials.username) return
        dispatch(props.onLogin(credentials))
        clearState()
    }

    const onSubmit = (ev = null) => {
        if (ev) ev.preventDefault()
        if (!credentials.username || !credentials.password || !credentials.fullname) return
        console.log(credentials)
        dispatch(props.onSignup(credentials))
        clearState()
    }

    const toggleSignup = () => {
        setIsSignup(!isSignup)
    }
    const onUploaded = (imgUrl) => {
        setCredentials({ ...credentials, imgUrl })
    }

    return (
        <section className='login-signup-container'>
            <div className="login-section">
                {!isSignup && <form className="login-form flex column" onSubmit={onLogin}>
                    {/* <select
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                >
                    <option value="">Select User</option>
                    {users.map(user => <option key={user._id} value={user.username}>{user.fullname}</option>)}
                </select> */}
                    <h1>Login to Jello</h1>
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
                    <button>Login</button>
                    <div className='login-bottom-navigation flex align-center'>
                        <NavLink to="/">Back Home</NavLink>
                        <NavLink onClick={toggleSignup}>Log In</NavLink>
                    </div>
                </form>}
            </div>
            <div className="signup-section">
                {isSignup && <form className="signup-form flex column" onSubmit={onSubmit}>
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
                    <NavLink className="as-guest-btn flex align-center" to="/workspace"><img src={GuestImg} alt="" /> Continue as Guest</NavLink>
                    <hr />
                    <div className='login-bottom-navigation flex align-center'>
                        <NavLink to="/">Back Home</NavLink>
                        <NavLink onClick={toggleSignup}>Log In</NavLink>
                    </div>
                    {/* <ImgUploader onUploaded={onUploaded} /> */}
                </form>}
            </div>
        </section>
    )
}
