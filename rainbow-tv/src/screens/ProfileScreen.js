import React from 'react'
import Nav from '../Nav'
import "./ProfileScreen.css"
import avatar from "../images/avatar.png"
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from "../firebase"
import PlansScreen from './PlansScreen'


function ProfileScreen() {
    const user = useSelector(selectUser);


    return (
        <div className='profileScreen'>
            <Nav />

            <div className='profileScreen__body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen__info'>
                    <img src={avatar} alt='avatar' />
                    <div className='profileScreen__details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen__plans'>
                            <h3>Plans</h3>
                            <PlansScreen />
                            <button onClick={() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen