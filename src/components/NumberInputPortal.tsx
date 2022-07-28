import NumPad from '@/components/NumPad';
import { getNumberWithCommas } from '@/utils';
import { ReactElement } from 'react';
import PopoverPortal from './PopoverPortal';

type InputTextAlignType = 'left' | 'center' | 'right';

export interface IProps {
  className?: string;
  amount: number;
  updateAmount: (newAmount: number) => void;
  placeHolder?: string;
  onCancel?: () => void;
  inputTextAlign?: InputTextAlignType;
  inputTextClassName?: string;
  isValid?: boolean;
  hintMessage?: string;
  customHintMessageClassName?: string;
}

// todo: get private info from redux
const MAX_STAKE = 999999;

function NumberInputPortal(props: IProps): ReactElement {
  const {
    className = '',
    amount,
    updateAmount,
    placeHolder = '',
    onCancel,
    inputTextAlign = 'center',
    inputTextClassName: inputTextStyle,
    isValid = true,
    hintMessage,
    customHintMessageClassName = '',
  } = props;

  const onChange = (target: number) => {
    let newValue: number = ~~(amount + target.toString());
    if (newValue > MAX_STAKE) newValue = MAX_STAKE;
    updateAmount(newValue);
  };

  const getInputTextAlign = (alignType: InputTextAlignType) => {
    switch (alignType) {
      case 'left':
        return 'text-left';
      case 'right':
        return 'text-right';
      case 'center':
      default:
        return 'text-center';
    }
  };

  const getInputTextStyle = inputTextStyle || 'text-red-500';
  const inValidStyle = isValid ? '' : 'ring-2 ring-red-500';
  const focusStyle = isValid ? 'focus:ring-2 focus:ring-blue-500' : 'focus:ring-2 focus:ring-red-500';
  const hintMessageStyle = customHintMessageClassName || 'text-neutral-500  text-center font-semibold text-sm pb-2';

  return (
    <>
      <PopoverPortal
        className="bg-white border border-neutral-200 shadow-md w-[300px] z-50 p-2"
        render={({ close, labelId, descriptionId }) => (
          <>
            {hintMessage && <div className={hintMessageStyle}>{hintMessage}</div>}
            <NumPad onChange={onChange} onDone={close} onCancel={onCancel} />
          </>
        )}
      >
        <button
          data-comp="NumberInput"
          type="button"
          className={`w-full h-[26px] lg:h-full bg-white rounded flex items-center p-1.5 relative ring active:bg-gray-100 cursor-pointer ${focusStyle} ${inValidStyle} ${className}`}
        >
          <span className="shrink-0 border border-dashed border-gray-200 inline-flex">$</span>
          <div className={`grow text-sm ${getInputTextAlign(inputTextAlign)}`}>
            {amount !== 0 ? (
              <span data-amount className={getInputTextStyle}>
                {getNumberWithCommas(amount)}
              </span>
            ) : (
              <span>{placeHolder}</span>
            )}
          </div>
        </button>
      </PopoverPortal>
    </>
  );
}

export default NumberInputPortal;
