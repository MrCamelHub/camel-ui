import React, { useMemo, useState } from 'react';
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';

import ThemeContext from '@theme/provider/ThemeContext';
import PortalCounterContext from '@theme/provider/PortalCounterContext';
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
  const [count, setCount] = useState(0);
  const counter = useMemo<Partial<[number, Dispatch<SetStateAction<number>>]>>(
    () => [count, setCount],
    [count, setCount]
  );

  return (
    <ThemeContext.Provider value={theme}>
      {!disableResetCSS && <GlobalReset />}
      <EmotionThemeProvider theme={mrcamelTheme}>
        <PortalCounterContext.Provider value={counter}>{children}</PortalCounterContext.Provider>
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
