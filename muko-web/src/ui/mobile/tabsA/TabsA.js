import React from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const TabsA = ({ activeTab, tabs, layoutId }) => {
  const location = useLocation();

  return (
    <motion.div
      className="fixed inset-x-0 top-14 h-12 flex pl-2 overflow-x-scroll z-50"
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
      {tabs.map((tab) => (
        <div key={tab.id} className="flex-none relative flex items-center">
          <div className="px-2 py-1 rounded" onClick={tab.action}>
            <div
              className={clsx(
                'text-lg text-slate-900',
                tab.id !== activeTab && 'font-semibold',
                tab.id === activeTab && 'font-bold'
              )}
            >
              {tab.label}
            </div>
          </div>

          {tab.id === activeTab && (
            <motion.div
              className="absolute inset-x-2 bottom-0 h-1 rounded-sm bg-slate-900"
              layoutId={layoutId}
            />
          )}
        </div>
      ))}
      <div className="flex-none w-2" />
    </motion.div>
  );
};

export default TabsA;
