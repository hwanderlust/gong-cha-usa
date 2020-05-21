import React from 'react';
import Logo from './media/gongcha-logo-horizontal.png'
import style from './Header.css'

function Header() {
    return (
        <div className='header'>
            <img src={Logo} className='logo'/>
            <div className='navigation'>
                <div>Home</div>
                <div>About Us</div>
                <div>Menu</div>
                <div>Locations</div>
                <div>Franchising</div>
            </div>
        </div>
    )
}

export default Header;