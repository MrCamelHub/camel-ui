import { useState } from 'react';

import type { Meta } from '@storybook/react';
import Icon from '@components/Icon';
import Box from '@components/Box';
import Accordion from '@components/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Experiment/Accordion',
  component: Accordion
};

export function Default({ ...args }) {
  const [open, setOpen] = useState(false);

  return (
    <Accordion
      open={open}
      onChange={() => setOpen((prevState) => !prevState)}
      title="Accordion"
      {...args}
    >
      <Box
        customStyle={{
          padding: 20
        }}
      >
        Accordion Content
      </Box>
    </Accordion>
  );
}

export function ExpandIcon() {
  const [open, setOpen] = useState(false);

  return (
    <Accordion
      open={open}
      onChange={() => setOpen((prevState) => !prevState)}
      title="Accordion"
      expandIcon={<Icon name="DownloadFilled" />}
    >
      <Box
        customStyle={{
          padding: 20
        }}
      >
        Accordion Content
      </Box>
    </Accordion>
  );
}

export function HideLine() {
  const [open, setOpen] = useState(false);

  return (
    <Accordion
      open={open}
      onChange={() => setOpen((prevState) => !prevState)}
      title="Accordion"
      hideLine={false}
    >
      <Box
        customStyle={{
          padding: 20
        }}
      >
        Accordion Content
      </Box>
    </Accordion>
  );
}

export function DisableRotate() {
  const [open, setOpen] = useState(false);

  return (
    <Accordion
      open={open}
      onChange={() => setOpen((prevState) => !prevState)}
      title="Accordion"
      disableRotate
    >
      <Box
        customStyle={{
          padding: 20
        }}
      >
        Accordion Content
      </Box>
    </Accordion>
  );
}

export default meta;
