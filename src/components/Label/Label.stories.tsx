import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Label from '@components/Label';

import { ThemeProvider } from '@theme';

export default {
  title: 'Components/Label',
  component: Label
} as ComponentMeta<typeof Label>;

const Wrapper = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;

  & label {
    margin-right: 24px;
  }
`;

export function Default({ ...args }) {
  return (
    <ThemeProvider theme="light">
      <Label {...args} text="LABEL" />
    </ThemeProvider>
  );
}

export function Variants() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Label variant="outlined" text="outlined" />
        <Label variant="ghost" text="ghost" />
        <Label variant="contained" text="contained" />
      </Wrapper>
    </ThemeProvider>
  );
}

export function BrandColors() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <p>outlined</p>
        <Label variant="outlined" brandColor="grey" text="grey" />
        <Label variant="outlined" brandColor="black" text="black" />
        <Label variant="outlined" brandColor="primary" text="primary" />
        <Label variant="outlined" brandColor="red" text="red" />
        <Label variant="outlined" brandColor="purple" text="purple" />
        <Label variant="outlined" brandColor="primary-dark" text="primary-dark" />
      </Wrapper>
      <Wrapper>
        <p>ghost</p>
        <Label variant="ghost" brandColor="grey" text="grey" />
        <Label variant="ghost" brandColor="black" text="black" />
        <Label variant="ghost" brandColor="primary" text="primary" />
        <Label variant="ghost" brandColor="red" text="red" />
        <Label variant="ghost" brandColor="purple" text="purple" />
        <Label variant="ghost" brandColor="primary-dark" text="primary-dark" />
      </Wrapper>
      <Wrapper>
        <p>contained</p>
        <Label variant="contained" brandColor="grey" text="grey" />
        <Label variant="contained" brandColor="black" text="black" />
        <Label variant="contained" brandColor="primary" text="primary" />
        <Label variant="contained" brandColor="red" text="red" />
        <Label variant="contained" brandColor="purple" text="purple" />
        <Label variant="contained" brandColor="primary-dark" text="primary-dark" />
      </Wrapper>
    </ThemeProvider>
  );
}

export function Rounds() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Label text="0" round="0" />
        <Label text="2" round="2" />
        <Label text="4" round="4" />
        <Label text="8" round="8" />
        <Label text="16" round="16" />
        <Label text="24" round="24" />
      </Wrapper>
    </ThemeProvider>
  );
}
