import { useState } from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Tooltip from '@components/Tooltip';
import Button from '@components/Button';

export default {
  title: 'Experiment/Tooltip',
  component: Tooltip
} as ComponentMeta<typeof Tooltip>;

const Wrapper = styled.div`
  margin-top: 1.5rem;
  padding: 3rem;
  margin-left: 100px;
`;

export function Default({ ...args }) {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Tooltip open={open} message="MrCamel Tooltip!" {...args}>
        <Button
          variant="solid"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          Open
        </Button>
      </Tooltip>
    </Wrapper>
  );
}

export function BrandColors({ ...args }) {
  return (
    <>
      <Wrapper>
        <Tooltip open brandColor="black" message="black" {...args} />
      </Wrapper>
      <Wrapper>
        <Tooltip open variant="ghost" brandColor="primary" message="primary" {...args} />
      </Wrapper>
    </>
  );
}

export function Placements() {
  return (
    <Wrapper>
      <Tooltip open placement="bottom" message="bottom" />
      <Tooltip open placement="top" message="top" />
      <Tooltip open placement="left" message="left" />
      <Tooltip open placement="right" message="right" />
    </Wrapper>
  );
}
