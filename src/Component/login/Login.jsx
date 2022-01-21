import React from 'react'
import './login.css'

export default function Login() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">
                        StendaSocial
                    </h3>
                    <span className="loginDesc">
                        Connect with friends and the
                    </span>
                    <span className="loginDesc">
                        world around you on StendaSocial
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder='Email' className="loginInput" />
                        <input placeholder='password' className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegistrationButton">
                            Create a New Account
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
