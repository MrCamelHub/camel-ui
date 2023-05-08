import { useState } from 'react';

import type { Meta } from '@storybook/react';
import Toast from '@components/Toast';
import Button from '@components/Button';

const meta: Meta<typeof Toast> = {
  title: 'Experiment/Toast',
  component: Toast
};

export function Default({ ...args }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="solid" brandColor="primary" onClick={() => setIsOpen(!isOpen)}>
        Open
      </Button>
      <Toast open={isOpen} onClose={() => setIsOpen(false)} {...args}>
        MrCamel Toast!!
      </Toast>
    </>
  );
}

export default meta;
