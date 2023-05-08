import type { Meta } from '@storybook/react';
import styled from '@emotion/styled';
import Stepper from '@components/Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper
};

const Wrapper = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;

  & div {
    margin-bottom: 24px;
  }
`;

export function Default({ ...args }) {
  return <Stepper count={5} {...args} />;
}

export function Counts() {
  return (
    <Wrapper>
      <Stepper count={1} />
      <Stepper count={2} />
      <Stepper count={3} />
      <Stepper count={4} />
      <Stepper count={5} />
    </Wrapper>
  );
}

export function Values() {
  return (
    <Wrapper>
      <Stepper count={5} value={1} />
      <Stepper count={5} value={2} />
      <Stepper count={5} value={3} />
      <Stepper count={5} value={4} />
      <Stepper count={5} value={5} />
    </Wrapper>
  );
}

export default meta;
