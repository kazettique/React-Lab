import { useState, useEffect } from 'react';

const mediaQueryList = window.matchMedia('(max-width: 1024px)');

function useIsMobile2(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(mediaQueryList.matches);

  useEffect(() => {
    const onResize = (event: MediaQueryListEvent) => {
      alert('useIsMobile2!!');
      setIsMobile(event.matches);
    };
    // onResize();

    if (mediaQueryList && mediaQueryList?.addEventListener) {
      mediaQueryList.addEventListener('change', onResize);
    }

    // backup for old device
    if (mediaQueryList && mediaQueryList?.addListener) {
      mediaQueryList.addListener(onResize);
    }

    return () => {
      mediaQueryList.removeEventListener('change', onResize);
    };
  }, []);

  return isMobile;
}

export default useIsMobile2;
