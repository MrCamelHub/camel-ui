import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import Flexbox from '@components/Flexbox';

import { useTheme } from '@theme';

export default {
  title: 'Experiment/Flexbox',
  component: Flexbox
} as ComponentMeta<typeof Flexbox>;

export function Default({ ...args }) {
  const {
    theme: {
      palette: { common }
    }
  } = useTheme();
  return (
    <Flexbox {...args} customStyle={{ padding: 8, backgroundColor: common.ui80 }}>
      <div>ITEM1</div>
      <div>ITEM2</div>
      <div>ITEM3</div>
      <div>ITEM4</div>
      <div>ITEM5</div>
    </Flexbox>
  );
}
