import React from 'react';
import { Footer, PaperA } from 'ui/mobile';
import Board from './board';
import { Clubs } from './components';

const Club = () => {
  return (
    <div className="flex flex-col" style={{ paddingTop: 104 }}>
      <Board />
      <PaperA>
        <Clubs />
        <Footer />
      </PaperA>
    </div>
  );
};

export default Club;
