import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { dashboardTheme } from './dashboardTheme';



export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ dashboardTheme }>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      
      { children }
    </ThemeProvider>
  )
}