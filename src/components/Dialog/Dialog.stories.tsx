import { useState } from 'react';

import type { Meta } from '@storybook/react';
import Dialog from '@components/Dialog';
import Button from '@components/Button';

const meta: Meta<typeof Dialog> = {
  title: 'Experiment/Dialog',
  component: Dialog
};

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

export default meta;
