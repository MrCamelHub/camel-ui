import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Rating from '@components/Rating';

export default {
  title: 'Components/Rating',
  component: Rating
} as ComponentMeta<typeof Rating>;

const Wrapper = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;

  & div {
    margin-bottom: 24px;
  }
`;

export function Default({ ...args }) {
  return <Rating count={5} {...args} />;
}

export function Counts() {
  return (
    <Wrapper>
      <Rating count={1} />
      <Rating count={2} />
      <Rating count={3} />
      <Rating count={4} />
      <Rating count={5} />
    </Wrapper>
  );
}

export function Values() {
  return (
    <Wrapper>
      <Rating count={5} value={1} />
      <Rating count={5} value={2} />
      <Rating count={5} value={3} />
      <Rating count={5} value={4} />
      <Rating count={5} value={5} />
    </Wrapper>
  );
}

export function Size() {
  return (
    <Wrapper>
      <Rating count={5} value={1} size="small" />
      <Rating count={5} value={1} />
      <Rating count={5} value={1} size="large" />
    </Wrapper>
  );
}
