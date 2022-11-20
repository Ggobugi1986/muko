import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { systemContext } from 'contexts';
import { useLinkClick } from 'hooks/mobile';
import { changeActiveTab } from 'store/slices/uiSlice';
import { motion } from 'framer-motion';

const HeaderA = () => {
  const location = useLocation();

  const { appBarTitle } = useContext(systemContext);

  const handleLinkClick = useLinkClick();

  const dispatch = useDispatch();

  return (
    <motion.div
      className="fixed inset-x-0 top-0 h-14 flex items-center px-2 z-50"
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
      <div
        className="w-10 h-10 flex items-center justify-center rounded"
        onClick={() => {
          dispatch(changeActiveTab('now'));
          handleLinkClick(
            '/',
            '뮤코 하우스',
            location.pathname !== '/' && 'down'
          );
        }}
      >
        <motion.div
          className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-300 opacity-0"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <div className="w-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
              <motion.polygon points="0 8 5 0 10 8 15 0 20 8 20 16 0 16 0 8" />
            </svg>
          </div>
        </motion.div>
      </div>
      <div className="flex-1 flex justify-center px-2">
        <motion.div
          className="text-lg font-bold"
          style={{
            color:
              location.pathname === '/' ? 'rgb(15 23 42)' : 'rgb(241 245 249)',
            opacity: 0,
          }}
          animate={{
            color:
              location.pathname === '/' ? 'rgb(15 23 42)' : 'rgb(241 245 249)',
            opacity: 1,
          }}
          transition={{ duration: 0.25 }}
        >
          {appBarTitle}
        </motion.div>
      </div>
      <div className="w-10 h-10 flex items-center justify-center rounded" />
    </motion.div>
  );
};

export default HeaderA;
