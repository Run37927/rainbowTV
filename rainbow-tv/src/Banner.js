import React from 'react'
import './Banner.css'
import banner from './images/yellowBanner.png'

function Banner() {
    function trancate(string, n) {
        return string.length > n ? string.substr(0, n-1) + "..." : string;
    }


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
                   {trancate(`this is test textthis is test textthis is test textthis is test textthis is test textthis is test textthis is test textthis is test textthis is test textthis is test textthis is test textthis is test textthis is test text`, 200)}
                </h1>
            </div>

            <div className='banner--fadeBottom' />
        </header>
    )
}

export default Banner