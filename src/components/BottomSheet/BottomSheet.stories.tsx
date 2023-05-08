import { useState } from 'react';

import type { Meta } from '@storybook/react';
import Button from '@components/Button';
import BottomSheet from '@components/BottomSheet';

const meta: Meta<typeof BottomSheet> = {
  title: 'Experiment/BottomSheet',
  component: BottomSheet
};

export function Default({ ...args }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="solid" brandColor="primary" onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <BottomSheet open={isOpen} {...args} onClose={() => setIsOpen(false)}>
        <h1>MrCamel BottomSheet!</h1>
        <Button variant="solid" brandColor="primary" onClick={() => setIsOpen(false)}>
          Close
        </Button>
      </BottomSheet>
    </>
  );
}

export default meta;
