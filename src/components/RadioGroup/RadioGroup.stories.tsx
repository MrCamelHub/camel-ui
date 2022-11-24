import React, { useState } from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import RadioGroup from '@components/RadioGroup';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup
} as ComponentMeta<typeof RadioGroup>;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  padding: 1.5rem;

  & button {
    margin-right: 24px;
  }
`;

export function Default({ ...args }) {
  const [checked, setChecked] = useState(false);
  return (
    <RadioGroup
      {...args}
      checked={checked}
      onChange={() => setChecked(true)}
      text="Text"
      subText="SubText"
      value={1}
    />
  );
}

export function Sizes({ ...args }) {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <p>large</p>
      <Wrapper>
        <RadioGroup
          {...args}
          size="large"
          checked={checked}
          onChange={() => setChecked(true)}
          text="Text"
          subText="SubText"
        />
      </Wrapper>
      <p>medium</p>
      <Wrapper>
        <RadioGroup
          {...args}
          checked={checked}
          onChange={() => setChecked(true)}
          text="Text"
          subText="SubText"
        />
      </Wrapper>
      <p>small</p>
      <Wrapper>
        <RadioGroup
          {...args}
          size="small"
          checked={checked}
          onChange={() => setChecked(true)}
          text="Text"
          subText="SubText"
        />
      </Wrapper>
    </>
  );
}
