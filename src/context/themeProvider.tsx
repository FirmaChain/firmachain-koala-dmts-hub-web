import { createContext, useState, ReactNode, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { light, dark } from '../themes/mode';
import sizeDesktop from '../themes/sizeDesktop';
import sizeMobile from '../themes/sizeMobile';

interface IThemeContext {
  theme: typeof light | typeof dark;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const lightRaw = light;
  const darkRaw = dark;

  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
  const [theme, setTheme] = useState('light');
  const [themeMode, setThemeMode] = useState<any>(lightRaw);

  useEffect(() => {
    const targetTheme = theme === 'light' ? { ...lightRaw } : { ...darkRaw };

    targetTheme.sizes = isMobile ? sizeMobile : sizeDesktop;

    setThemeMode(targetTheme);
  }, [isMobile, theme]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme: themeMode, toggleTheme }}>
      <StyledThemeProvider theme={themeMode}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
