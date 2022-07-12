import { useState, useEffect } from 'react';

const getIsMobile = () => window.innerWidth <= 1024;

function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => setIsMobile(getIsMobile());
    window.addEventListener('resize', onResize);

    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;
