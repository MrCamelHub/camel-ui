import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Input from '@components/Input';

import { Icon } from '@components';

export default {
  title: 'Components/Input',
  component: Input
} as ComponentMeta<typeof Input>;

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
  return <Input {...args} placeholder="Text" />;
}

export function Variants() {
  return (
    <Wrapper>
      <Input variant="outlined" placeholder="Text" />
      <Input variant="contained" placeholder="Text" />
      <Input variant="underline" placeholder="Text" />
      <Input variant="inline" placeholder="Text" />
    </Wrapper>
  );
}

export function Sizes() {
  return (
    <Wrapper>
      <Input variant="outlined" size="small" placeholder="small" />
      <Input variant="outlined" size="medium" placeholder="medium" />
      <Input variant="outlined" size="large" placeholder="large" />
      <Input variant="outlined" size="xlarge" placeholder="xlarge" />
      <Input variant="outlined" size="xxlarge" placeholder="xxlarge" />
    </Wrapper>
  );
}

export function FullWidths() {
  return <Input fullWidth placeholder="Text" />;
}

export function Adornments() {
  return (
    <Input
      startAdornment={<Icon name="SearchOutlined" />}
      endAdornment={<Icon name="DeleteCircleFilled" />}
      placeholder="Text"
    />
  );
}

export function Unit() {
  return (
    <Input
      startAdornment={<Icon name="SearchOutlined" />}
      endAdornment={<Icon name="DeleteCircleFilled" />}
      placeholder="Text"
      unit="원"
    />
  );
}
