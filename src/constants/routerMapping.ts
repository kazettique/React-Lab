import CustomCheckboxPage from '@/pages/CustomCheckboxPage';
import DraggableTest from '@/pages/DraggableTest';
import FloatingKeyboardTest from '@/pages/FloatingKeyboardTest';
import FloatingUITest from '@/pages/FloatingUITest';
import FramerMotionTest from '@/pages/FramerMotionTest';
import Gallery from '@/pages/Gallery';
import MobileTouchAreaTest from '@/pages/MobileTouchAreaTest';
import Test from '@/pages/Test';
import UseIsMobileTest from '@/pages/UseIsMobileTest';
import { BASE_URL } from './common';

type RouterMapping = {
  path: string;
  element: () => JSX.Element;
  label: string;
};

export const routerMapping: RouterMapping[] = [
  {
    path: `/${BASE_URL}/`,
    element: Gallery,
    label: 'Gallery',
  },
  {
    path: `/${BASE_URL}/customCheckBox`,
    element: CustomCheckboxPage,
    label: 'Custom Checkbox',
  },
  {
    path: `/${BASE_URL}/test`,
    element: Test,
    label: 'Test',
  },
  {
    path: `/${BASE_URL}/framerMotionTest`,
    element: FramerMotionTest,
    label: 'Framer Motion Test',
  },
  {
    path: `/${BASE_URL}/mobileTouchAreaTest`,
    element: MobileTouchAreaTest,
    label: 'Mobile Touch Area Test',
  },
  {
    path: `/${BASE_URL}/floatingKeyboardTest`,
    element: FloatingKeyboardTest,
    label: 'Floating Keyboard Test',
  },
  {
    path: `/${BASE_URL}/draggableTest`,
    element: DraggableTest,
    label: 'Draggable Test',
  },
  {
    path: `/${BASE_URL}/floatingUITest`,
    element: FloatingUITest,
    label: 'Floating UI Test',
  },
  {
    path: `/${BASE_URL}/useIsMobileTest`,
    element: UseIsMobileTest,
    label: 'useIsMobile Test',
  },
];
