import { createContext } from 'react';

import type { ThemeType } from '../../types';

const ThemeContext = createContext<ThemeType>('light');

export default ThemeContext;
