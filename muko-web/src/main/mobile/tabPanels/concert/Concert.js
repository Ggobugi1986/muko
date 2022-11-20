import React from 'react';
import { Footer, PaperA } from 'ui/mobile';
import Board from './board';
import { PastConcerts } from './components';

const Concert = () => {
  return (
    <div className="flex flex-col" style={{ paddingTop: 104 }}>
      <Board />
      <PaperA>
        <PastConcerts />
        <Footer />
      </PaperA>
    </div>
  );
};

export default Concert;
