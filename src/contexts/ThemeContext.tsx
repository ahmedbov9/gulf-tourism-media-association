import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeContextProvider');
  }
  return context;
};

// Light theme with cool colors
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00a884',
      dark: '#002171',
      light: '#5472D3',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00BCD4', // Cool Cyan/Teal
      dark: '#00838F',
      light: '#62EFFF',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#d1d1d1', // Light blue-white background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A237E',
      secondary: '#3F51B5',
    },
  },
  typography: {
    fontFamily: '"Cairo", "Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 700,
    },
  },
});

// Dark theme with cool colors
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00a884', // Lighter blue for dark mode
      dark: '#0D47A1',
      light: '#64B5F6',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#26C6DA', // Brighter cyan for dark mode
      dark: '#00ACC1',
      light: '#80DEEA',
      contrastText: '#000000',
    },
    background: {
      default: '#0A1929', // Dark blue background
      paper: '#132F4C',
    },
    text: {
      primary: '#E3F2FD',
      secondary: '#BBDEFB',
    },
  },
  typography: {
    fontFamily: '"Cairo", "Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 700,
    },
  },
});

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('themeMode');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('themeMode', newMode ? 'dark' : 'light');
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
