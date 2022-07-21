import { RouteObject } from 'react-router-dom';
import { routerMapping } from './constants/routerMapping';
import PageNotFound from './pages/PageNotFound';

export const routes: RouteObject[] = [
  ...routerMapping.map((routerItem) => {
    const { path, element: Element } = routerItem;
    return {
      path: path,
      element: <Element />,
    };
  }),
  { path: '*', element: <PageNotFound /> },
];
