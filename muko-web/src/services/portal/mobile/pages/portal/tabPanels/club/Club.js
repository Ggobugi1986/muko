import React, { useRef } from 'react';
import { Footer, PaperA } from 'ui/mobile';
import Board from './board';
import { Clubs } from './components';

const Club = () => {
  const scrollY = useRef(null);

  return (
    <div
      ref={scrollY}
      className="absolute inset-0 top-12 flex flex-col overflow-x-hidden overflow-y-scroll"
    >
      <Board scrollY={scrollY} />
      <PaperA>
        <Clubs scrollY={scrollY} />
        <Footer />
      </PaperA>
    </div>
  );
};

export default Club;
