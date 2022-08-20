import React from 'react'
import './Banner.css'
import banner from './images/yellowBanner.png'

function Banner() {
    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url(${banner})`,
            backgroundPosition: "center center",
        }}>

            <div className='banner__contents'>
                <h1 className='banner__title'>
                    movie name
                </h1>
                <div className='banner_buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner_description'>
                    this is a test description this is a test description this is a test description this is a test description this is a test description this is a test description this is a test description this is a test description this is a test description this is a test description this is a test description this is a test description this is a test description
                </h1>
            </div>

            <div className='banner--fadeBottom' />
        </header>
    )
}

export default Banner