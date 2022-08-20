import React from 'react'
import Banner from './Banner'
import './HomeScreen.css'
import Nav from './Nav'
import Row from './Row'
import requests from './Requests'


function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Nav />
            <Banner />
            <Row
                title='RAINBOW ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row
                title='TRENDING NOW'
                fetchUrl={requests.fetchTrending}
                isLargeRow
            />
            <Row
                title='TOP RATED'
                fetchUrl={requests.fetchTopRated}
            />
            <Row
                title='ACTION MOVIES'
                fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title='COMEDY MOVIES'
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row
                title='HORROW MOVIES'
                fetchUrl={requests.fetchHorrowMovies}
            />
            <Row
                title='ROMANCE MOVIES'
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                title='DOCUMENTARIES'
                fetchUrl={requests.fetchDocumentaries}
            />

        </div>
    )
}

export default HomeScreen