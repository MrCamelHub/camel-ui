import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Label from '@components/Label';

import { Icon } from '@components';

export default {
  title: 'Components/Label',
  component: Label
} as ComponentMeta<typeof Label>;

const Wrapper = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;

  & label {
    margin-right: 24px;
  }
`;

export function Default({ ...args }) {
  return <Label {...args} text="LABEL" />;
}

export function Variants() {
  return (
    <Wrapper>
      <Label variant="outline" text="outline" />
      <Label variant="ghost" text="ghost" />
      <Label variant="darked" text="darked" />
      <Label variant="solid" text="solid" />
    </Wrapper>
  );
}

export function BrandColors() {
  return (
    <>
      <Wrapper>
        <p>outline</p>
        <Label variant="outline" brandColor="black" text="black" />
        <Label variant="outline" brandColor="primary" text="primary" />
        <Label variant="outline" brandColor="blue" text="blue" />
        <Label variant="outline" brandColor="red" text="red" />
        <Label variant="outline" brandColor="gray" text="gray" />
      </Wrapper>
      <Wrapper>
        <p>ghost</p>
        <Label variant="ghost" brandColor="black" text="black" />
        <Label variant="ghost" brandColor="primary" text="primary" />
        <Label variant="ghost" brandColor="blue" text="blue" />
        <Label variant="ghost" brandColor="red" text="red" />
        <Label variant="ghost" brandColor="gray" text="gray" />
      </Wrapper>
      <Wrapper>
        <p>solid</p>
        <Label variant="solid" brandColor="black" text="black" />
        <Label variant="solid" brandColor="primary" text="primary" />
        <Label variant="solid" brandColor="blue" text="blue" />
        <Label variant="solid" brandColor="red" text="red" />
        <Label variant="solid" brandColor="gray" text="gray" />
      </Wrapper>
      <Wrapper>
        <p>dakred</p>
        <Label variant="darked" brandColor="black" text="black" />
        <Label variant="darked" brandColor="primary" text="primary" />
        <Label variant="darked" brandColor="red" text="red" />
      </Wrapper>
    </>
  );
}

export function Sizes() {
  return (
    <Wrapper>
      <Label text="small" size="small" />
      <Label text="xsmall" size="xsmall" />
    </Wrapper>
  );
}

export function Icons() {
  return (
    <Wrapper>
      <Label brandColor="black" text="small" size="small" startIcon={<Icon name="KakaoFilled" />} />
      <Label
        brandColor="black"
        text="xsmall"
        size="xsmall"
        startIcon={<Icon name="KakaoFilled" />}
      />
    </Wrapper>
  );
}
