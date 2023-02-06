import type { PropsWithChildren } from 'react';
import React, { useMemo } from 'react';

import ThemeContext from '@theme/provider/ThemeContext';
import light from '@theme/light';
import GlobalReset from '@theme/GlobalReset';
import dark from '@theme/dark';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import type { ThemeMode } from '../../types';

export interface ThemeProviderProps {
  theme: ThemeMode;
  disableResetCSS?: boolean;
}

function ThemeProvider({
  children,
  theme,
  disableResetCSS = true
}: PropsWithChildren<ThemeProviderProps>) {
  const mrcamelTheme = useMemo(() => (theme === 'light' ? light : dark), [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      {!disableResetCSS && <GlobalReset />}
      <EmotionThemeProvider theme={mrcamelTheme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
