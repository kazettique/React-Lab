import { getNumberWithCommas } from '@/utils';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import NumPad, { IProps as NumPadProps } from './NumPad';

export interface IProps {
  className?: string;
  containerEl: HTMLDivElement | null;
  // position?: 'top' | 'bottom';
}

export default function FloatingKeyboard(props: IProps) {
  const { className = '', containerEl } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);
  const padRef = useRef<HTMLDivElement>(null);

  // console.log('containerEl', containerEl);

  useEffect(() => {
    const updatePosition = () => {
      if (btnRef.current) {
        const el = btnRef.current;
        const { left, top } = el.getBoundingClientRect();
        const clientHeight = el.clientHeight;
        setPosition({ x: left, y: top + clientHeight + 10 });
        // setIsOpen(false);
      }
    };

    updatePosition();

    if (containerEl) {
      containerEl.addEventListener('scroll', updatePosition);
    }

    if (containerEl) {
      return () => containerEl.removeEventListener('scroll', updatePosition);
    }
  }, [containerEl]);

  const numPadProps: NumPadProps = {
    onChange: (target) => setAmount((prev) => ~~(prev.toString() + target.toString())),
    onCancel: () => setAmount(0),
    onDone: () => setIsOpen(false),
  };

  useEffect(() => {
    // document.addEventListener('click', (event) => {
    //   console.log('event.target window', event.target);
    //   console.log('padRef.current', padRef.current);
    //   if (event.target === padRef.current) {
    //     // console.log('hi');
    //   }
    // });
  }, []);

  return (
    <div className={className}>
      <button
        type="button"
        className={`w-full h-[26px] lg:h-full bg-white rounded flex items-center p-1.5 relative ring active:bg-gray-100 cursor-pointer`}
        ref={btnRef}
        onClick={(event) => {
          // console.log('event.target', event.target);
          // console.log('event.currentTarget', event.currentTarget);
          setIsOpen((prev) => !prev);
        }}
      >
        {getNumberWithCommas(amount)}
      </button>
      {isOpen &&
        createPortal(
          <div
            className="W-[300px] bg-yellow-600 rounded absolute top-0 left-0 p-2"
            style={{ top: position.y, left: position.x }}
            ref={padRef}
          >
            <NumPad {...numPadProps} />
          </div>,
          document.body
        )}
    </div>
  );
}
