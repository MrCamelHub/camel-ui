import React, { useState } from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import TabGroup from '@components/TabGroup';
import Tab from '@components/Tab';

import { Box } from '@components';

export default {
  title: 'Components/TabGroup',
  component: TabGroup
} as ComponentMeta<typeof TabGroup>;

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
    <TabGroup {...args} onChange={handleChange} value={value}>
      <Tab text="Tab1" value="tab1" />
      <Tab text="Tab2" value="tab2" />
      <Tab text="Tab3" value="tab3" />
    </TabGroup>
  );
}

export function BrandColors() {
  const [value, setValue] = useState<string | number>('tab1');

  const handleChange = (newValue: string | number) => setValue(newValue);

  return (
    <>
      <p>black</p>
      <Wrapper>
        <TabGroup onChange={handleChange} value={value}>
          <Tab text="Tab1" value="tab1" />
          <Tab text="Tab2" value="tab2" />
          <Tab text="Tab3" value="tab3" />
        </TabGroup>
      </Wrapper>
      <p>primary</p>
      <Wrapper>
        <TabGroup brandColor="primary" onChange={handleChange} value={value}>
          <Tab text="Tab1" value="tab1" />
          <Tab text="Tab2" value="tab2" />
          <Tab text="Tab3" value="tab3" />
        </TabGroup>
      </Wrapper>
    </>
  );
}

export function Sizes() {
  const [value, setValue] = useState<string | number>('tab1');

  const handleChange = (newValue: string | number) => setValue(newValue);

  return (
    <>
      <p>large</p>
      <Wrapper>
        <TabGroup onChange={handleChange} value={value}>
          <Tab text="Tab1" value="tab1" />
          <Tab text="Tab2" value="tab2" />
          <Tab text="Tab3" value="tab3" />
        </TabGroup>
      </Wrapper>
      <p>xlarge</p>
      <Wrapper>
        <TabGroup size="xlarge" onChange={handleChange} value={value}>
          <Tab text="Tab1" value="tab1" />
          <Tab text="Tab2" value="tab2" />
          <Tab text="Tab3" value="tab3" />
        </TabGroup>
      </Wrapper>
    </>
  );
}

export function FullWidths() {
  const [value, setValue] = useState<string | number>('tab1');

  const handleChange = (newValue: string | number) => setValue(newValue);

  return (
    <TabGroup fullWidth onChange={handleChange} value={value}>
      <Tab text="Tab1" value="tab1" />
      <Tab text="Tab2" value="tab2" />
      <Tab text="Tab3" value="tab3" />
    </TabGroup>
  );
}

export function HideIndicators() {
  const [value, setValue] = useState<string | number>('tab1');

  const handleChange = (newValue: string | number) => setValue(newValue);

  return (
    <TabGroup hideIndicator onChange={handleChange} value={value}>
      <Tab text="Tab1" value="tab1" />
      <Tab text="Tab2" value="tab2" />
      <Tab text="Tab3" value="tab3" />
    </TabGroup>
  );
}

export function HideLine() {
  const [value, setValue] = useState<string | number>('tab1');

  const handleChange = (newValue: string | number) => setValue(newValue);

  return (
    <TabGroup hideLine onChange={handleChange} value={value}>
      <Tab text="Tab1" value="tab1" />
      <Tab text="Tab2" value="tab2" />
      <Tab text="Tab3" value="tab3" />
    </TabGroup>
  );
}

export function DisableTabFlexible() {
  const [value, setValue] = useState<string | number>('tab1');

  const handleChange = (newValue: string | number) => setValue(newValue);

  return (
    <TabGroup fullWidth disableTabFlexible onChange={handleChange} value={value}>
      <Tab text="Tab1" value="tab1" />
      <Tab text={<Box>Tab 1234567890</Box>} value="tab2" />
      <Tab text="Tab3" value="tab3" />
    </TabGroup>
  );
}
