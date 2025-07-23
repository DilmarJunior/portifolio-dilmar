"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface Theme {
  colors:  Record<string, string>;
}

const themes: Record<'light' | 'dark', Theme> = {
  light: {
    colors: {
      background: '#ffffff',
      primary: '#012a4a',
      secondary: '#013a63', 
      tertiary: '#01497c',
      quaternary: '#014f86',
      quinary: '#2a6f97',
      senary: '#2c7da0',
      septenary: '#468faf',
      octonary: '#61a5c2',
      nonary: '#89c2d9',
      decenary: '#a9d6e5',
    }
  },
  dark: {
    colors: { 
      background: '#000000',
      primary: '#f8f9fa',
      secondary: '#e9ecef', 
      tertiary: '#dee2e6',
      quaternary: '#dee2e6',
      quinary: '#ced4da',
      senary: '#adb5bd',
      septenary: '#6c757d',
      octonary: '#495057',
      nonary: '#343a40',
      decenary: '#212529',
    }
  },
};

interface ScreenSize {
  mobile: boolean;
  tablet: boolean;
  laptop: boolean;
  desktop: boolean;
  wide: boolean;
}

interface ThemeContextType {
  theme: Theme;
  screenSize: ScreenSize;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(themes.light);
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    mobile: false,
    tablet: false,
    laptop: false,
    desktop: false,
    wide: false,
  });

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [theme]);

  useEffect(() => { 
    const handleResize = () => {
      const width = window.innerWidth;
      console.log("Window width:", width);
      const newScreenSize = { 
        mobile: width < 640,
        tablet: width >= 640 && width < 1024,
        laptop: width >= 1024 && width < 1280,
        desktop: width >= 1280 && width < 1536,
        wide: width >= 1536,
      }
      setScreenSize(newScreenSize)
    }

    handleResize()
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, screenSize, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
