import React from 'react'
import './Nav.css'
import avatar from './images/avatar.png'
import logo from './images/rainbowTv.png'

function Nav() {
    return (
        <div className='nav'>
            <div className='nav__contents'>
                <img
                    className='nav__logo'
                    src={logo}
                    alt='logo'
                />

                <img
                    className='nav__avatar'
                    src={avatar}
                    alt='avatar'
                />
            </div>
        </div>
    )
}

export default Nav