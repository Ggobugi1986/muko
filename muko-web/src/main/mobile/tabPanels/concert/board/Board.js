import React, { useContext } from 'react';
import { mobileLayoutContext } from 'contexts';
import { Carousel } from 'ui/mobile';

const Board = () => {
  const { boardHeight } = useContext(mobileLayoutContext);

  const carouselProps = {
    slides: [
      {
        id: 0,
        type: 'concert',
        title: ['공연을 소개하는', '문구를 입력해주세요'],
        subtitle: '문구를 입력해주세요',
        image: 'violin',
      },
      {
        id: 1,
        type: 'concert',
        title: ['공연을 소개하는', '문구를 입력해주세요'],
        subtitle: '문구를 입력해주세요',
        image: 'violin',
      },
      {
        id: 2,
        type: 'concert',
        title: ['공연을 소개하는', '문구를 입력해주세요'],
        subtitle: '문구를 입력해주세요',
        image: 'violin',
      },
      {
        id: 3,
        type: 'concert',
        title: ['공연을 소개하는', '문구를 입력해주세요'],
        subtitle: '문구를 입력해주세요',
        image: 'violin',
      },
    ],
  };

  return (
    <div className="flex-none relative z-10" style={{ height: boardHeight }}>
      <Carousel {...carouselProps} />
    </div>
  );
};

export default Board;
