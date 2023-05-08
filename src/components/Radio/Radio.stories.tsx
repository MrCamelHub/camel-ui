import type { ChangeEvent } from 'react';
import { useState } from 'react';

import type { Meta } from '@storybook/react';
import styled from '@emotion/styled';
import Radio from '@components/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio
};

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
  );
}

export function BrandColors() {
  return (
    <Wrapper>
      <Radio />
      <Radio checked />
      <Radio brandColor="black" />
      <Radio brandColor="black" checked />
    </Wrapper>
  );
}

export default meta;
