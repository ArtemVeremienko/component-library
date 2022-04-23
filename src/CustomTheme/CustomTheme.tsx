import { createTheme, ThemeProvider } from '@mui/material';
import { orange, purple } from '@mui/material/colors';
import { ReactNode } from 'react';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: purple,
  },
  status: {
    danger: orange[600],
  },
});

export const CustomTheme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
