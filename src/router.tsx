import { RouteObject } from 'react-router-dom';
import { BASE_URL } from './constants';
import { routerMapping } from './constants/routerMapping';
import PageNotFound from './pages/PageNotFound';
import Test from './pages/Test';

export const routes: RouteObject[] = [
  ...routerMapping.map((routerItem) => {
    const { path, element: Element } = routerItem;
    return {
      path: path,
      element: <Element />,
    };
  }),
  {
    path: `/${BASE_URL}/test`,
    element: <Test />,
  },
  { path: '*', element: <PageNotFound /> },
];
