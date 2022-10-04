import React from 'react';

const Events = () => {
  const news = [
    {
      id: 1,
      title: '우리의 여행',
      poster: 'd1c3eacf-f6de-4107-9002-38d8c1bf30b2',
    },
    {
      id: 2,
      title: '동화마을 Festival',
      poster: '3a1bc534-213f-43e0-b65e-173344aec86a',
    },
    {
      id: 3,
      title: '동화마을 Festival',
      poster: '3a1bc534-213f-43e0-b65e-173344aec86a',
    },
  ];

  return (
    <div className="mb-4">
      <div className="flex items-center mb-2 px-4">
        <div className="text-lg font-semibold text-gray-900">이벤트</div>
      </div>

      <div className="flex pl-4 space-x-4 overflow-x-scroll">
        {news.map((news) => (
          <div className="flex-none w-60 h-32 rounded bg-yellow-200"></div>
        ))}

        <div className="flex-none" />
      </div>
    </div>
  );
};

export default Events;
