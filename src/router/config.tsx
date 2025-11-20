
import { RouteObject, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const PhotoEditor = lazy(() => import('../pages/photo-editor/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/photo-editor" replace />,
  },
  {
    path: '/photo-editor',
    element: <PhotoEditor />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
