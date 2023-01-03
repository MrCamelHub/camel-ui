import type { ChangeEvent } from 'react';
import React, { useState } from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Checkbox from '@components/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Wrapper = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;

  & div {
    margin-right: 24px;
  }
`;

export function Default({ ...args }) {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Wrapper>
      <Checkbox
        checked={checked}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setChecked(event.currentTarget.checked)}
        {...args}
      />
    </Wrapper>
  );
}

export function DefaultCheckMarker() {
  return (
    <Wrapper>
      <Checkbox hideDefaultCheckMarker={false} />
      <Checkbox isRound={false} hideDefaultCheckMarker={false} />
    </Wrapper>
  );
}

export function Rounds() {
  return (
    <Wrapper>
      <Checkbox />
      <Checkbox isRound={false} />
    </Wrapper>
  );
}

export function BrandColors() {
  return (
    <>
      <Wrapper>
        <Checkbox brandColor="primary" />
        <Checkbox brandColor="primary" checked />
      </Wrapper>
      <Wrapper>
        <Checkbox isRound={false} brandColor="primary" />
        <Checkbox isRound={false} brandColor="primary" checked />
      </Wrapper>
      <Wrapper>
        <Checkbox brandColor="black" />
        <Checkbox brandColor="black" checked />
      </Wrapper>
      <Wrapper>
        <Checkbox isRound={false} brandColor="black" />
        <Checkbox isRound={false} brandColor="black" checked />
      </Wrapper>
    </>
  );
}
