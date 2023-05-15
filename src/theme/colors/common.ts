import type { Color } from '@types';

const common: Record<'black' | 'white', Color> & Record<'gradationB' | 'gradationW', Color[]> = {
  black: '#000000',
  white: '#FFFFFF',
  gradationB: ['#000000', 'rgba(0, 0, 0, 0)'],
  gradationW: ['#FFFFFF', 'rgba(255, 255, 255, 0)']
};

export default common;
