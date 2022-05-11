import React from 'react';
import styled from '@emotion/styled';
import type { ComponentMeta } from '@storybook/react';
import Label from '@components/Label';

export default {
  title: 'Components/Label',
  component: Label
} as ComponentMeta<typeof Label>;

const Wrapper = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;

  & div {
    margin-right: 24px;
  }
`;

const ColWrapper = styled(Wrapper)`
  display: inline-flex;
  flex-direction: column;

  & div {
    margin-right: 0;
    margin-bottom: 24px;
  }
`;

export function Default({ ...args }) {
  return <Label {...args} text="LABEL" />;
}

export function Variants() {
  return (
    <Wrapper>
      <Label text="primary" />
      <Label variant="contained" text="secondary-red" brandColor="secondary-red" />
    </Wrapper>
  );
}

export function Rounds() {
  return (
    <Wrapper>
      <Label text="0" round="0" />
      <Label text="2" round="2" />
      <Label text="4" round="4" />
      <Label text="8" round="8" />
      <Label text="16" round="16" />
      <Label text="24" round="24" />
    </Wrapper>
  );
}

export function BrandColors() {
  return (
    <ColWrapper>
      <Label text="primary" brandColor="primary" />
      <Label text="primary-light1" brandColor="primary-light1" />
      <Label text="primary-light2" brandColor="primary-light2" />
      <Label text="primary-dark" brandColor="primary-dark" />
      <Label text="secondary-red" brandColor="secondary-red" />
      <Label text="common-black" brandColor="common-black" />
      <Label text="common-grey" brandColor="common-grey" />
      <Label text="common-grey-light" brandColor="common-grey-light" />
    </ColWrapper>
  );
}
