import React, { useState } from 'react';
import type { ComponentMeta } from '@storybook/react';
import Toast from '@components/Toast';
import Button from '@components/Button';

export default {
  title: 'Components/Toast',
  component: Toast
} as ComponentMeta<typeof Toast>;

export function Default() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="contained" brandColor="primary" onClick={() => setIsOpen(!isOpen)}>
        Open
      </Button>
      <Toast open={isOpen} onClose={() => setIsOpen(false)} autoHideDuration={3000}>
        <h1>MrCamel Toast!!</h1>
      </Toast>
    </>
  );
}
