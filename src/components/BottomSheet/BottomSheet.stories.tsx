import React, { useState } from 'react';

import type { ComponentMeta } from '@storybook/react';
import Button from '@components/Button';
import BottomSheet from '@components/BottomSheet';

import { ThemeProvider } from '@theme';

export default {
  title: 'Components/BottomSheet',
  component: BottomSheet
} as ComponentMeta<typeof BottomSheet>;

export function Default({ ...args }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider theme="light">
      <Button variant="contained" brandColor="primary" onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <BottomSheet open={isOpen} onClose={() => setIsOpen(false)} {...args}>
        <h1>MrCamel BottomSheet!</h1>
        <Button variant="contained" brandColor="primary" onClick={() => setIsOpen(false)}>
          Close
        </Button>
      </BottomSheet>
    </ThemeProvider>
  );
}
