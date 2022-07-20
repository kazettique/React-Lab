import React, { ReactElement } from 'react';

interface IProps {
  className?: string;
}

function Menu(props: IProps): ReactElement {
  const { className = '' } = props;

  return (
    <div data-comp="Menu" className={`w-28 h-28 bg-white shadow absolute top-8 right-8 ${className}`}>
      Menu
    </div>
  );
}

export default Menu;
