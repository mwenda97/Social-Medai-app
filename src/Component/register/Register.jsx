import React from 'react'
import './register.css'

export default function Register() {
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
                    <input placeholder='UserName' className="loginInput" />    
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='password' className="loginInput" />
                    <input placeholder='password again' className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegistrationButton">
                        Log into Account
                    </button>
                </div>
            </div>
        </div>
        
    </div>
    )
}
