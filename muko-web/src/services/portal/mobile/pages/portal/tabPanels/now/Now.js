import React, { useRef } from 'react';
import { Footer, PaperA } from 'ui/mobile';
import Board from './board';
import { Events, News } from './components';

const Now = () => {
  const scrollY = useRef(null);

  return (
    <div
      ref={scrollY}
      className="absolute inset-0 top-12 flex flex-col overflow-x-hidden overflow-y-scroll"
    >
      <Board scrollY={scrollY} />
      <PaperA>
        <News scrollY={scrollY} />
        <Events scrollY={scrollY} />
        <Footer />
      </PaperA>
    </div>
  );
};

export default Now;
