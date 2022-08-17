import type { ColorCode, ColorKey } from '../../types';

const grey: {
  [key in ColorKey]: ColorCode;
} = {
  '20': '#313438',
  '40': '#5E6066',
  '60': '#71737A',
  '80': '#C2C3CC',
  '90': '#DCDDE0',
  '95': '#EDEEF0',
  '98': '#F5F6F7'
};

export default grey;
