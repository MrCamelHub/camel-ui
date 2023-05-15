import { createContext } from 'react';

import type { ThemeMode } from '@types';

const ThemeContext = createContext<ThemeMode>('light');

export default ThemeContext;
