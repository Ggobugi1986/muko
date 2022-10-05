import React from 'react';
import { useLinkClick } from 'hooks/mobile';
import { SectionHeader } from 'ui/mobile';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Articles = ({ scrollY }) => {
  const handleLinkClick = useLinkClick();

  const articles = [
    {
      id: 1,
      name: '',
    },
    {
      id: 2,
      name: '',
    },
    {
      id: 3,
      name: '',
    },
  ];

  const sectionHeaderProps = {
    title: '언론에 소개된 뮤코',
    more: () => handleLinkClick(`/articles`, '언론 기사', 'top', scrollY),
  };

  return (
    <div className="mb-4">
      <SectionHeader {...sectionHeaderProps} />
      <div className="flex pl-4 space-x-4 overflow-x-scroll">
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex-none w-48 p-2 border border-slate-300 rounded bg-slate-100"
            onClick={() =>
              handleLinkClick(
                `/article/${article.id}`,
                '언론 기사',
                'top',
                scrollY
              )
            }
          >
            <div className="flex justify-center mb-2">
              <div className="text-xs font-bold text-slate-900">
                용인시민신문
              </div>
            </div>

            <div className="h-16 mb-2 overflow-hidden">
              <img
                src="/assets/images/0c3ad174-1491-42fd-b564-4c7eefc6af50.jpeg"
                alt=""
                className="grayscale"
              />
            </div>

            <div className="mb-1">
              <div className="text-sm font-bold text-slate-900 truncate">
                커뮤니티를 일구는 ‘마음토닥토닥 합창단’
              </div>
            </div>

            <div className="mb-4">
              <div className="text-xs font-semibold text-slate-500 truncate">
                대한민국은 현재, 코로나19로 이웃과 소통이 단절되고 있다.
              </div>
            </div>

            <div className="flex items-center justify-end space-x-2">
              <div className="text-xs font-semibold text-slate-900">더보기</div>
              <HiOutlineArrowNarrowRight className="text-slate-900" />
            </div>
          </div>
        ))}

        <div className="flex-none w-2" />
      </div>
    </div>
  );
};

export default Articles;
