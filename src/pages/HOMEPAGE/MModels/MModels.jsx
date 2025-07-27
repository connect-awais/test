import './MModels.css'

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import X3M50 from '../../../assets/images/Models/X3M50.avif'
import IXM70 from '../../../assets/images/Models/IXM70.avif'
import M5 from '../../../assets/images/Models/M5.avif'
import M4CS from '../../../assets/images/Models/M4CS.avif'

const MModels = () => {

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const models = [
    { src: X3M50, alt: 'X3 M50', label: 'THE X3 M50' },
    { src: IXM70, alt: 'IX M70', label: 'THE iX M70' },
    { src: M5, alt: 'M5 Touring', label: 'THE M5 TOURING' },
    { src: M4CS, alt: 'M4 CS', label: 'THE M4 CS' },
  ];

  return (
    <section className="m-models-section">
      <div className="m-models-header">
        <h2>MORE NEW M MODELS.</h2>
      </div>

      {isMobile ? (
        <>
          <Swiper
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // 👈 track instance
            modules={[Navigation]}
            className="mySwiper"
          >

            {models.map((model, index) => (
              <SwiperSlide key={index} className='MModelsSwiper'>
                <img src={model.src} alt={model.alt} />
                <p>{model.label}</p>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-swiper-buttons">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              disabled={activeIndex === 0}
            >
              <MdKeyboardArrowLeft size={30} />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              disabled={activeIndex === (swiperInstance?.slides?.length || 0) - 1}
            >
              <MdKeyboardArrowRight size={30} />
            </button>
          </div>

        </>
      ) : (
        <div className="m-models-grid">
          {models.map((model, index) => (
            <div key={index} className="m-model-card">
              <img src={model.src} alt={model.alt} />
              <p>{model.label}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default MModels
