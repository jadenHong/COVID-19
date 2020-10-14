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
                <video controls src="https://r5---sn-nx5e6nez.googlevideo.com/videoplayback?expire=1602654968&ei=mD6GX_CqNKWAjuMPgNm_8AQ&ip=183.88.5.201&id=o-ALWU7IGxSQjPwTMaPAh10rhJ50ehr_uQpHcbrDMIjJkR&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=32688815&ratebypass=yes&dur=553.563&lmt=1602396355478767&fvip=5&fexp=23915654&c=WEB&txp=5530432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgFe8PF4TKfaOiPB7o06_uKqH4AhaqwsPxJVY30k2sFZcCIQC7ESqigILaDkoaNMgzyf5yQpnzToBhVrGTm5Tnl_3Bhw%3D%3D&video_id=zWm-mlM6u-M&title=Trump+holds+public+event+despite+unclear+Covid-19+status&rm=sn-w5nuxa-o53676,sn-w5nuxa-c33ek76,sn-30aey76&req_id=abb64f74107a3ee&redirect_counter=3&cms_redirect=yes&ipbypass=yes&mh=hm&mip=50.66.155.20&mm=30&mn=sn-nx5e6nez&ms=nxu&mt=1602632762&mv=u&mvi=5&pl=22&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgZyaEMK_mXyJFZdgW9lfx7z1fDHCKL_6M6YnIrXwXetsCIFE8nJUfrwHzoe6eQyDfgWQa6OIg9y9voZ16k2DRmJvm"></video>
            </div>
        </div>
    )
}

export default NewsPage
