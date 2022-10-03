import React, { useContext } from 'react';
import { mobileLayoutContext } from 'contexts';
import { motion } from 'framer-motion';

const Board = () => {
  const { boardHeight } = useContext(mobileLayoutContext);

  return (
    <div
      className="flex-none relative flex flex-col items-center justify-center"
      style={{ height: boardHeight }}
    >
      <div className="w-28 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 16"
          style={{
            stroke: 'rgb(15 23 42)',
            strokeWidth: 0.25,
          }}
        >
          <motion.polygon
            points="0 8 5 0 10 8 15 0 20 8 20 16 0 16 0 8"
            initial={{
              opacity: 0,
              pathLength: 0,
              fill: 'rgba(15 23 42, 0)',
            }}
            animate={{
              opacity: 1,
              pathLength: 1,
              fill: 'rgba(15 23 42, 1)',
            }}
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
        </svg>
      </div>

      <motion.div
        className="opacity-0"
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <div className="text-lg text-slate-900 tracking-widest">M U K O</div>
      </motion.div>
    </div>
  );
};

export default Board;
