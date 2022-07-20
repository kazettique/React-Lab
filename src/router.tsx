import { RouteObject } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import CustomCheckboxPage from './pages/CustomCheckboxPage';
import Gallery from './pages/Gallery';

const baseUrl = 'react-lab';

export const routes: RouteObject[] = [
  {
    path: `${baseUrl}/`,
    element: <Gallery />,
  },
  {
    path: `${baseUrl}/customCheckBox`,
    element: <CustomCheckboxPage />,
  },
  { path: '*', element: <PageNotFound /> },
];
