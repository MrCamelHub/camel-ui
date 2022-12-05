import React, { useState } from 'react';

import type { ComponentMeta } from '@storybook/react';
import Dialog from '@components/Dialog';
import Button from '@components/Button';

export default {
  title: 'Experiment/Dialog',
  component: Dialog
} as ComponentMeta<typeof Dialog>;

export function Default({ ...args }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="solid" brandColor="primary" onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <Dialog open={isOpen} {...args} onClose={() => setIsOpen(false)}>
        <h1>MrCamel Dialog!</h1>
        <div>
          <Button variant="outline" brandColor="gray" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>
      </Dialog>
    </>
  );
}
