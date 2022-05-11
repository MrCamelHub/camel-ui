import React from 'react';
import styled from '@emotion/styled';
import type { ComponentMeta } from '@storybook/react';
import CtaButton from '@components/Button/CtaButton';
import Icon from '@components/Icon';

export default {
  title: 'Components/Buttons/CtaButton',
  component: CtaButton
} as ComponentMeta<typeof CtaButton>;

const Wrapper = styled.div`
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
  return <CtaButton {...args}>Button</CtaButton>;
}

export function Sizes() {
  return (
    <>
      <Wrapper>
        <CtaButton size="medium">medium</CtaButton>
        <CtaButton size="medium" variant="contained" brandColor="primary">
          medium
        </CtaButton>
        <CtaButton size="medium" brandColor="common-black">
          medium
        </CtaButton>
        <CtaButton size="medium" variant="contained" brandColor="common-black">
          medium
        </CtaButton>
        <CtaButton size="medium" brandColor="common-grey">
          medium
        </CtaButton>
      </Wrapper>
      <Wrapper>
        <CtaButton size="large">large</CtaButton>
        <CtaButton size="large" variant="contained" brandColor="primary">
          large
        </CtaButton>
        <CtaButton size="large" brandColor="common-black">
          large
        </CtaButton>
        <CtaButton size="large" variant="contained" brandColor="common-black">
          large
        </CtaButton>
        <CtaButton size="large" brandColor="common-grey">
          large
        </CtaButton>
      </Wrapper>
    </>
  );
}

export function FullWidths() {
  return (
    <ColWrapper>
      <CtaButton fullWidth>Button</CtaButton>
      <CtaButton fullWidth variant="contained" brandColor="primary">
        Button
      </CtaButton>
      <CtaButton fullWidth brandColor="common-black">
        Button
      </CtaButton>
      <CtaButton fullWidth variant="contained" brandColor="common-black">
        Button
      </CtaButton>
      <CtaButton fullWidth brandColor="common-grey">
        Button
      </CtaButton>
    </ColWrapper>
  );
}

export function Variant() {
  return (
    <>
      <Wrapper>
        <CtaButton>Outlined</CtaButton>
        <CtaButton brandColor="common-black">Outlined</CtaButton>
        <CtaButton brandColor="common-grey">Outlined</CtaButton>
      </Wrapper>
      <Wrapper>
        <CtaButton variant="contained" brandColor="primary">
          Contained
        </CtaButton>
        <CtaButton variant="contained" brandColor="common-black">
          Contained
        </CtaButton>
      </Wrapper>
    </>
  );
}

export function BrandColors() {
  return (
    <Wrapper>
      <CtaButton>default</CtaButton>
      <CtaButton variant="contained" brandColor="primary">
        primary
      </CtaButton>
      <CtaButton brandColor="common-black">common-black</CtaButton>
      <CtaButton variant="contained" brandColor="common-black">
        common-black
      </CtaButton>
      <CtaButton brandColor="common-grey">common-grey</CtaButton>
    </Wrapper>
  );
}

export function Icons() {
  return (
    <>
      <Wrapper>
        <p>Start icon</p>
        <CtaButton startIcon={<Icon name="AlarmFilled" />}>Button</CtaButton>
        <CtaButton variant="contained" brandColor="primary" startIcon={<Icon name="HeartFilled" />}>
          Button
        </CtaButton>
        <CtaButton
          variant="contained"
          brandColor="common-black"
          startIcon={<Icon name="AlarmFilled" />}
        >
          Button
        </CtaButton>
        <CtaButton brandColor="common-grey" startIcon={<Icon name="AlarmFilled" />}>
          Button
        </CtaButton>
      </Wrapper>
      <Wrapper>
        <p>End icon</p>
        <CtaButton endIcon={<Icon name="CloseOutlined" />}>Button</CtaButton>
        <CtaButton variant="contained" brandColor="primary" endIcon={<Icon name="CloseOutlined" />}>
          Button
        </CtaButton>
        <CtaButton
          variant="contained"
          brandColor="common-black"
          endIcon={<Icon name="CloseOutlined" />}
        >
          Button
        </CtaButton>
        <CtaButton brandColor="common-grey" endIcon={<Icon name="CloseOutlined" />}>
          Button
        </CtaButton>
      </Wrapper>
    </>
  );
}
