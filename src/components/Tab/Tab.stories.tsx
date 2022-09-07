import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Tab from '@components/Tab';

import { ThemeProvider } from '@theme';

export default {
  title: 'Components/Tab',
  component: Tab
} as ComponentMeta<typeof Tab>;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  padding: 1.5rem;
`;

export function Default({ ...args }) {
  return (
    <ThemeProvider theme="light">
      <Tab text="Tab" value="tab" {...args} />
    </ThemeProvider>
  );
}

export function BrandColors() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Tab brandColor="primary" text="Tab" value="tab" selected />
      </Wrapper>
      <Wrapper>
        <Tab text="Tab" value="tab" selected />
      </Wrapper>
    </ThemeProvider>
  );
}

export function FullWidths() {
  return (
    <ThemeProvider theme="light">
      <Tab brandColor="primary" text="Tab" value="tab" selected fullWidth />
    </ThemeProvider>
  );
}

export function HideIndicators() {
  return (
    <ThemeProvider theme="light">
      <Tab brandColor="primary" text="Tab" value="tab" selected hideIndicator />
    </ThemeProvider>
  );
}
