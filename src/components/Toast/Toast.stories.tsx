import { useState } from 'react';

import type { ComponentMeta } from '@storybook/react';
import Toast from '@components/Toast';
import Button from '@components/Button';

export default {
  title: 'Experiment/Toast',
  component: Toast
} as ComponentMeta<typeof Toast>;

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
