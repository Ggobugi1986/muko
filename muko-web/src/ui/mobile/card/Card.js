import React from 'react';
import loadable from '@loadable/component';

const Card = ({ color, title, description, image }) => {
  const renderImage = () => {
    const Image = loadable(() => import(`./images/${image}`));
    return <Image />;
  };

  if (color === 'blue') {
    return (
      <div className="relative w-1/2 h-72 px-1 pt-8">
        <div className="h-48 border border-blue-300 rounded-lg bg-blue-200">
          <div className="absolute inset-x-0 top-0 flex justify-center">
            {renderImage()}
          </div>

          <div className="absolute inset-x-3 bottom-4 h-40 flex flex-col py-4 border border-blue-300 rounded-lg bg-blue-50">
            <div className="flex-1 flex flex-col items-center">
              <div className="mb-2 truncate">
                <div className="font-bold text-blue-700">{title}</div>
              </div>

              <div className="px-4 truncate">
                <div className="text-sm font-medium text-slate-900">
                  {description}
                </div>
              </div>
            </div>

            <div className="px-4">
              <div className="h-8 flex items-center justify-center rounded-md bg-blue-300">
                <div className="text-sm font-semibold text-blue-900">
                  더보기
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (color === 'purple') {
    return (
      <div className="relative w-1/2 h-72 px-1 pt-8">
        <div className="h-48 border border-purple-300 rounded-lg bg-purple-200">
          <div className="absolute inset-x-0 top-0 flex justify-center">
            {renderImage()}
          </div>

          <div className="absolute inset-x-3 bottom-4 h-40 flex flex-col py-4 border border-purple-300 rounded-lg bg-purple-50">
            <div className="flex-1 flex flex-col items-center">
              <div className="mb-2 truncate">
                <div className="font-bold text-purple-700">{title}</div>
              </div>

              <div className="px-4 truncate">
                <div className="text-sm font-medium text-slate-900">
                  {description}
                </div>
              </div>
            </div>

            <div className="px-4">
              <div className="h-8 flex items-center justify-center rounded-md bg-purple-300">
                <div className="text-sm font-semibold text-purple-900">
                  더보기
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (color === 'teal') {
    return (
      <div className="relative w-1/2 h-72 px-1 pt-8">
        <div className="h-48 border border-teal-300 rounded-lg bg-teal-200">
          <div className="absolute inset-x-0 top-0 flex justify-center">
            {renderImage()}
          </div>

          <div className="absolute inset-x-3 bottom-4 h-40 flex flex-col py-4 border border-teal-300 rounded-lg bg-teal-50">
            <div className="flex-1 flex flex-col items-center">
              <div className="mb-2 truncate">
                <div className="font-bold text-teal-700">{title}</div>
              </div>

              <div className="px-4 truncate">
                <div className="text-sm font-medium text-slate-900">
                  {description}
                </div>
              </div>
            </div>

            <div className="px-4">
              <div className="h-8 flex items-center justify-center rounded-md bg-teal-300">
                <div className="text-sm font-semibold text-teal-900">
                  더보기
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (color === 'yellow') {
    return (
      <div className="relative w-1/2 h-72 px-1 pt-8">
        <div className="h-48 border border-yellow-300 rounded-lg bg-yellow-200">
          <div className="absolute inset-x-0 top-0 flex justify-center">
            {renderImage()}
          </div>

          <div className="absolute inset-x-3 bottom-4 h-40 flex flex-col py-4 border border-yellow-300 rounded-lg bg-yellow-50">
            <div className="flex-1 flex flex-col items-center">
              <div className="mb-2 truncate">
                <div className="font-bold text-yellow-700">{title}</div>
              </div>

              <div className="px-4 truncate">
                <div className="text-sm font-medium text-slate-900">
                  {description}
                </div>
              </div>
            </div>

            <div className="px-4">
              <div className="h-8 flex items-center justify-center rounded-md bg-yellow-300">
                <div className="text-sm font-semibold text-yellow-900">
                  더보기
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
