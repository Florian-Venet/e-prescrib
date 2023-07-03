import debounce from 'lodash/debounce';
import { useLayoutEffect, useState } from 'react';

const useIsMobile = (): {isMobile: boolean,isTablet: boolean} => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 1024);
    };
    window.addEventListener('resize', debounce(updateSize, 250));
    // updateSize();
    return (): void => window.removeEventListener('resize', updateSize);
  }, []);

  return {isMobile, isTablet};
};

export default useIsMobile;
