import React, { useState } from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import CheckboxGroup from '@components/CheckboxGroup';

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup
} as ComponentMeta<typeof CheckboxGroup>;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  padding: 1.5rem;

  & > div {
    margin-right: 24px;
  }
`;

export function Default({ ...args }) {
  const [checked, setChecked] = useState(false);
  return (
    <CheckboxGroup
      {...args}
      checked={checked}
      onChange={() => setChecked(!checked)}
      text="Text"
      subText="SubText"
    />
  );
}

export function Sizes({ ...args }) {
  const [checked, setChecked] = useState(false);
  return (
    <Wrapper>
      <CheckboxGroup
        {...args}
        size="large"
        checked={checked}
        onChange={() => setChecked(!checked)}
        text="large"
        subText="SubText"
      />
      <CheckboxGroup
        {...args}
        checked={checked}
        onChange={() => setChecked(!checked)}
        text="medium"
        subText="SubText"
      />
      <CheckboxGroup
        {...args}
        size="small"
        checked={checked}
        onChange={() => setChecked(!checked)}
        text="small"
        subText="SubText"
      />
    </Wrapper>
  );
}
