import CustomCheckbox, { IProps as CustomCheckboxProps } from '@/components/CustomCheckbox';
import React, { useState } from 'react';

export default function CustomCheckboxPage() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const customCheckboxProps: CustomCheckboxProps = {
    checked: isChecked,
    onChange: (newValue) => setIsChecked(newValue),
  };

  return (
    <div data-custom-checkbox-page className="p-2.5 w-full h-full bg-neutral-400">
      <CustomCheckbox {...customCheckboxProps} />
    </div>
  );
}
