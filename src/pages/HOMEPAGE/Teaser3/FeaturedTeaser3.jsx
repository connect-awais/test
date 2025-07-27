import React from 'react'
import './FeaturedTeaser3.css'

import Teaser3of1 from '../../../assets/images/Teaser3/FeaturedTeaser3of1.webp'
import Teaser3of2 from '../../../assets/images/Teaser3/FeaturedTeaser3of2.mp4'
import Teaser3of3 from '../../../assets/images/Teaser3/FeaturedTeaser3of3.webp'

const FeaturedTeaser3 = () => {
    return (
        <section className='third-teaser-container'>
            <div className="third-teaser-wrapper">

                <div className="third-teaser-grid">

                    <div className="third-teaser-item">
                        <div className="third-teaser-item-img">
                            <img src={Teaser3of1} alt="" />
                        </div>
                        <div className="third-teaser-item-txt">
                            <h3>ENTRY FOR EXPERTS.</h3>
                            <p>The BMW M3 Racing.</p>
                        </div>
                    </div>

                    <div className="third-teaser-item">
                        <video
                            src={Teaser3of2}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="third-teaser-video"
                        />
                        <div className="third-teaser-item-txt">
                            <h3>BMW M AND ME.</h3>
                            <p>Torsten Schubert of Schubert Motorsport.</p>
                        </div>
                    </div>

                </div>

                <div className="third-teaser-hero">
                    <div className="third-hero-img">
                        <img src={Teaser3of3} alt="BMW" />
                    </div>
                    <div className="third-teaser-item-txt">
                        <h3>THE ULTIMATE ENTRY LEVEL RACE CAR.</h3>
                        <p>Exclusive insights into the development of the new BMW R2 Racing.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedTeaser3