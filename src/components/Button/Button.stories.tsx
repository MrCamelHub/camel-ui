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
        <Button variant="outlined">outlined</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="contained">contained</Button>
      </Wrapper>
    </ThemeProvider>
  );
}

export function BrandColors() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <p>outlined</p>
        <Button variant="outlined" brandColor="grey">
          grey
        </Button>
        <Button variant="outlined" brandColor="black">
          black
        </Button>
        <Button variant="outlined" brandColor="primary">
          primary
        </Button>
        <Button variant="outlined" brandColor="red">
          red
        </Button>
        <Button variant="outlined" brandColor="purple">
          purple
        </Button>
      </Wrapper>
      <Wrapper>
        <p>ghost</p>
        <Button variant="ghost" brandColor="grey">
          grey
        </Button>
        <Button variant="ghost" brandColor="black">
          black
        </Button>
        <Button variant="ghost" brandColor="primary">
          primary
        </Button>
        <Button variant="ghost" brandColor="red">
          red
        </Button>
        <Button variant="ghost" brandColor="purple">
          purple
        </Button>
      </Wrapper>
      <Wrapper>
        <p>contained</p>
        <Button variant="contained" brandColor="grey">
          grey
        </Button>
        <Button variant="contained" brandColor="black">
          black
        </Button>
        <Button variant="contained" brandColor="primary">
          primary
        </Button>
        <Button variant="contained" brandColor="red">
          red
        </Button>
        <Button variant="contained" brandColor="purple">
          purple
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
}

export function Sizes() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Button size="xsmall" variant="contained" brandColor="primary">
          xsmall
        </Button>
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

export function Rounds() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Button round="0" variant="contained" brandColor="primary">
          0
        </Button>
        <Button round="2" variant="contained" brandColor="primary">
          2
        </Button>
        <Button round="4" variant="contained" brandColor="primary">
          4
        </Button>
        <Button round="8" variant="contained" brandColor="primary">
          8
        </Button>
        <Button round="16" variant="contained" brandColor="primary">
          16
        </Button>
        <Button round="24" variant="contained" brandColor="primary">
          24
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
        <Button variant="contained" brandColor="primary" startIcon={<Icon name="HeartFilled" />}>
          Button
        </Button>
        <Button variant="contained" brandColor="primary" endIcon={<Icon name="CloseOutlined" />}>
          Button
        </Button>
        <Button
          variant="contained"
          brandColor="primary"
          startIcon={<Icon name="HeartFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
        >
          Button
        </Button>
        <Button variant="contained" brandColor="primary">
          <Icon name="HeartFilled" />
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
}
