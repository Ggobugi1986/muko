import { lazy } from 'react';
const PortalDesktop = lazy(() => import('./desktop/pages/portal'));
const PortalMobile = lazy(() => import('./mobile/pages/portal'));

export const portalDesktopRoutes = [
  {
    path: '/',
    element: <PortalDesktop />,
  },
];

export const portalMobileRoutes = [
  {
    path: '/',
    element: <PortalMobile />,
  },
];
