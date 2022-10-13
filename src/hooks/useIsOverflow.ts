import { RefObject, useEffect, useLayoutEffect, useState } from 'react';

function useIsOverflow(ref: RefObject<HTMLDivElement>) {
  const [isOverflow, setIsOverflow] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  useLayoutEffect(() => {
    if (ref.current) {
      const { clientWidth, scrollWidth } = ref.current;
      const hasOverflow = scrollWidth > clientWidth;

      setIsOverflow(hasOverflow);
    }
  }, [ref, dimensions]);

  return isOverflow;
}

export default useIsOverflow;
