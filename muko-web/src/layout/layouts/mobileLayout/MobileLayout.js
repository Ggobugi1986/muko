import React, { Suspense, useRef, useState } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { mobileLayoutContext } from 'contexts';
import { MainMobile } from 'main';
import { mobileRoutes } from 'routes';
import { motion } from 'framer-motion';

const MobileLayout = () => {
  const location = useLocation();

  const [isClosing, setIsClosing] = useState(false);

  const ref = useRef({
    clientWidth: 0,
    clientHeight: 0,
  });

  const value = {
    clientWidth: ref.current.clientWidth,
    clientHeight: ref.current.clientHeight,

    boardHeight: ((ref.current.clientWidth - 24) / 3) * 2 + 24,

    setIsClosing,
  };

  return (
    <mobileLayoutContext.Provider value={value}>
      <div ref={ref} className="fixed inset-0" />
      <motion.div
        className="overflow-x-hidden"
        style={{
          backgroundColor:
            location.pathname === '/' ? '#FFEB70' : 'rgb(15 23 42)',
        }}
        animate={{
          backgroundColor:
            location.pathname === '/' ? '#FFEB70' : 'rgb(15 23 42)',
        }}
        transition={{ duration: 0.25 }}
      >
        <MainMobile />
        <Suspense>{useRoutes(mobileRoutes)}</Suspense>

        {isClosing && (
          <motion.div
            className="fixed inset-0 top-14 rounded-t-2xl bg-white z-50"
            animate={{
              top: ref.current.clientHeight,
            }}
            transition={{ duration: 0.25 }}
            onAnimationComplete={() => setIsClosing(false)}
          />
        )}
      </motion.div>
    </mobileLayoutContext.Provider>
  );
};

export default MobileLayout;
