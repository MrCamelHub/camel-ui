import useTheme from '@theme/provider/useTheme';
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
  const {
    theme: {
      palette: { common }
    }
  } = useTheme();
  return (
    <AlertWrapper>
      <Alert
        brandColor="black"
        customStyle={{
          color: common.uiWhite
        }}
      >
        black
      </Alert>
      <Alert brandColor="gray">gray</Alert>
      <Alert brandColor="primary">primary</Alert>
      <Alert brandColor="blue">blue</Alert>
      <Alert brandColor="red">red</Alert>
    </AlertWrapper>
  );
}
