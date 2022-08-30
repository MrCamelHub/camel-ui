import React, { useState } from 'react';
import type { ChangeEvent } from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Radio from '@components/Radio';

import { ThemeProvider } from '@theme';

export default {
  title: 'Components/Radio',
  component: Radio
} as ComponentMeta<typeof Radio>;

const Wrapper = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;

  & div {
    margin-right: 24px;
  }
`;

export function Default() {
  const [value, setValue] = useState('1');

  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Radio
          checked={value === '1'}
          value="1"
          onChange={({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
            setValue(currentTarget.value);
          }}
        />
        <Radio
          checked={value === '2'}
          value="2"
          onChange={({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
            setValue(currentTarget.value);
          }}
        />
      </Wrapper>
    </ThemeProvider>
  );
}

export function BrandColors() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Radio />
        <Radio checked />
        <Radio brandColor="black" />
        <Radio brandColor="black" checked />
      </Wrapper>
    </ThemeProvider>
  );
}
