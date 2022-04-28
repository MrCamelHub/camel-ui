import type { CommonColorKey, ColorCode } from '../../types';

const grey: {
  [key in CommonColorKey]: ColorCode;
} = {
  '20': '#333333',
  '40': '#666666',
  '60': '#999999',
  '80': '#CCCCCC',
  '90': '#E6E6E6',
  '96': '#F5F5F5',
  '98': '#FAFAFA'
};

export default grey;
