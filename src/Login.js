import React from 'react'
import './Login.css';
import spotifyLogo from "./assets/spotify-logo.jpg";
import {loginURL} from "./spotify";

function Login() {
    return (
        <div className="login">
            {/* Logo */}
            <img src={spotifyLogo} alt=""/>
            {/* Login Button */}
            <a href={loginURL}>LOGIN WITH SPOTIFY</a>

        </div>
    )
}

export default Login