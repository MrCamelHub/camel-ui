import React, { useState } from 'react';

import type { ComponentMeta } from '@storybook/react';
import Dialog from '@components/Dialog';
import Button from '@components/Button';

import { ThemeProvider } from '@theme';

export default {
  title: 'Components/Dialog',
  component: Dialog
} as ComponentMeta<typeof Dialog>;

export function Default({ ...args }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider theme="light">
      <Button variant="contained" brandColor="primary" onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} {...args}>
        <h1>MrCamel Dialog!</h1>
        <div>
          <Button variant="outlined" brandColor="grey" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>
      </Dialog>
    </ThemeProvider>
  );
}
