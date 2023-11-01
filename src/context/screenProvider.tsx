import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface IScreenContext {
  isSmall: boolean;
  isXSmall: boolean;
  isMobile: boolean;
  isDesktopNavCollapsed: boolean;
  isMobilNavCollapsed: boolean;
  isHide: boolean;
  setIsDesktopNavCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMobileNavCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ScreenContext = React.createContext<IScreenContext | null>(null);

const ScreenProvider = ({ children }) => {
  const isSmall = useMediaQuery({ query: '(max-width: 1500px)' });
  const isXSmall = useMediaQuery({ query: '(max-width: 1200px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  const [isDesktopNavCollapsed, setIsDesktopNavCollapsed] = useState<boolean>(false);
  const [isMobilNavCollapsed, setIsMobileNavCollapsed] = useState<boolean>(false);

  const [isHide, setHide] = useState<boolean>(false);

  return (
    <ScreenContext.Provider
      value={{
        isHide,
        isSmall,
        isXSmall,
        isMobile,
        isDesktopNavCollapsed,
        isMobilNavCollapsed,
        setHide,
        setIsDesktopNavCollapsed,
        setIsMobileNavCollapsed,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenProvider;
