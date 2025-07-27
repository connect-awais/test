import React, { useState, useEffect } from 'react';
import './MoreBMW.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import MoreBmw1 from '../../../assets/images/MoreBMW/MoreBMW1.webp';
import MoreBmw2 from '../../../assets/images/MoreBMW/MoreBMW2.avif';
import MoreBmw3 from '../../../assets/images/MoreBMW/MoreBMW3.webp';
import MoreBmwVideo from '../../../assets/images/MoreBMW/MoreBMWVideo.mp4'
import MoreBmw4 from '../../../assets/images/MoreBMW/MoreBMW4.avif';
import MoreBmw5 from '../../../assets/images/MoreBMW/MoreBMW5.avif';
import MoreBmw6 from '../../../assets/images/MoreBMW/MoreBMW6.avif';

const MoreBMW = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const MoreBmwslides = [
    { image: MoreBmw1, title: 'M DRIVERS COMMUNITY.', description: 'Become part of a exclusively community.' },
    { image: MoreBmw2, title: 'BMW M CULTURE.', description: 'Lifestyle with the most powerful letter in the world.' },
    { image: MoreBmw3, title: 'M POWER – ELECTRIFIED.', description: 'Ready for the next chapter.' },
    { image: MoreBmwVideo, title: 'M POWER – ELECTRIFIED.', description: 'Ready for the next chapter.' },
    { image: MoreBmw4, title: 'TRACK DAYS.', description: 'Push the limits.' },
    { image: MoreBmw5, title: 'HERITAGE.', description: 'Decades of dominance.' },
    { image: MoreBmw6, title: 'CONFIGURATOR.', description: 'Build your own.' },
  ];

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };


   const [slidesToShow, setSlidesToShow] = useState(2.5);

useEffect(() => {
  const updateSlides = () => {
    const w = window.innerWidth;

    if (w <= 650) {
      setSlidesToShow(1);
    }
    else if (w <= 800) {
      setSlidesToShow(2);
    }
    else if (w <= 1000) {
      setSlidesToShow(3);      // <= 1000px → 3 slides
    } else if (w <= 1250) {
      setSlidesToShow(4);      // 1001–1250px → 4 slides
    } else {
      setSlidesToShow(2.5);    // > 1250px → default
    }
  };

  updateSlides(); // Run on mount
  window.addEventListener("resize", updateSlides);
  return () => window.removeEventListener("resize", updateSlides);
}, []);


  return (
    <section className="more-bmw-section">
      <div className="more-bmw-wrapper">
        <div className="more-bmw-text">
          <h2>MORE BMW M.</h2>
          <p>Experience now.</p>
        </div>

        <div className="swiper-container-wrapper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={slidesToShow}
            onSwiper={setSwiperRef}
            onSlideChange={handleSlideChange}
            className="more-bmw-swiper"
          >
            {MoreBmwslides.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="more-bmw-slide-card">
                  {item.image.includes('.mp4') ? (
                    <video
                      src={item.image}
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="more-bmw-video"
                    />
                  ) : (
                    <img src={item.image} alt={item.title} />
                  )}
                  <div className="more-bmw-slide-text">
                    <p>{item.description}</p>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-nav-buttons">
            <button
              onClick={() => swiperRef?.slidePrev()}
              className="nav-btn"
              disabled={isBeginning}
            >
              <MdKeyboardArrowLeft size={25} />
            </button>
            <button
              onClick={() => swiperRef?.slideNext()}
              className="nav-btn"
              disabled={isEnd}
            >
              <MdKeyboardArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreBMW;
