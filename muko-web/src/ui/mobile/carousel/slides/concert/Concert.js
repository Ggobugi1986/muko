import React from 'react';
import Image from '../../image';
import { motion } from 'framer-motion';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Concert = ({ title, subtitle, image }) => {
  return (
    <>
      <motion.div
        className="absolute top-8 left-0 opacity-0"
        animate={{ left: 16, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <div className="flex mb-3">
          <div className="h-6 flex items-center px-3 border border-slate-900 rounded-full">
            <div className="text-sm font-semibold text-slate-900">공연</div>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-2xl font-bold text-slate-900">{title[0]}</div>
          <div className="text-2xl font-bold text-slate-900">{title[1]}</div>
        </div>

        <div className="mb-4">
          <div className="text-lg font-semibold text-purple-500">
            {subtitle}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="text-sm font-semibold text-slate-900">더보기</div>
          <HiOutlineArrowNarrowRight className="text-slate-900" />
        </div>
      </motion.div>

      <Image image={image} />
    </>
  );
};

export default Concert;
