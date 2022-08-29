import { useContext, useMemo } from 'react';

import ThemeContext from './ThemeContext';
import light from '../light';
import dark from '../dark';

function useTheme() {
  const themeContext = useContext(ThemeContext);

  const theme = useMemo(() => (themeContext === 'light' ? light : dark), [themeContext]);

  return {
    theme
  };
}

export default useTheme;
