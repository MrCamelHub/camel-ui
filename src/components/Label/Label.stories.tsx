import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Label from '@components/Label';

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
  return <Label {...args} text="LABEL" />;
}

export function Variants() {
  return (
    <Wrapper>
      <Label variant="outlined" text="outlined" />
      <Label variant="ghost" text="ghost" />
      <Label variant="contained" text="contained" />
      <Label variant="darked" text="darked" />
    </Wrapper>
  );
}

export function BrandColors() {
  return (
    <>
      <Wrapper>
        <p>outlined</p>
        <Label variant="outlined" brandColor="black" text="black" />
        <Label variant="outlined" brandColor="primary" text="primary" />
        <Label variant="outlined" brandColor="red" text="red" />
      </Wrapper>
      <Wrapper>
        <p>ghost</p>
        <Label variant="ghost" brandColor="black" text="black" />
        <Label variant="ghost" brandColor="primary" text="primary" />
        <Label variant="ghost" brandColor="red" text="red" />
      </Wrapper>
      <Wrapper>
        <p>contained</p>
        <Label variant="contained" brandColor="black" text="black" />
        <Label variant="contained" brandColor="primary" text="primary" />
        <Label variant="contained" brandColor="red" text="red" />
      </Wrapper>
      <Wrapper>
        <p>dakred</p>
        <Label variant="darked" brandColor="primary-light" text="primary-light" />
        <Label variant="darked" brandColor="red" text="red" />
      </Wrapper>
    </>
  );
}

export function Sizes() {
  return (
    <Wrapper>
      <Label text="small" size="small" />
      <Label text="xsmall" size="xsmall" />
    </Wrapper>
  );
}
