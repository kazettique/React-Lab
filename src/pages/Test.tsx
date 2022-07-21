import NumberInput, { IProps as NumberInputProps } from '@/components/NumberInput';
import { useState } from 'react';

function Test() {
  const [value, setValue] = useState<number>(0);

  const numberInputProps: NumberInputProps = {
    amount: value,
    updateAmount: (newAmount) => setValue(newAmount),
    onCancel: () => setValue(0),
    placeHolder: 'please input',
  };

  return (
    <div data-page="Test" className="w-full h-full bg-violet-50">
      <div className="w-36 h-12 my-0 mx-auto p-2">
        <NumberInput {...numberInputProps} />
      </div>
    </div>
  );
}

export default Test;
