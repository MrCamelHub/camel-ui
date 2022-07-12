import React, { useMemo, useState } from 'react';
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';

import { light } from '@theme/light';
import GlobalReset from '@theme/GlobalReset';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import ThemeContext from './ThemeContext';
import PortalCounterContext from './PortalCounterContext';
import type { ThemeType } from '../../types';

export interface ThemeProviderProps {
  theme: ThemeType;
}

function ThemeProvider({ children, theme }: PropsWithChildren<ThemeProviderProps>) {
  const mrcamelTheme = useMemo(() => light, []);
  const [count, setCount] = useState(0);
  const counter = useMemo<Partial<[number, Dispatch<SetStateAction<number>>]>>(
    () => [count, setCount],
    [count, setCount]
  );

  return (
    <ThemeContext.Provider value={theme}>
      <GlobalReset />
      <EmotionThemeProvider theme={mrcamelTheme}>
        <PortalCounterContext.Provider value={counter}>{children}</PortalCounterContext.Provider>
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
