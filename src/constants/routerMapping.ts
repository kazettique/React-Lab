import CustomCheckboxPage from '@/pages/CustomCheckboxPage';
import Gallery from '@/pages/Gallery';
import { BASE_URL } from './common';

type RouterMapping = {
  path: string;
  element: () => JSX.Element;
  label: string;
};

export const routerMapping: RouterMapping[] = [
  {
    path: `${BASE_URL}/`,
    element: Gallery,
    label: 'Gallery',
  },
  {
    path: `${BASE_URL}/customCheckBox`,
    element: CustomCheckboxPage,
    label: 'Custom Checkbox',
  },
];
