import React, { useState } from 'react';

import type { ComponentMeta } from '@storybook/react';
import Toast from '@components/Toast';
import Button from '@components/Button';

import { ThemeProvider } from '@theme';

export default {
  title: 'Components/Toast',
  component: Toast
} as ComponentMeta<typeof Toast>;

export function Default({ ...args }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider theme="light">
      <Button variant="contained" brandColor="primary" onClick={() => setIsOpen(!isOpen)}>
        Open
      </Button>
      <Toast open={isOpen} onClose={() => setIsOpen(false)} {...args}>
        MrCamel Toast!!
      </Toast>
    </ThemeProvider>
  );
}
