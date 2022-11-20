import loadable from '@loadable/component';

const Article = loadable(() => import('services/article/mobile/pages/article'));

export const desktopRoutes = [];

export const mobileRoutes = [
  {
    path: '/',
    element: <></>,
  },
  {
    path: 'article/:id',
    element: <Article />,
  },
];
