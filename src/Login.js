import React from 'react'
import './Login.css';
import spotifyLogo from "./assets/spotify-logo.jpg";

function Login() {
    return (
        <div className="login">
            {/* Logo */}
            <img src={spotifyLogo} alt=""/>
            {/* Login Button */}
            <a>LOGIN WITH SPOTIFY</a>

        </div>
    )
}

export default Login