import React, { useState, Suspense } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { AppContainer, LeftColumn, RightColumn, ThemeToggleButton, IconWrapper } from './styles/components/LayoutStyles';
import { lightTheme, darkTheme } from './styles/theme';
import Profile from './components/Profile';
import Experience from './components/Experience';

const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Contact = React.lazy(() => import('./components/Contact'));
const Certifications = React.lazy(() => import('./components/Certifications'));

const SunIcon = (): React.JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = (): React.JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const getInitialTheme = (): 'light' | 'dark' => {
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const App = (): React.JSX.Element => {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const next = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  const isLight = theme === 'light';

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ThemeToggleButton onClick={toggleTheme} $isLight={isLight} aria-label="Toggle dark mode">
        <IconWrapper $isLight={isLight} $visible={isLight}>
          <SunIcon />
        </IconWrapper>
        <IconWrapper $isLight={isLight} $visible={!isLight}>
          <MoonIcon />
        </IconWrapper>
      </ThemeToggleButton>
      <AppContainer>
        <LeftColumn>
          <Profile />
          <Suspense fallback={<div role="status" aria-live="polite">Loading...</div>}>
            <Contact />
            <Education />
            <Skills />
            <Certifications />
          </Suspense>
        </LeftColumn>
        <RightColumn>
          <Experience />
        </RightColumn>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
