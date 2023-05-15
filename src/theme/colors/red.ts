import type { Color, ColorKey } from '@types';

const red: {
  [key in ColorKey]: Color;
} = {
  '10': '#FFF5F6',
  '20': '#FFE5E8',
  '30': '#FFA7AE',
  '40': '#FF818C',
  '50': '#FF5260',
  '60': '#BA3742',
  '70': '#8C2B33',
  '80': '#471A1E',
  '90': '#291517',
  '50A': '#E52535'
};

export default red;
