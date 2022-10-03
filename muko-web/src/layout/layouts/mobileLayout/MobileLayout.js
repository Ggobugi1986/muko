import React, { Suspense, useState } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { mobileLayoutContext } from 'contexts';
import { mobileRoutes } from 'routes';
import { HeaderA } from 'ui/mobile';
import { ResizeObserver } from '@juggle/resize-observer';
import { motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

const MobileLayout = () => {
  const location = useLocation();

  const [transitionAnimationFrom, setTransitionAnimationFrom] = useState(0);
  const [transitionAnimationTo, setTransitionAnimationTo] = useState(0);
  const [isTransitionCompleted, setIsTransitionCompleted] = useState(true);

  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver });

  const value = {
    clientWidth: bounds.width,
    clientHeight: bounds.height,

    boardHeight: ((bounds.width - 24) / 3) * 2 + 24,

    transitionAnimationFrom,
    setTransitionAnimationFrom,
    transitionAnimationTo,
    setTransitionAnimationTo,
    isTransitionCompleted,
    setIsTransitionCompleted,
  };

  return (
    <mobileLayoutContext.Provider value={value}>
      <div ref={ref} className="fixed inset-0">
        <motion.div
          ref={ref}
          style={{
            height: '80%',
            backgroundColor:
              location.pathname === '/'
                ? 'rgba(253, 224, 71, 0.75)'
                : 'rgb(15 23 42)',
          }}
          animate={{
            backgroundColor:
              location.pathname === '/'
                ? 'rgba(253, 224, 71, 0.75)'
                : 'rgb(15 23 42)',
          }}
          transition={{ duration: 0.25 }}
        />

        <HeaderA />
        <Suspense>{useRoutes(mobileRoutes)}</Suspense>

        {!isTransitionCompleted && (
          <motion.div
            className="absolute inset-x-0 bottom-0 rounded-t-2xl bg-white"
            style={{ top: transitionAnimationFrom }}
            animate={{ top: transitionAnimationTo }}
            transition={{ duration: 0.25 }}
            onAnimationComplete={() => setIsTransitionCompleted(true)}
          />
        )}
      </div>
    </mobileLayoutContext.Provider>
  );
};

export default MobileLayout;
