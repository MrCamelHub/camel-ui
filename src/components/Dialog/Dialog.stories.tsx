import { useState } from 'react';

import type { Meta } from '@storybook/react';
import Dialog from '@components/Dialog';
import Button from '@components/Button';

const meta: Meta<typeof Dialog> = {
  title: 'Experiment/Dialog',
  component: Dialog
};

export function Default({ ...args }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="solid" brandColor="primary" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Dialog open={open} {...args} onClose={() => setOpen(false)}>
        <h1>Camel Dialog!</h1>
        <div>
          <Button variant="outline" brandColor="gray" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>
      </Dialog>
    </>
  );
}

export default meta;
