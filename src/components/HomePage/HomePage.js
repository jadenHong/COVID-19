import React from 'react'
import covidPhoto from '../../images/covid19.webp';
import './HomePage.css';

const FirstPage = () => {
    return (
        <div id="home" className="first__page">
            <div className="first__page__comment">
                <p>Check out current country<br /> and global data on COVID-19 <br />here.</p>
            </div>
            <img src={covidPhoto} alt="covid background" />
        </div>
    )
}

export default FirstPage
