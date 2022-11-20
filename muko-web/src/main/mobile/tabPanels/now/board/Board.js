import React, { useContext } from 'react';
import { mobileLayoutContext } from 'contexts';
import { Carousel } from 'ui/mobile';

const Board = () => {
  const { boardHeight } = useContext(mobileLayoutContext);

  const carouselProps = {
    slides: [
      {
        id: 0,
        type: 'event',
        title: ['노래도 고르고', '커피도 받자'],
        subtitle: '문구를 입력해주세요',
        image: 'coffee',
      },
      {
        id: 1,
        type: 'event',
        title: ['노래도 고르고', '커피도 받자'],
        subtitle: '문구를 입력해주세요',
        image: 'coffee',
      },
      {
        id: 2,
        type: 'event',
        title: ['노래도 고르고', '커피도 받자'],
        subtitle: '문구를 입력해주세요',
        image: 'coffee',
      },
      {
        id: 3,
        type: 'event',
        title: ['노래도 고르고', '커피도 받자'],
        subtitle: '문구를 입력해주세요',
        image: 'coffee',
      },
    ],
  };

  return (
    <div style={{ height: boardHeight }}>
      <Carousel {...carouselProps} />
    </div>
  );
};

export default Board;
