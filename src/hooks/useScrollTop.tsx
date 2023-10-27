import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.querySelectorAll('#root > div > div')[2].scrollTo(0, 0);
  }, [pathname]);
};

export default useScrollToTop;
