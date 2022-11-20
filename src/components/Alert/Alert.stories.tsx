import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Alert from '@components/Alert';

export default {
  title: 'Components/Alert',
  component: Alert
} as ComponentMeta<typeof Alert>;

const AlertWrapper = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;

  & div {
    padding: 1rem;
    margin-right: 0;
    margin-bottom: 24px;
  }
`;

export function Default({ ...args }) {
  return <Alert {...args}>Alert</Alert>;
}

export function Rounds() {
  return (
    <AlertWrapper>
      <Alert round={0}>round 0</Alert>
      <Alert round={2}>round 2</Alert>
      <Alert round={4}>round 4</Alert>
      <Alert round={8}>round 8</Alert>
      <Alert round={16}>round 16</Alert>
      <Alert round={24}>round 24</Alert>
    </AlertWrapper>
  );
}

export function BrandColors() {
  return (
    <AlertWrapper>
      <Alert brandColor="primary">primary</Alert>
      <Alert brandColor="primary-dark">primary-dark</Alert>
      <Alert brandColor="primary-light">primary-light</Alert>
      <Alert brandColor="primary-highlight">primary-highlight</Alert>
      <Alert brandColor="primary-bgLight">primary-highlight</Alert>
      <Alert brandColor="red">red</Alert>
      <Alert brandColor="purple">purple</Alert>
      <Alert brandColor="gray">gray</Alert>
      <Alert brandColor="black">black</Alert>
    </AlertWrapper>
  );
}
