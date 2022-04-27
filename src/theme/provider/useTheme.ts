import { useMemo, useContext } from 'react';
import { light } from '../light';
import ThemeContext from './ThemeContext';

function useTheme() {
  const themeContext = useContext(ThemeContext);

  const theme = useMemo(() => (themeContext === 'light' ? light : light), [themeContext]);

  return {
    theme
  };
}

export default useTheme;
