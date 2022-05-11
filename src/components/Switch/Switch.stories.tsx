import React, { useState } from 'react';
import type { ComponentMeta } from '@storybook/react';
import Switch from '@components/Switch';

export default {
  title: 'Components/Switch',
  component: Switch
} as ComponentMeta<typeof Switch>;

export function Default({ ...args }) {
  const [checked, setChecked] = useState(false);

  return <Switch checked={checked} onChange={() => setChecked(!checked)} {...args} />;
}
