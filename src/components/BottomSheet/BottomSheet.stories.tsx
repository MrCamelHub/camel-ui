import React, { useState } from 'react';
import type { ComponentMeta } from '@storybook/react';
import BottomSheet from '@components/BottomSheet';
import Button from '@components/Button';

export default {
  title: 'Components/BottomSheet',
  component: BottomSheet
} as ComponentMeta<typeof BottomSheet>;

export function Default({ ...args }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="contained" brandColor="primary" onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <BottomSheet open={isOpen} onClose={() => setIsOpen(false)} {...args}>
        <h1>MrCamel BottomSheet!</h1>
        <Button brandColor="common-grey" onClick={() => setIsOpen(false)}>
          Close
        </Button>
      </BottomSheet>
    </>
  );
}
