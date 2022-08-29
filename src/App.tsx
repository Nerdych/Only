import React from 'react';
import { Header } from './components/common/Header';
import { GlobalStyles } from './styles/global';
import { AppRouter } from './router/AppRouter/AppRouter';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from './styles/theme';
import { UserProvider } from './context';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <UserProvider>
        <Header />
        <AppRouter />
      </UserProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
