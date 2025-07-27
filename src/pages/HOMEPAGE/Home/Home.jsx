import React from 'react';
import './Home.css';

import BMWImage from '../../../assets/images/Home1/bmw-1.avif';
import BMWVideo from '../../../assets/images/Home1/bmw-xm-video.mp4';

import FeaturedTeasers from '../Teaser/FeaturedTeasers';
import MModels from '../MModels/MModels';
import FeaturedTeasers2 from '../Teaser2/FeaturedTeasers2';
import ChatBotTxt from '../ChatBot-txt/ChatBot-txt';
import MoreBmw from '../MoreBMW/MoreBMW'
import FeaturedTeaser3 from '../Teaser3/FeaturedTeaser3';
import BmwNews from '../NEWSLETTER/BmwNews';

const Home = () => {
    return (
        <div>
            <div className="home-wrapper">
                <div className="home-content-container">
                    <div className="home-text-section">
                        <p className="home-subtitle">Exclusive, expressive, electrified.</p>
                        <p className="home-title">THE NEW XM LABEL</p>
                        <button className="home-button">Experience More</button>
                    </div>

                    <div className="home-media-section">
                        <img src={BMWImage} alt="BMW" className="home-image" />
                        <div className="home-video-wrapper">
                            <video
                                src={BMWVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="home-video"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <FeaturedTeasers />
            <MModels/>
            <FeaturedTeasers2/>
            <ChatBotTxt/>
            <MoreBmw/>
            <FeaturedTeaser3/>
            <BmwNews/>
        </div>
    );
};

export default Home;
