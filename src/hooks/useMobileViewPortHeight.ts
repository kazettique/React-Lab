import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

function useMobileViewPortHeight() {
  const [containerHeight, setContainerHeight] = useState<number | null>(null);

  const updateHeight = () => {
    const currentWindowHeight = window.innerHeight;
    setContainerHeight(currentWindowHeight);
  };

  const debouncedUpdateHeight = useDebounce(updateHeight, 500);

  useEffect(() => {
    const portrait = window.matchMedia('(orientation:portrait)');
    updateHeight();

    if (portrait && portrait?.addEventListener) {
      portrait.addEventListener('change', updateHeight);
    }

    if (portrait && portrait?.addListener) {
      portrait.addListener(updateHeight);
    }
  }, []);

  useEffect(() => {
    updateHeight();
    window.addEventListener('resize', debouncedUpdateHeight);

    return () => window.removeEventListener('resize', debouncedUpdateHeight);
  }, [debouncedUpdateHeight]);

  const style = containerHeight ? { height: containerHeight } : {};

  return { style, containerHeight };
}

export default useMobileViewPortHeight;
