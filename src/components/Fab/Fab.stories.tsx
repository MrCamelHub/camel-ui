import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import Icon from '@components/Icon';
import Fab from '@components/Fab';

import { ThemeProvider } from '@theme';

export default {
  title: 'Components/Fab',
  component: Fab
} as ComponentMeta<typeof Fab>;

export function Default({ ...args }) {
  return (
    <ThemeProvider theme="light">
      <Fab {...args}>
        <Icon name="CaretUpOutlined" />
      </Fab>
    </ThemeProvider>
  );
}
