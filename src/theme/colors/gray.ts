import type { ColorCode, ColorKey } from '../../types';

const gray: Omit<
  {
    [key in ColorKey]: ColorCode;
  },
  '50A'
> = {
  '10': '#F5F6F7',
  '20': '#EDEEF0',
  '30': '#DCDDE0',
  '40': '#C2C3CC',
  '50': '#71737A',
  '60': '#5E6066',
  '70': '#313438',
  '80': '#1E2124',
  '90': '#111214'
};

export default gray;
