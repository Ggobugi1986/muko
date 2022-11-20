import React from 'react';
import { SectionHeader } from 'ui/mobile';
import { Swiper, SwiperSlide } from 'swiper/react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: '우리의 여행',
      poster: 'd1c3eacf-f6de-4107-9002-38d8c1bf30b2',
    },
    {
      id: 2,
      title: '동화마을 Festival',
      poster: '3a1bc534-213f-43e0-b65e-173344aec86a',
    },
    {
      id: 3,
      title: '동화마을 Festival',
      poster: '3a1bc534-213f-43e0-b65e-173344aec86a',
    },
  ];

  const sectionHeaderProps = {
    title: '이벤트',
    more: () => {},
  };

  return (
    <div className="mb-4">
      <SectionHeader {...sectionHeaderProps} />

      <Swiper>
        {events.map((event) => (
          <SwiperSlide>
            <div className="h-32 px-4">
              <div className="h-full bg-yellow-200" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Events;
