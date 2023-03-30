import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Icon from '@components/Icon';
import Chip from '@components/Chip/index';

export default {
  title: 'Components/Chip',
  component: Chip
} as ComponentMeta<typeof Chip>;

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
  return <Chip {...args}>Chip</Chip>;
}

export function Variants() {
  return (
    <Wrapper>
      <Chip brandColor="primary">outline</Chip>
      <Chip variant="ghost" brandColor="primary">
        ghost
      </Chip>
      <Chip variant="outline-ghost" brandColor="primary">
        outline-ghost
      </Chip>
      <Chip variant="solid" brandColor="primary">
        solid
      </Chip>
    </Wrapper>
  );
}

export function BrandColors() {
  return (
    <>
      <p>outline</p>
      <Wrapper>
        <Chip brandColor="black">black</Chip>
        <Chip brandColor="gray">gray</Chip>
        <Chip brandColor="primary">primary</Chip>
        <Chip brandColor="blue">blue</Chip>
      </Wrapper>
      <p>ghost</p>
      <Wrapper>
        <Chip variant="ghost" brandColor="black">
          black
        </Chip>
        <Chip variant="ghost" brandColor="gray">
          gray
        </Chip>
        <Chip variant="ghost" brandColor="primary">
          primary
        </Chip>
        <Chip variant="ghost" brandColor="blue">
          blue
        </Chip>
      </Wrapper>
      <p>outline-ghost</p>
      <Wrapper>
        <Chip variant="outline-ghost" brandColor="black">
          black
        </Chip>
        <Chip variant="outline-ghost" brandColor="gray">
          gray
        </Chip>
        <Chip variant="outline-ghost" brandColor="primary">
          primary
        </Chip>
        <Chip variant="outline-ghost" brandColor="blue">
          blue
        </Chip>
      </Wrapper>
      <p>solid</p>
      <Wrapper>
        <Chip variant="solid" brandColor="black">
          black
        </Chip>
        <Chip variant="solid" brandColor="gray">
          gray
        </Chip>
        <Chip variant="solid" brandColor="primary">
          primary
        </Chip>
        <Chip variant="solid" brandColor="blue">
          blue
        </Chip>
        <Chip variant="solid" brandColor="white">
          white
        </Chip>
      </Wrapper>
    </>
  );
}

export function Sizes() {
  return (
    <>
      <Wrapper>
        <Chip
          size="xsmall"
          variant="solid"
          brandColor="primary"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
        >
          xsmall
        </Chip>
        <Chip
          size="small"
          variant="solid"
          brandColor="primary"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
        >
          small
        </Chip>
        <Chip
          size="medium"
          variant="solid"
          brandColor="primary"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
        >
          medium
        </Chip>
        <Chip
          size="large"
          variant="solid"
          brandColor="primary"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
        >
          large
        </Chip>
        <Chip
          size="xlarge"
          variant="solid"
          brandColor="primary"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
        >
          xlarge
        </Chip>
      </Wrapper>
      <Wrapper>
        <Chip
          size="xsmall"
          variant="solid"
          brandColor="primary"
          isRound={false}
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
        >
          xsmall
        </Chip>
        <Chip
          size="small"
          variant="solid"
          brandColor="primary"
          isRound={false}
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
        >
          small
        </Chip>
        <Chip
          size="medium"
          variant="solid"
          brandColor="primary"
          isRound={false}
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
        >
          medium
        </Chip>
        <Chip
          size="large"
          variant="solid"
          brandColor="primary"
          isRound={false}
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
        >
          large
        </Chip>
        <Chip
          size="xlarge"
          variant="solid"
          brandColor="primary"
          isRound={false}
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
        >
          xlarge
        </Chip>
      </Wrapper>
    </>
  );
}

export function Rounds() {
  return (
    <Wrapper>
      <Chip variant="solid" brandColor="primary">
        button
      </Chip>
      <Chip isRound={false} variant="solid" brandColor="primary">
        button
      </Chip>
    </Wrapper>
  );
}

export function FullWidths() {
  return (
    <ColWrapper>
      <Chip fullWidth variant="solid" brandColor="primary">
        Button
      </Chip>
    </ColWrapper>
  );
}

export function Icons() {
  return (
    <Wrapper>
      <Chip
        variant="solid"
        brandColor="primary"
        startIcon={<Icon name="AlarmFilled" />}
        endIcon={<Icon name="CloseOutlined" />}
      >
        Button
      </Chip>
    </Wrapper>
  );
}

export function IconOnly() {
  return (
    <Wrapper>
      <Chip variant="solid" brandColor="primary" startIcon={<Icon name="AlarmFilled" />} iconOnly>
        Button
      </Chip>
    </Wrapper>
  );
}

export function SubTexts() {
  return (
    <>
      <p>xlarge</p>
      <Wrapper>
        <Chip
          brandColor="black"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="xlarge"
        >
          Button
        </Chip>
        <Chip
          brandColor="gray"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="xlarge"
        >
          Button
        </Chip>
        <Chip
          brandColor="primary"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="xlarge"
        >
          Button
        </Chip>
        <Chip
          brandColor="blue"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="xlarge"
        >
          Button
        </Chip>
      </Wrapper>
      <p>large</p>
      <Wrapper>
        <Chip
          variant="ghost"
          brandColor="black"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="large"
        >
          Button
        </Chip>
        <Chip
          variant="ghost"
          brandColor="gray"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="large"
        >
          Button
        </Chip>
        <Chip
          variant="ghost"
          brandColor="primary"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="large"
        >
          Button
        </Chip>
        <Chip
          variant="ghost"
          brandColor="blue"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="large"
        >
          Button
        </Chip>
      </Wrapper>
      <p>medium</p>
      <Wrapper>
        <Chip
          variant="outline-ghost"
          brandColor="black"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="medium"
        >
          Button
        </Chip>
        <Chip
          variant="outline-ghost"
          brandColor="gray"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="medium"
        >
          Button
        </Chip>
        <Chip
          variant="outline-ghost"
          brandColor="primary"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="medium"
        >
          Button
        </Chip>
        <Chip
          variant="outline-ghost"
          brandColor="blue"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="medium"
        >
          Button
        </Chip>
      </Wrapper>
      <p>small</p>
      <Wrapper>
        <Chip
          variant="solid"
          brandColor="black"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="small"
        >
          Button
        </Chip>
        <Chip
          variant="solid"
          brandColor="gray"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="small"
        >
          Button
        </Chip>
        <Chip
          variant="solid"
          brandColor="primary"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="small"
        >
          Button
        </Chip>
        <Chip
          variant="solid"
          brandColor="blue"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="small"
        >
          Button
        </Chip>
      </Wrapper>
      <p>xsmall</p>
      <Wrapper>
        <Chip
          brandColor="black"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="xsmall"
        >
          Button
        </Chip>
        <Chip
          brandColor="gray"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="xsmall"
        >
          Button
        </Chip>
        <Chip
          brandColor="primary"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="xsmall"
        >
          Button
        </Chip>
        <Chip
          brandColor="blue"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
          size="xsmall"
        >
          Button
        </Chip>
      </Wrapper>
    </>
  );
}

export function Status() {
  return (
    <Wrapper>
      <Chip
        size="medium"
        variant="solid"
        brandColor="primary"
        disabled
        subText={123}
        startIcon={<Icon name="UserFilled" />}
      >
        disabled
      </Chip>
    </Wrapper>
  );
}
