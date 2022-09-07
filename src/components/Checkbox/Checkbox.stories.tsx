import React, { useState } from 'react';
import type { ChangeEvent } from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Checkbox from '@components/Checkbox';

import { ThemeProvider } from '@theme';

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Wrapper = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;

  & div {
    margin-right: 24px;
  }
`;

export function Default({ ...args }) {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Checkbox
          checked={checked}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setChecked(event.currentTarget.checked)
          }
          {...args}
        />
      </Wrapper>
    </ThemeProvider>
  );
}

export function DefaultCheckMarker() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Checkbox hideDefaultCheckMarker={false} />
        <Checkbox isRound={false} hideDefaultCheckMarker={false} />
      </Wrapper>
    </ThemeProvider>
  );
}

export function Rounds() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Checkbox />
        <Checkbox isRound={false} />
      </Wrapper>
    </ThemeProvider>
  );
}

export function BrandColors() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Checkbox brandColor="primary" />
        <Checkbox brandColor="primary" checked />
      </Wrapper>
      <Wrapper>
        <Checkbox isRound={false} brandColor="primary" />
        <Checkbox isRound={false} brandColor="primary" checked />
      </Wrapper>
    </ThemeProvider>
  );
}
