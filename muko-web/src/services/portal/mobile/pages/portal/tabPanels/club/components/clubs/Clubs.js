import React from 'react';
import { Card, SectionHeader } from 'ui/mobile';

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
      color: 'green',
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

  const sectionHeaderProps = {
    title: '동아리 살펴보기',
  };

  return (
    <div className="mb-4">
      <SectionHeader {...sectionHeaderProps} />

      <div className="flex flex-wrap px-3">
        {clubs.map((club) => (
          <Card {...club} />
        ))}
      </div>
    </div>
  );
};

export default Clubs;
