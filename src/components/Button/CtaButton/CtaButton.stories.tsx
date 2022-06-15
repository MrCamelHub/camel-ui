import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Icon from '@components/Icon';
import CtaButton from '@components/Button/CtaButton';

import { ThemeProvider } from '@theme';

export default {
  title: 'Components/Buttons/CtaButton',
  component: CtaButton
} as ComponentMeta<typeof CtaButton>;

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
      <CtaButton {...args}>Button</CtaButton>
    </ThemeProvider>
  );
}

export function Variants() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <CtaButton variant="outlined" brandColor="primary">
          outlined
        </CtaButton>
        <CtaButton variant="ghost" brandColor="primary">
          ghost
        </CtaButton>
        <CtaButton variant="contained" brandColor="primary">
          contained
        </CtaButton>
      </Wrapper>
    </ThemeProvider>
  );
}

export function BrandColors() {
  return (
    <ThemeProvider theme="light">
      <p>outline</p>
      <Wrapper>
        <CtaButton variant="outlined" brandColor="black">
          black
        </CtaButton>
        <CtaButton variant="outlined" brandColor="primary">
          primary
        </CtaButton>
      </Wrapper>
      <p>ghost</p>
      <Wrapper>
        <CtaButton variant="ghost" brandColor="black">
          black
        </CtaButton>
        <CtaButton variant="ghost" brandColor="primary">
          primary
        </CtaButton>
      </Wrapper>
      <p>contained</p>
      <Wrapper>
        <CtaButton variant="contained" brandColor="black">
          black
        </CtaButton>
        <CtaButton variant="contained" brandColor="primary">
          primary
        </CtaButton>
      </Wrapper>
    </ThemeProvider>
  );
}

export function Sizes() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <CtaButton size="medium" variant="contained" brandColor="primary">
          medium
        </CtaButton>
        <CtaButton size="large" variant="contained" brandColor="primary">
          large
        </CtaButton>
      </Wrapper>
    </ThemeProvider>
  );
}

export function FullWidths() {
  return (
    <ThemeProvider theme="light">
      <ColWrapper>
        <CtaButton fullWidth variant="contained" brandColor="primary">
          Button
        </CtaButton>
      </ColWrapper>
    </ThemeProvider>
  );
}

export function Icons() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <CtaButton
          variant="contained"
          brandColor="primary"
          startIcon={<Icon name="AlarmOutlined" />}
          endIcon={<Icon name="CloseOutlined" />}
          fullWidth
        >
          Button
        </CtaButton>
      </Wrapper>
    </ThemeProvider>
  );
}
