import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Icon from '@components/Icon';
import Chip from '@components/Button/Chip';

import { ThemeProvider } from '@theme';

export default {
  title: 'Components/Buttons/Chip',
  component: Chip
} as ComponentMeta<typeof Chip>;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  padding: 1.5rem;

  & button {
    margin-right: 24px;
  }
`;

const ColWrapper = styled(Wrapper)`
  & button {
    margin-right: 0;
    margin-bottom: 24px;
  }
`;

export function Default({ ...args }) {
  return (
    <ThemeProvider theme="light">
      <Chip {...args}>Button</Chip>
    </ThemeProvider>
  );
}

export function Variants() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Chip variant="outlined" brandColor="primary">
          outlined
        </Chip>
        <Chip variant="ghost" brandColor="primary">
          ghost
        </Chip>
        <Chip variant="outlinedGhost" brandColor="primary">
          outlinedGhost
        </Chip>
        <Chip variant="contained" brandColor="primary">
          contained
        </Chip>
      </Wrapper>
    </ThemeProvider>
  );
}

export function BrandColors() {
  return (
    <ThemeProvider theme="light">
      <p>outlined</p>
      <Wrapper>
        <Chip variant="outlined" brandColor="black">
          black
        </Chip>
        <Chip variant="outlined" brandColor="primary">
          primary
        </Chip>
        <Chip variant="outlined" brandColor="grey">
          grey
        </Chip>
      </Wrapper>
      <p>ghost</p>
      <Wrapper>
        <Chip variant="ghost" brandColor="black">
          black
        </Chip>
        <Chip variant="ghost" brandColor="primary">
          primary
        </Chip>
        <Chip variant="ghost" brandColor="grey">
          grey
        </Chip>
      </Wrapper>
      <p>outlinedGhost</p>
      <Wrapper>
        <Chip variant="outlinedGhost" brandColor="black">
          black
        </Chip>
        <Chip variant="outlinedGhost" brandColor="primary">
          primary
        </Chip>
        <Chip variant="outlinedGhost" brandColor="grey">
          grey
        </Chip>
      </Wrapper>
      <p>contained</p>
      <Wrapper>
        <Chip variant="contained" brandColor="black">
          black
        </Chip>
        <Chip variant="contained" brandColor="primary">
          primary
        </Chip>
        <Chip variant="contained" brandColor="grey">
          grey
        </Chip>
      </Wrapper>
    </ThemeProvider>
  );
}

export function Sizes() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Chip size="small" variant="contained" brandColor="primary">
          small
        </Chip>
        <Chip size="medium" variant="contained" brandColor="primary">
          medium
        </Chip>
        <Chip size="large" variant="contained" brandColor="primary">
          large
        </Chip>
        <Chip size="xlarge" variant="contained" brandColor="primary">
          xlarge
        </Chip>
      </Wrapper>
      <Wrapper>
        <Chip size="small" variant="contained" brandColor="primary" isRound={false}>
          small
        </Chip>
        <Chip size="medium" variant="contained" brandColor="primary" isRound={false}>
          medium
        </Chip>
        <Chip size="large" variant="contained" brandColor="primary" isRound={false}>
          large
        </Chip>
        <Chip size="xlarge" variant="contained" brandColor="primary" isRound={false}>
          xlarge
        </Chip>
      </Wrapper>
    </ThemeProvider>
  );
}

export function Rounds() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Chip variant="contained" brandColor="primary">
          button
        </Chip>
        <Chip isRound={false} variant="contained" brandColor="primary">
          button
        </Chip>
      </Wrapper>
    </ThemeProvider>
  );
}

export function FullWidths() {
  return (
    <ThemeProvider theme="light">
      <ColWrapper>
        <Chip fullWidth variant="contained" brandColor="primary">
          Button
        </Chip>
      </ColWrapper>
    </ThemeProvider>
  );
}

export function Icons() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Chip
          variant="contained"
          brandColor="primary"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
        >
          Button
        </Chip>
      </Wrapper>
    </ThemeProvider>
  );
}

export function Status() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Chip size="medium" variant="contained" brandColor="primary" disabled>
          disabled
        </Chip>
      </Wrapper>
    </ThemeProvider>
  );
}
