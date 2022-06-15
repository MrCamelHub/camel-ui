import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Icon from '@components/Icon';
import Button from '@components/Button';

import { ThemeProvider } from '@theme';

export default {
  title: 'Components/Buttons/Button',
  component: Button
} as ComponentMeta<typeof Button>;

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
      <Button {...args}>Button</Button>
    </ThemeProvider>
  );
}

export function Variants() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Button variant="outlined" brandColor="primary">
          outlined
        </Button>
        <Button variant="ghost" brandColor="primary">
          ghost
        </Button>
        <Button variant="outlinedGhost" brandColor="primary">
          ghost
        </Button>
        <Button variant="contained" brandColor="primary">
          contained
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
}

export function BrandColors() {
  return (
    <ThemeProvider theme="light">
      <p>outlined</p>
      <Wrapper>
        <Button variant="outlined" brandColor="black">
          black
        </Button>
        <Button variant="outlined" brandColor="primary">
          primary
        </Button>
        <Button variant="outlined" brandColor="grey">
          grey
        </Button>
      </Wrapper>
      <p>ghost</p>
      <Wrapper>
        <Button variant="ghost" brandColor="black">
          black
        </Button>
        <Button variant="ghost" brandColor="primary">
          primary
        </Button>
        <Button variant="ghost" brandColor="grey">
          grey
        </Button>
      </Wrapper>
      <p>outlinedGhost</p>
      <Wrapper>
        <Button variant="outlinedGhost" brandColor="black">
          black
        </Button>
        <Button variant="outlinedGhost" brandColor="primary">
          primary
        </Button>
        <Button variant="outlinedGhost" brandColor="grey">
          grey
        </Button>
      </Wrapper>
      <p>contained</p>
      <Wrapper>
        <Button variant="contained" brandColor="black">
          black
        </Button>
        <Button variant="contained" brandColor="primary">
          primary
        </Button>
        <Button variant="contained" brandColor="grey">
          grey
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
}

export function Sizes() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Button size="small" variant="contained" brandColor="primary">
          small
        </Button>
        <Button size="medium" variant="contained" brandColor="primary">
          medium
        </Button>
        <Button size="large" variant="contained" brandColor="primary">
          large
        </Button>
        <Button size="xlarge" variant="contained" brandColor="primary">
          xlarge
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
}

export function FullWidths() {
  return (
    <ThemeProvider theme="light">
      <ColWrapper>
        <Button fullWidth variant="contained" brandColor="primary">
          Button
        </Button>
      </ColWrapper>
    </ThemeProvider>
  );
}

export function Icons() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Button
          variant="contained"
          brandColor="primary"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
        >
          Button
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
}

export function Status() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Button size="medium" variant="contained" brandColor="primary" disabled>
          disabled
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
}
