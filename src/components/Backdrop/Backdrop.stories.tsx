import { useState } from 'react';

import type { Meta } from '@storybook/react';
import Button from '@components/Button';

import Backdrop from '.';

const meta: Meta<typeof Backdrop> = {
  title: 'Experiment/Backdrop',
  component: Backdrop
};

export function Default({ ...args }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="solid" brandColor="primary" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Backdrop {...args} open={open} onClose={() => setOpen(false)}>
        <Button variant="solid" brandColor="primary" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Backdrop>
    </>
  );
}

export function Centered({ ...args }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="solid" brandColor="primary" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Backdrop {...args} centered open={open} onClose={() => setOpen(false)}>
        <Button variant="solid" brandColor="primary" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Backdrop>
    </>
  );
}

export default meta;
