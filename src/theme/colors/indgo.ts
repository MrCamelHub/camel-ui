import type { ColorCode, ColorKey } from '../../types';

const indgo: {
  [key in ColorKey]: ColorCode;
} = {
  '10': '#F5F5FF',
  '20': '#E0E2FF',
  '30': '#AFB4FF',
  '40': '#8E96FF',
  '50': '#5C67FF',
  '60': '#464EBA',
  '70': '#373D8C',
  '80': '#1F2247',
  '90': '#181A29',
  '50A': '#2937FF'
};

export default indgo;
