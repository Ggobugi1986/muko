import React, { useRef } from 'react';
import { Footer, PaperA } from 'ui/mobile';
import Board from './board';
import { PastConcerts } from './components';

const Concert = () => {
  const scrollY = useRef(null);

  const props = {
    scrollY,
  };

  return (
    <div
      ref={scrollY}
      className="absolute inset-0 top-12 flex flex-col overflow-x-hidden overflow-y-scroll"
    >
      <Board {...props} />
      <PaperA>
        <PastConcerts {...props} />
        <Footer />
      </PaperA>
    </div>
  );
};

export default Concert;
