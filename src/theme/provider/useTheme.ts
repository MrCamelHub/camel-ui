import { useMemo, useContext } from 'react';

import ThemeContext from './ThemeContext';
import { light } from '../light';

function useTheme() {
  const themeContext = useContext(ThemeContext);

  const theme = useMemo(() => (themeContext === 'light' ? light : light), [themeContext]);

  return {
    theme
  };
}

export default useTheme;
