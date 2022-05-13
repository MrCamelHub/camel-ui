import React, { useRef, useState } from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Typography from '@components/Typography';
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

  const anchorRef = useRef<HTMLButtonElement | null>(null);

  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Button
          variant="contained"
          ref={anchorRef}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          Open
        </Button>
        <Tooltip open={open} message={<Typography>MrCamel Tooltip!</Typography>} {...args} />
      </Wrapper>
    </ThemeProvider>
  );
}

export function BrandColors({ ...args }) {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Tooltip open brandColor="black" message={<Typography>black</Typography>} {...args} />
      </Wrapper>
      <Wrapper>
        <Tooltip
          open
          brandColor="primary-highlight"
          message={<Typography>primary-highlight</Typography>}
          {...args}
        />
      </Wrapper>
    </ThemeProvider>
  );
}

export function Placements() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Tooltip open placement="bottom" message={<Typography>bottom</Typography>} />
        <Tooltip open placement="top" message={<Typography>top</Typography>} />
        <Tooltip open placement="left" message={<Typography>left</Typography>} />
        <Tooltip open placement="right" message={<Typography>right</Typography>} />
      </Wrapper>
    </ThemeProvider>
  );
}

export function Rounds() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Tooltip open round="8" message={<Typography>8</Typography>} />
      </Wrapper>
      <Wrapper>
        <Tooltip open round="16" message={<Typography>16</Typography>} />
      </Wrapper>
    </ThemeProvider>
  );
}
