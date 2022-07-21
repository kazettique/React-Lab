import CustomCheckbox, { IProps as CustomCheckboxProps } from '@/components/CustomCheckbox';
import { useState } from 'react';

export default function CustomCheckboxPage() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const customCheckboxProps: CustomCheckboxProps = {
    checked: isChecked,
    onChange: (newValue) => setIsChecked(newValue),
  };

  return (
    <div data-page="CustomCheckboxPage" className="p-2.5 w-full h-full bg-neutral-400">
      <CustomCheckbox {...customCheckboxProps} />
    </div>
  );
}
