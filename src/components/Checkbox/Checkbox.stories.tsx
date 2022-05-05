import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { ComponentMeta } from '@storybook/react';
import Checkbox from '@components/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

export function Default() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(event: ChangeEvent<HTMLInputElement>) => setChecked(event.currentTarget.checked)}
    />
  );
}
