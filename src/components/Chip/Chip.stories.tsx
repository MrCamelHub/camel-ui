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
      <Chip variant="outlined" brandColor="primary">
        outlined
      </Chip>
      <Chip variant="ghost" brandColor="primary">
        ghost
      </Chip>
      <Chip variant="outlinedGhost" brandColor="primary">
        outlinedGhost
      </Chip>
      <Chip variant="contained" brandColor="primary">
        contained
      </Chip>
    </Wrapper>
  );
}

export function BrandColors() {
  return (
    <>
      <p>outlined</p>
      <Wrapper>
        <Chip variant="outlined" brandColor="black">
          black
        </Chip>
        <Chip variant="outlined" brandColor="primary">
          primary
        </Chip>
        <Chip variant="outlined" brandColor="gray">
          gray
        </Chip>
      </Wrapper>
      <p>ghost</p>
      <Wrapper>
        <Chip variant="ghost" brandColor="black">
          black
        </Chip>
        <Chip variant="ghost" brandColor="primary">
          primary
        </Chip>
        <Chip variant="ghost" brandColor="gray">
          gray
        </Chip>
      </Wrapper>
      <p>outlinedGhost</p>
      <Wrapper>
        <Chip variant="outlinedGhost" brandColor="black">
          black
        </Chip>
        <Chip variant="outlinedGhost" brandColor="primary">
          primary
        </Chip>
        <Chip variant="outlinedGhost" brandColor="gray">
          gray
        </Chip>
      </Wrapper>
      <p>contained</p>
      <Wrapper>
        <Chip variant="contained" brandColor="black">
          black
        </Chip>
        <Chip variant="contained" brandColor="primary">
          primary
        </Chip>
        <Chip variant="contained" brandColor="gray">
          gray
        </Chip>
      </Wrapper>
    </>
  );
}

export function Sizes() {
  return (
    <>
      <Wrapper>
        <Chip size="xsmall" variant="contained" brandColor="primary">
          xsmall
        </Chip>
        <Chip size="small" variant="contained" brandColor="primary">
          small
        </Chip>
        <Chip size="medium" variant="contained" brandColor="primary">
          medium
        </Chip>
        <Chip size="large" variant="contained" brandColor="primary">
          large
        </Chip>
        <Chip size="xlarge" variant="contained" brandColor="primary">
          xlarge
        </Chip>
      </Wrapper>
      <Wrapper>
        <Chip size="xsmall" variant="contained" brandColor="primary" isRound={false}>
          xsmall
        </Chip>
        <Chip size="small" variant="contained" brandColor="primary" isRound={false}>
          small
        </Chip>
        <Chip size="medium" variant="contained" brandColor="primary" isRound={false}>
          medium
        </Chip>
        <Chip size="large" variant="contained" brandColor="primary" isRound={false}>
          large
        </Chip>
        <Chip size="xlarge" variant="contained" brandColor="primary" isRound={false}>
          xlarge
        </Chip>
      </Wrapper>
    </>
  );
}

export function Rounds() {
  return (
    <Wrapper>
      <Chip variant="contained" brandColor="primary">
        button
      </Chip>
      <Chip isRound={false} variant="contained" brandColor="primary">
        button
      </Chip>
    </Wrapper>
  );
}

export function FullWidths() {
  return (
    <ColWrapper>
      <Chip fullWidth variant="contained" brandColor="primary">
        Button
      </Chip>
    </ColWrapper>
  );
}

export function Icons() {
  return (
    <Wrapper>
      <Chip
        variant="contained"
        brandColor="primary"
        startIcon={<Icon name="AlarmFilled" />}
        endIcon={<Icon name="CloseOutlined" />}
      >
        Button
      </Chip>
    </Wrapper>
  );
}

export function Status() {
  return (
    <Wrapper>
      <Chip size="medium" variant="contained" brandColor="primary" disabled>
        disabled
      </Chip>
    </Wrapper>
  );
}
