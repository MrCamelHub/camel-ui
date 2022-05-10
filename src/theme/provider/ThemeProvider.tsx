import React, { PropsWithChildren, useMemo } from 'react';

import { light } from '@theme/light';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import ThemeContext from './ThemeContext';
import type { ThemeType } from '../../types';

export interface ThemeProviderProps {
  theme: ThemeType;
}

function ThemeProvider({ children, theme }: PropsWithChildren<ThemeProviderProps>) {
  const mrcamelTheme = useMemo(() => light, []);

  return (
    <ThemeContext.Provider value={theme}>
      <EmotionThemeProvider theme={mrcamelTheme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
