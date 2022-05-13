import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Rating from '@components/Rating';

import { ThemeProvider } from '@theme';

export default {
  title: 'Components/Rating',
  component: Rating
} as ComponentMeta<typeof Rating>;

const Wrapper = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;

  & div {
    margin-bottom: 24px;
  }
`;

export function Default({ ...args }) {
  return (
    <ThemeProvider theme="light">
      <Rating count={5} {...args} />
    </ThemeProvider>
  );
}

export function Counts() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Rating count={1} />
        <Rating count={2} />
        <Rating count={3} />
        <Rating count={4} />
        <Rating count={5} />
      </Wrapper>
    </ThemeProvider>
  );
}

export function Values() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Rating count={5} value={1} />
        <Rating count={5} value={2} />
        <Rating count={5} value={3} />
        <Rating count={5} value={4} />
        <Rating count={5} value={5} />
      </Wrapper>
    </ThemeProvider>
  );
}

export function Size() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Rating count={5} value={1} size="small" />
        <Rating count={5} value={1} />
        <Rating count={5} value={1} size="large" />
      </Wrapper>
    </ThemeProvider>
  );
}
