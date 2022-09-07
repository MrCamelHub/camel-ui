import React, { useState } from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Tooltip from '@components/Tooltip';
import Button from '@components/Button';

import { ThemeProvider } from '@theme';

export default {
  title: 'Components/Tooltip',
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
    <ThemeProvider theme="light">
      <Wrapper>
        <Tooltip open={open} message="MrCamel Tooltip!" {...args}>
          <Button
            variant="contained"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            Open
          </Button>
        </Tooltip>
      </Wrapper>
    </ThemeProvider>
  );
}

export function BrandColors({ ...args }) {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Tooltip open brandColor="black" message="black" {...args} />
      </Wrapper>
      <Wrapper>
        <Tooltip open variant="ghost" brandColor="primary" message="primary" {...args} />
      </Wrapper>
    </ThemeProvider>
  );
}

export function Placements() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Tooltip open placement="bottom" message="bottom" />
        <Tooltip open placement="top" message="top" />
        <Tooltip open placement="left" message="left" />
        <Tooltip open placement="right" message="right" />
      </Wrapper>
    </ThemeProvider>
  );
}
