import React from 'react';
import type { ComponentMeta } from '@storybook/react';
import Fab from '@components/Fab';
import Icon from '@components/Icon';

export default {
  title: 'Components/Fab',
  component: Fab
} as ComponentMeta<typeof Fab>;

export function Default({ ...args }) {
  return (
    <Fab {...args}>
      <Icon name="CaretUpOutlined" />
    </Fab>
  );
}
