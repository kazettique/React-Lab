import NumberInput from '@/components/NumberInput';
import NumberInputPortal from '@/components/NumberInputPortal';
import { useState, ComponentProps } from 'react';

export default function FloatingUITest() {
  const [amount, setAmount] = useState<number>(0);

  const numberInputProps: ComponentProps<typeof NumberInput> = {
    amount,
    updateAmount: (newAmount) => setAmount(newAmount),
    onCancel: () => setAmount(0),
    placeHolder: 'number input',
  };

  const numberInputPortalProps: ComponentProps<typeof NumberInputPortal> = {
    amount,
    updateAmount: (newAmount) => setAmount(newAmount),
    onCancel: () => setAmount(0),
    placeHolder: 'number input portal',
  };

  return (
    <div className="w-full h-full flex">
      <div className="h-24 overflow-auto bg-neutral-300 p-2">
        <div className="w-[300px] h-9">
          <NumberInput {...numberInputProps} />
        </div>
      </div>
      <div className="h-24 overflow-auto bg-neutral-400 p-2 relative">
        <div className="w-[300px] h-9">
          <NumberInputPortal {...numberInputPortalProps} />
        </div>
      </div>
    </div>
  );
}
