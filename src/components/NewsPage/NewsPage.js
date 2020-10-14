import React from 'react'
import { Button } from 'react-bootstrap'
import cbc_logo from '../../images/icons/cbc_logo.png';
import cnn_logo from '../../images/icons/cnn_logo.png';
import './NewsPage.css';

const NewsPage = () => {
    return (
        <div id="news" className="news__page">
            <div className="news__page__more__info">
                <h2>COVID-19 News</h2>
                <h3>Find out more Information here</h3>
                <div className="news__page_button">
                    <div className="m-2">
                        <a href="https://www.cnn.com/specials/world/coronavirus-outbreak-intl-hnk" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline-danger" title="Say hello on FB">
                                <img className="cnn__logo" src={cnn_logo} alt="" /> CNN
                                </Button>
                        </a>
                    </div>
                    <div className="m-2 ">
                        <a href="https://www.cbc.ca/news/covid-19" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline-success" title="My other projects">
                                <img className="cbc__logo" src={cbc_logo} alt="" /> CBC
                                </Button>
                        </a>
                    </div>
                </div>
                <div className="news_page_prevention">
                    <div className="distance">
                        <i class="fas fa-people-arrows"></i>
                        <h4>Keep Sotial distance</h4>
                    </div>
                    <div className="distance">
                        <i class="fas fa-house-user"></i>
                        <h4>Stay at Home</h4>
                    </div>
                    <div className="distance">
                        <i class="fas fa-hands-wash"></i>
                        <h4>Wash Your Hands</h4>
                    </div>
                </div>
            </div>
            <div>
                <iframe title="covid" width="550" height="300" src="https://www.youtube.com/embed/JTjVgqxecFA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default NewsPage
