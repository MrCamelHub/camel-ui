import { useState } from 'react';

import type { Meta } from '@storybook/react';
import styled from '@emotion/styled';
import RadioGroup from '@components/RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup
};

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

export function Sizes() {
  const [checked, setChecked] = useState(false);
  return (
    <Wrapper>
      <RadioGroup
        size="large"
        checked={checked}
        onChange={() => setChecked(true)}
        text="large"
        subText="SubText"
      />
      <RadioGroup
        checked={checked}
        onChange={() => setChecked(true)}
        text="medium"
        subText="SubText"
      />
      <RadioGroup
        size="small"
        checked={checked}
        onChange={() => setChecked(true)}
        text="small"
        subText="SubText"
      />
    </Wrapper>
  );
}

export default meta;
