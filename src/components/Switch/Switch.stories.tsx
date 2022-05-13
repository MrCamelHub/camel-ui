import React, { useState } from 'react';

import type { ComponentMeta } from '@storybook/react';
import Switch from '@components/Switch';

import { ThemeProvider } from '@theme';

export default {
  title: 'Components/Switch',
  component: Switch
} as ComponentMeta<typeof Switch>;

export function Default({ ...args }) {
  const [checked, setChecked] = useState(false);

  return (
    <ThemeProvider theme="light">
      <Switch checked={checked} onChange={() => setChecked(!checked)} {...args} />
    </ThemeProvider>
  );
}
