import { useState } from 'react';

import type { Meta } from '@storybook/react';
import Button from '@components/Button';
import BottomSheet from '@components/BottomSheet';

const meta: Meta<typeof BottomSheet> = {
  title: 'Experiment/BottomSheet',
  component: BottomSheet
};

export function Default({ ...args }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="solid" brandColor="primary" onClick={() => setOpen(true)}>
        Open
      </Button>
      <BottomSheet open={open} {...args} onClose={() => setOpen(false)}>
        <h1>Camel BottomSheet!</h1>
        <Button variant="solid" brandColor="primary" onClick={() => setOpen(false)}>
          Close
        </Button>
      </BottomSheet>
    </>
  );
}

export default meta;
