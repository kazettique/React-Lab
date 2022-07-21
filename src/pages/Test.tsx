import NumPad, { IProps as NumPadProps } from '@/components/NumPad';
import { useState } from 'react';

function Test() {
  const [value, setValue] = useState<string>('');
  const [log, setLog] = useState<string>('');

  // const numberInputProps: NumberInputProps = {
  //   amount: value,
  //   updateAmount: (newAmount) => setValue(newAmount),
  //   onCancel: () => setValue(0),
  //   placeHolder: 'please input',
  // };

  const numPadProps: NumPadProps = {
    onChange: (target) => {
      setLog((prev) => prev + target);
      setValue((prev) => prev + target);
    },
    onDone: () => {},
    onCancel: () => setValue(''),
  };

  return (
    <div data-page="Test" className="w-full h-full bg-violet-50">
      {/* <div className="w-36 h-12 my-0 mx-auto p-2"><NumberInput {...numberInputProps} /></div> */}
      <div className="flex flex-col justify-end h-full p-5">
        <div>log: {log}</div>
        <div>value: {value}</div>
        <NumPad {...numPadProps} />
      </div>
    </div>
  );
}

export default Test;
