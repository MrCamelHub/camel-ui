import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Tab from '@components/Tab';

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
  return <Tab text="Tab" value="tab" {...args} />;
}

export function BrandColors() {
  return (
    <>
      <Wrapper>
        <Tab brandColor="primary" text="Tab" value="tab" selected />
      </Wrapper>
      <Wrapper>
        <Tab text="Tab" value="tab" selected />
      </Wrapper>
    </>
  );
}

export function FullWidths() {
  return <Tab text="Tab" value="tab" selected fullWidth />;
}

export function HideIndicator() {
  return <Tab text="Tab" value="tab" selected hideIndicator />;
}
