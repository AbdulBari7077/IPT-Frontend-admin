import React from 'react';
import './Header.css';
import Logo from '../../assets/Logo.png'

const Header =()=> {
    return (
        <div className="header">
            <div className="header__content">
                <div className="header__left">
                    <img className = "header__logo" src={Logo} alt="Netflix" />
                </div>
            </div>
        </div>
    )
}

export default Header;