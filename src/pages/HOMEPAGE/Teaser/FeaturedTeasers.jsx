import React from 'react'
import './FeaturedTeasers.css'

import TeaserBmw1 from '../../../assets/images/Teaser/TeaserBmw1.avif'
import TeaserBmw2 from '../../../assets/images/Teaser/TeaserBmw2.avif'
import TeaserVideoBmw from '../../../assets/images/Teaser/TeaserVideoBmw.mp4'

const FeaturedTeasers = () => {
  return (
    <section className="featured-teasers">
      <div className="featured-teaser-wrapper">
        <div className="teasers-grid">

          <div className="teaser-item">
            <div className="teaser-image">
              <img src={TeaserBmw1} alt="BMW M2 CS" />
            </div>
            <div className="teaser-text">
              <p>Accelerate Your Senses.</p>
              <h3>THE NEW M2 CS</h3>
            </div>
          </div>

          <div className="teaser-item">
            <div className="teaser-image">
              <img src={TeaserBmw2} alt="Panoramic Drive" />
            </div>
            <div className="teaser-text">
              <p>An exclusive panoramic drive to Kitzbühel.</p>
              <h3>PERFORMANCE MEETS PANORAMA.</h3>
            </div>
          </div>

        </div>

<div className="featured-teaser-media">
  <video
    src={TeaserVideoBmw}
    autoPlay
    loop
    muted
    playsInline
    className="featured-teaser-video"
  />
  <div className="featured-teaser-caption">
    <h4>GEN M.</h4>
    <p>United by Performance.</p>
  </div>
</div>

      </div>
    </section>
  )
}

export default FeaturedTeasers
