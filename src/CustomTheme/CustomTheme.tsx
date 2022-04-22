import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { ReactNode } from 'react';

export const theme = createTheme({
  palette: {
    primary: purple,
  },
});

export const CustomTheme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
