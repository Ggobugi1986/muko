import React from 'react';

const Footer = () => {
  return (
    <div className="">
      <div className="mb-4 px-4">
        <div className="text-sm font-bold text-slate-900">뮤코 하우스</div>
      </div>
      <div className="mb-4 px-4">
        <div className="text-xs text-slate-500">대표: 고현정</div>
        <div className="text-xs text-slate-500">
          주소: 경기도 용인시 기흥구 평촌3로 5-13
        </div>
      </div>
      <div
        className="h-8 flex items-center px-4"
        style={{ backgroundColor: '#FFEB60' }}
      >
        <div className="text-xs font-semibold text-yellow-900">
          Copyright © 2022 뮤코하우스
        </div>
      </div>
    </div>
  );
};

export default Footer;
