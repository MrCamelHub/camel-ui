import { useState } from 'react';

import type { Meta } from '@storybook/react';
import Icon from '@components/Icon';
import Flexbox from '@components/Flexbox';
import Button from '@components/Button';
import Box from '@components/Box';
import Accordion from '@components/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Experiment/Accordion',
  component: Accordion
};

export function Default({ ...args }) {
  const [open, setOpen] = useState(false);
  const [contents, setContents] = useState([1, 2]);

  return (
    <Flexbox direction="vertical" gap={16}>
      <Button
        variant="solid"
        brandColor="primary"
        onClick={() => setContents((prevState) => prevState.concat(prevState.length + 1))}
      >
        Accordion Content 추가
      </Button>
      <Accordion
        {...args}
        open={open}
        onChange={() => setOpen((prevState) => !prevState)}
        title="Accordion"
      >
        {contents.map((content) => (
          <Box
            customStyle={{
              padding: 20,
              border: '1px solid #EAEAEA'
            }}
          >
            Accordion Content {content}
          </Box>
        ))}
      </Accordion>
    </Flexbox>
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
