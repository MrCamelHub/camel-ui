import React, { useState } from 'react';

import type { ComponentMeta } from '@storybook/react';
import Dialog from '@components/Dialog';
import Button from '@components/Button';

export default {
  title: 'Components/Dialog',
  component: Dialog
} as ComponentMeta<typeof Dialog>;

export function Default({ ...args }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="contained" brandColor="primary" onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} {...args}>
        <h1>MrCamel Dialog!</h1>
        <div>
          <Button variant="outlined" brandColor="gray" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>
      </Dialog>
    </>
  );
}
