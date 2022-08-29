import type { ColorCode, ColorKey } from '../../types';

const blue: {
  [key in ColorKey]: ColorCode;
} = {
  '10': '#F5F8FF',
  '20': '#E0EAFF',
  '30': '#A7C4FF',
  '40': '#81ABFF',
  '50': '#528BFF',
  '60': '#3763BA',
  '70': '#2B4B8C',
  '80': '#1A2947',
  '90': '#151C29',
  '50A': '#1463FF'
};

export default blue;
