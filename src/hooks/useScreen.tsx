import { useContext } from 'react';
import { ScreenContext } from '../context/screenProvider';

const useScreen = () => {
  const {
    isMobile,
    isSmall,
    isXSmall,
    isDesktopNavCollapsed,
    isMobilNavCollapsed,
    isHide,
    setIsDesktopNavCollapsed,
    setIsMobileNavCollapsed,
    setHide,
  } = useContext(ScreenContext);

  const collapsedNavDesktop = () => {
    setIsDesktopNavCollapsed(true);
  };

  const collapsedNavMobile = () => {
    setIsMobileNavCollapsed(true);
  };

  const expandedNavDesktop = () => {
    setIsDesktopNavCollapsed(false);
  };

  const expandedNavMobile = () => {
    setIsMobileNavCollapsed(false);
  };

  const hideNav = () => {
    setHide(true);
  };

  return {
    isHide,
    isMobile,
    isSmall,
    isXSmall,
    isDesktopNavCollapsed,
    isMobilNavCollapsed,
    collapsedNavDesktop,
    collapsedNavMobile,
    expandedNavDesktop,
    expandedNavMobile,
    hideNav,
  };
};

export default useScreen;
