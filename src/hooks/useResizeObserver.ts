import { useState, useCallback, useLayoutEffect, useReducer, useRef } from 'react';

const useResizeObserver = (callback?: (entry: DOMRectReadOnly) => void) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [dep, detectRefChange] = useReducer((count) => count++, 0);
  const outerRef = useRef<HTMLElement | null>(null);
  const outerRefFun = useCallback(
    (elem: HTMLElement | null) => {
      if (elem) {
        outerRef.current = elem;
        detectRefChange();
      }
    },
    [outerRef, detectRefChange]
  );

  const handleResize = useCallback(
    (entries: ResizeObserverEntry[]) => {
      if (!Array.isArray(entries)) {
        return;
      }
      const entry = entries[0];
      setWidth(entry.contentRect.width);
      setHeight(entry.contentRect.height);

      if (callback) {
        callback(entry.contentRect);
      }
    },
    [callback]
  );

  useLayoutEffect(() => {
    if (!outerRef.current) {
      return;
    }

    let RO: ResizeObserver | null = new ResizeObserver((entries) => {
      handleResize(entries);
    });
    RO.observe(outerRef.current);

    return () => {
      if (!!RO) {
        RO.disconnect();
        RO = null;
      }
    };
  }, [outerRef, handleResize, dep]);

  return [width, height, outerRefFun] as const;
};

export default useResizeObserver;
