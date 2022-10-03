import React, { useRef } from 'react';
import { Footer, PaperA } from 'ui/mobile';
import Board from './board';
import { Articles, Menu } from './components';

const About = () => {
  const scrollY = useRef(null);

  const props = {
    scrollY,
  };

  return (
    <div
      ref={scrollY}
      className="absolute inset-0 top-12 flex flex-col overflow-x-hidden overflow-y-scroll"
    >
      <Board />
      <PaperA>
        <Menu {...props} />
        <Articles {...props} />
        <Footer />
      </PaperA>
    </div>
  );
};

export default About;
