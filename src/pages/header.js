import React from "react";
import { NavLink } from "react-router-dom";
import './header.css';

const Header = () => {
    return(
        <div>
            <ul className="navbar">
                <li><NavLink to='/' className={({isActive}) => (isActive ? 'active' : '')}>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;