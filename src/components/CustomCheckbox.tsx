import { ReactElement, useId } from 'react';

export interface IProps {
  className?: string;
  checked: boolean;
  onChange: (newValue: boolean) => void;
  label?: string;
  disabled?: boolean;
}

// ref: https://jakzaizzat.medium.com/how-to-a-build-custom-checkbox-in-tailwindcss-14e4e9c3c5dc
export default function CustomCheckbox(props: IProps): ReactElement {
  const { className = '', checked, onChange, label, disabled = false } = props;
  const uuid = useId();

  return (
    <div data-comp="CustomCheckbox" className={`flex justify-center items-center ${className}`}>
      <div className="flex items-center mr-4 mb-2 relative">
        <input
          disabled={disabled}
          type="checkbox"
          id={`checkbox-${uuid}`}
          name={`checkbox-${uuid}`}
          className="opacity-0 absolute h-5 w-5"
          onChange={(event) => onChange(event.target.checked)}
          onClick={(event) => event.stopPropagation()}
        />
        <div
          className={`border rounded border-white w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 
          ${checked ? 'bg-white' : 'bg-blue-500'}`}
        >
          {checked && (
            <svg
              className="fill-current w-3 h-3 pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <g className="fill-blue-500" transform="translate(-9 -11)" fillRule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          )}
        </div>
        {label && (
          <label htmlFor={`checkbox-${uuid}`} className="select-none">
            {label}
          </label>
        )}
      </div>
    </div>
  );
}
