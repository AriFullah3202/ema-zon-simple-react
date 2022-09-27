import React from 'react'
import logo from '../images/Logo.svg'
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <img src={logo} alt="" />
                <div className="nav-link">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                    <div className="menu">
                        <a href="/home">Home</a>
                        <a href="/register">Register</a>
                        <a href="/login">Login</a>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header
