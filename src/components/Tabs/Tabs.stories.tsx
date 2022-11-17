import React, { useState } from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Tabs from '@components/Tabs';
import Tab from '@components/Tab';

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
    <Tabs {...args} onChange={handleChange} value={value}>
      <Tab text="Tab1" value="tab1" />
      <Tab text="Tab2" value="tab2" />
      <Tab text="Tab3" value="tab3" />
    </Tabs>
  );
}

export function BrandColors() {
  const [value, setValue] = useState<string | number>('tab1');

  const handleChange = (newValue: string | number) => setValue(newValue);

  return (
    <>
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
    </>
  );
}

export function FullWidths() {
  const [value, setValue] = useState<string | number>('tab1');

  const handleChange = (newValue: string | number) => setValue(newValue);

  return (
    <Tabs fullWidth onChange={handleChange} value={value}>
      <Tab text="Tab1" value="tab1" />
      <Tab text="Tab2" value="tab2" />
      <Tab text="Tab3" value="tab3" />
    </Tabs>
  );
}

export function HideIndicators() {
  const [value, setValue] = useState<string | number>('tab1');

  const handleChange = (newValue: string | number) => setValue(newValue);

  return (
    <Tabs hideIndicator onChange={handleChange} value={value}>
      <Tab text="Tab1" value="tab1" />
      <Tab text="Tab2" value="tab2" />
      <Tab text="Tab3" value="tab3" />
    </Tabs>
  );
}
