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
    <div data-comp="Menu" className={`absolute top-0 right-0 ${className}`}>
      <button
        className="flex justify-end bg-neutral-200 rounded-md shadow-md ml-auto mr-0"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <XIcon className="h-7 w-7 m-3 text-neutral-700" />
        ) : (
          <MenuIcon className="h-7 w-7 m-3 text-neutral-700" />
        )}
      </button>
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
