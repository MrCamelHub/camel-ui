import type { Color, ColorKey } from '@types';

const gray: Omit<
  {
    [key in ColorKey]: Color;
  },
  '50A'
> = {
  '10': '#F5F6F7',
  '20': '#EFF0F2',
  '30': '#DCDDE0',
  '40': '#C6C7CC',
  '50': '#7B7D85',
  '60': '#5E6066',
  '70': '#313438',
  '80': '#1E2124',
  '90': '#111214'
};

export default gray;
