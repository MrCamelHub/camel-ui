import React, { useState } from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Tabs from '@components/Tabs';
import Tab from '@components/Tab';

import { ThemeProvider } from '@theme';

export default {
  title: 'Components/Tabs',
  component: Tabs
} as ComponentMeta<typeof Tabs>;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  padding: 1.5rem;
`;

export function Default({ ...args }) {
  const [value, setValue] = useState<string | number>('tab1');

  const handleChange = (newValue: string | number) => setValue(newValue);

  return (
    <ThemeProvider theme="light">
      <Tabs {...args} onChange={handleChange} value={value}>
        <Tab text="Tab1" value="tab1" />
        <Tab text="Tab2" value="tab2" />
        <Tab text="Tab3" value="tab3" />
      </Tabs>
    </ThemeProvider>
  );
}

export function BrandColors() {
  const [value, setValue] = useState<string | number>('tab1');

  const handleChange = (newValue: string | number) => setValue(newValue);

  return (
    <ThemeProvider theme="light">
      <Wrapper>
        <Tabs brandColor="primary" onChange={handleChange} value={value}>
          <Tab text="Tab1" value="tab1" />
          <Tab text="Tab2" value="tab2" />
          <Tab text="Tab3" value="tab3" />
        </Tabs>
      </Wrapper>
      <Wrapper>
        <Tabs onChange={handleChange} value={value}>
          <Tab text="Tab1" value="tab1" />
          <Tab text="Tab2" value="tab2" />
          <Tab text="Tab3" value="tab3" />
        </Tabs>
      </Wrapper>
    </ThemeProvider>
  );
}

export function FullWidths() {
  const [value, setValue] = useState<string | number>('tab1');

  const handleChange = (newValue: string | number) => setValue(newValue);

  return (
    <ThemeProvider theme="light">
      <Tabs fullWidth onChange={handleChange} value={value}>
        <Tab text="Tab1" value="tab1" />
        <Tab text="Tab2" value="tab2" />
        <Tab text="Tab3" value="tab3" />
      </Tabs>
    </ThemeProvider>
  );
}

export function HideIndicators() {
  const [value, setValue] = useState<string | number>('tab1');

  const handleChange = (newValue: string | number) => setValue(newValue);

  return (
    <ThemeProvider theme="light">
      <Tabs hideIndicator onChange={handleChange} value={value}>
        <Tab text="Tab1" value="tab1" />
        <Tab text="Tab2" value="tab2" />
        <Tab text="Tab3" value="tab3" />
      </Tabs>
    </ThemeProvider>
  );
}
