import { useContext, useMemo } from 'react';

import light from '../light';
import dark from '../dark';
import ThemeContext from './ThemeContext';

function useTheme() {
  const themeContext = useContext(ThemeContext);

  const theme = useMemo(() => (themeContext === 'light' ? light : dark), [themeContext]);

  return {
    theme
  };
}

export default useTheme;
