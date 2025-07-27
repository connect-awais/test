import React from 'react'
import './FeaturedTeasers2.css'

import BmwTeaser1 from '../../../assets/images/Teaser2/BmwTeaser1.avif'
import BmwTeaser2 from '../../../assets/images/Teaser2/BmwTeaser2.avif'
import BmwTeaser3 from '../../../assets/images/Teaser2/BmwTeaser3.jpg'

const FeaturedTeasers2 = () => {
  return (
       <section className="second-featured-teasers">
  <div className="second-featured-teaser-wrapper">
    <div className="second-teasers-grid">

      <div className="second-teaser-item">
        <div className="second-teaser-image">
          <img src={BmwTeaser1} alt="BMW" />
        </div>
        <div className="second-teaser-text">
          <p className='teaser-primary-txt'> COMPACT CLASS RECORD. </p>
          <p className='teaser-title-txt'> BMW M2 CS becomes fastest compact<br /> sports car on the Nürburgring. </p>
        </div>
      </div>

      <div className="second-teaser-item">
        <div className="second-teaser-image">
          <img src={BmwTeaser2} alt="BMW" />
        </div>
        <div className="second-teaser-text">
          <p className='teaser-primary-txt'> FROM MOTORSPORT TO SERIES PRODUCTION. </p>
          <p className='teaser-title-txt'> Innovative natural fibre composites for<br /> BMW M series models. </p>
        </div>
      </div>

    </div>

    <div className="second-featured-teaser-media">
      <img src={BmwTeaser3} alt="Bmw" />
      <div className="second-featured-teaser-caption">
        <h4> BMW M AND ME. </h4>
        <p> Can Eyilik is an interior designer in Istanbul and owner of a unique BMW M collection. </p>
      </div>
    </div>
  </div>
</section>

  )
}

export default FeaturedTeasers2