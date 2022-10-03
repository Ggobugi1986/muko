import React, { useContext, useState } from 'react';
import { mobileLayoutContext } from 'contexts';
import loadable from '@loadable/component';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css';

const Carousel = ({ slides }) => {
  const { isTransitionCompleted } = useContext(mobileLayoutContext);

  const [activeSlide, setActiveSlide] = useState(1);

  const renderSlide = (slide) => {
    const Slide = loadable(() => import(`./slides/${slide.type}`));

    return <Slide key={slide.id} {...slide} />;
  };

  return (
    isTransitionCompleted && (
      <>
        {slides.map(
          (slide, index) => index + 1 === activeSlide && renderSlide(slide)
        )}

        <div className="absolute top-8 right-8 flex space-x-2">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className={clsx(
                'w-2 h-2 rounded-full',
                index + 1 === activeSlide ? 'bg-purple-400' : 'bg-white'
              )}
              animate={{
                backgroundColor:
                  index + 1 === activeSlide
                    ? 'rgb(192 132 252)'
                    : 'rgb(255 255 255)',
              }}
              transition={{ duration: 0.25 }}
            />
          ))}
        </div>

        <Swiper
          className="h-full"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          onSlideChange={(swiper) => {
            let activeIndex;

            if (swiper.activeIndex > slides.length) {
              activeIndex = 1;
            } else if (swiper.activeIndex < 1) {
              activeIndex = slides.length;
            } else {
              activeIndex = swiper.activeIndex;
            }

            setActiveSlide(activeIndex);
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} />
          ))}
        </Swiper>
      </>
    )
  );
};

export default Carousel;
