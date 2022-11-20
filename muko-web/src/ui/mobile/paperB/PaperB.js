import React, { useContext } from 'react';
import { mobileLayoutContext } from 'contexts';
import { motion } from 'framer-motion';

const PaperB = ({ children }) => {
  const { clientHeight } = useContext(mobileLayoutContext);

  return (
    <motion.div
      className="fixed inset-0 rounded-t-2xl bg-white z-50"
      style={{ top: clientHeight }}
      animate={{ top: 56 }}
    >
      {children}
    </motion.div>
  );
};

export default PaperB;
