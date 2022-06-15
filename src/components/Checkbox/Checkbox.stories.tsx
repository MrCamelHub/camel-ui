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

export function Variants() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Checkbox variant="round" />
        <Checkbox variant="circle" />
      </Wrapper>
    </ThemeProvider>
  );
}

export function BrandColors() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Checkbox brandColor="black" />
        <Checkbox brandColor="black" checked />
        <Checkbox brandColor="primary" />
        <Checkbox brandColor="primary" checked />
      </Wrapper>
      <Wrapper>
        <Checkbox variant="circle" brandColor="black" />
        <Checkbox variant="circle" brandColor="black" checked />
        <Checkbox variant="circle" brandColor="primary" />
        <Checkbox variant="circle" brandColor="primary" checked />
      </Wrapper>
    </ThemeProvider>
  );
}
