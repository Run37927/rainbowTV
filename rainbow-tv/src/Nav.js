import React from 'react'
import './Nav.css'
import avatar from './images/avatar.png'
import logo from './images/logo.png'

function Nav() {
    const [show, handleShow] = React.useState(false);

    const transitionNavBar = () => {
        if (window.scrollY >100) {
            handleShow(true)
        }else {
            handleShow(false)
        }
    }

    React.useEffect(() => {
       window.addEventListener("scroll", transitionNavBar)
       return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])


    return (
        <div className={`nav ${show && 'nav__bg'}`}>
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