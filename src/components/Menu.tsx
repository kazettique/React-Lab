import { routerMapping } from '@/constants/routerMapping';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface IProps {
  className?: string;
}

function Menu(props: IProps): ReactElement {
  const { className = '' } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuContentStyle = isOpen ? 'block' : 'hidden';

  return (
    <div data-comp="Menu" className={`absolute top-8 right-8 text-right ${className}`}>
      <div className="flex justify-end">
        {isOpen ? (
          <XIcon className="h-7 w-7 cursor-pointer text-neutral-700" onClick={() => setIsOpen(false)} />
        ) : (
          <MenuIcon className="h-7 w-7 cursor-pointer text-neutral-700" onClick={() => setIsOpen(true)} />
        )}
      </div>
      <div className={`bg-white shadow-md mt-3 rounded overflow-hidden ${menuContentStyle}`}>
        {routerMapping.map((menuItem) => (
          <NavLink
            key={menuItem.label}
            className={({ isActive }) => `block p-3 hover:bg-neutral-300 ${isActive ? 'bg-neutral-200' : 'bg-white'}`}
            to={menuItem.path}
            onClick={() => setIsOpen(false)}
          >
            {menuItem.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Menu;
