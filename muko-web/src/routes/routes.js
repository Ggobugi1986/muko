import { articleDesktopRoutes, articleMobileRoutes } from 'services/article';
import { portalDesktopRoutes, portalMobileRoutes } from 'services/portal';

export const desktopRoutes = [...articleDesktopRoutes, ...portalDesktopRoutes];

export const mobileRoutes = [...articleMobileRoutes, ...portalMobileRoutes];
