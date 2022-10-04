import React from 'react';
import { Card } from 'ui/mobile';

const Clubs = () => {
  const clubs = [
    {
      id: 1,
      color: 'yellow',
      title: '동아리 이름',
      description: '동아리 설명',
      image: 'violin',
    },
    {
      id: 2,
      color: 'purple',
      title: '동아리 이름',
      description: '동아리 설명',
      image: 'violin',
    },
    {
      id: 3,
      color: 'teal',
      title: '동아리 이름',
      description: '동아리 설명',
      image: 'violin',
    },
    {
      id: 4,
      color: 'blue',
      title: '동아리 이름',
      description: '동아리 설명',
      image: 'violin',
    },
  ];

  return (
    <div className="mb-4">
      <div className="flex items-center px-4 mb-1">
        <div className="text-lg font-semibold text-gray-900">
          동아리 살펴보기
        </div>
      </div>

      <div className="flex flex-wrap px-3">
        {clubs.map((club) => (
          <Card {...club} />
        ))}
      </div>
    </div>
  );
};

export default Clubs;
