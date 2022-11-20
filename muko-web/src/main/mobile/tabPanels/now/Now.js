import React from 'react';
import { Footer, PaperA } from 'ui/mobile';
import Board from './board';
import { Events, News } from './components';

const Now = () => {
  return (
    <div className="flex flex-col" style={{ paddingTop: 104 }}>
      <Board />
      <PaperA>
        <News />
        <Events />
        <Footer />
      </PaperA>
    </div>
  );
};

export default Now;
