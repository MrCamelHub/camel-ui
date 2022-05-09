import { ColorKey, ColorCode } from '../../types';

const grey: {
  [key in ColorKey]: ColorCode;
} = {
  '20': '#333333',
  '40': '#666666',
  '60': '#999999',
  '80': '#CCCCCC',
  '90': '#E6E6E6',
  '95': '#F2F2F2',
  '98': '#FAFAFA'
};

export default grey;
