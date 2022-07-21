import { createArray } from '@/utils';

export interface IProps {
  onChange: (target: number) => void;
  onDone?: () => void;
  onCancel?: () => void;
  className?: string;
}

export enum ButtonEventType {
  Number = 100,
  Cancel = 200,
  Done = 300,
}

export type NumPadEvent = {
  type: ButtonEventType;
  value: number;
};

function NumPad(props: IProps) {
  const { onChange, className = '', onDone, onCancel } = props;
  const btnClassMap = {
    [ButtonEventType.Cancel]: 'bg-red-500 active:bg-red-600 text-white',
    [ButtonEventType.Done]: 'bg-neutral-600 active:bg-neutral-700 text-white',
    [ButtonEventType.Number]: 'bg-neutral-200 active:bg-neutral-300 text-neutral-600',
  };

  let numObjects: NumPadEvent[] = createArray(9, 1).map((num) => {
    return { type: ButtonEventType.Number, value: num };
  });

  numObjects = [
    ...numObjects,
    ...[
      { type: ButtonEventType.Cancel, value: 200 },
      { type: ButtonEventType.Number, value: 0 },
      { type: ButtonEventType.Done, value: 300 },
    ],
  ];

  const mapText = {
    [ButtonEventType.Cancel]: 'Cancel',
    [ButtonEventType.Done]: 'Done',
  };

  const handleChange = (target: NumPadEvent): void => {
    if (target.type === ButtonEventType.Number) onChange(target.value);
    if (target.type === ButtonEventType.Done && onDone) onDone();
    if (target.type === ButtonEventType.Cancel && onCancel) onCancel();
  };

  return (
    <div data-comp="NumPad" className={`w-full grid grid-cols-3 gap-1 ${className}`}>
      {numObjects.map((item, idx) => (
        <button
          key={idx}
          className={`rounded select-none ${btnClassMap[item.type]}`}
          onClick={() => handleChange(item)}
        >
          {item.type === ButtonEventType.Number ? item.value : mapText[item.type]}
        </button>
      ))}
    </div>
  );
}

export default NumPad;
