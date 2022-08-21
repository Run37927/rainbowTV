import React from 'react'
import './Nav.css'
import avatar from './images/avatar.png'
import logo from './images/logo.png'
import { useHistory } from "react-router-dom"


function Nav() {
    const [show, handleShow] = React.useState(false);
    const history = useHistory()

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
                    onClick={() => history.push("/")}
                    className='nav__logo'
                    src={logo}
                    alt='logo'
                />

                <img
                    onClick={() => history.push("/profile")}
                    className='nav__avatar'
                    src={avatar}
                    alt='avatar'
                />
            </div>
        </div>
    )
}

export default Nav