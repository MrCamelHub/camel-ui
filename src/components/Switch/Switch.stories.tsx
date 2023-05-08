import { useState } from 'react';

import type { Meta } from '@storybook/react';
import styled from '@emotion/styled';
import Switch from '@components/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  padding: 1.5rem;
`;

export function Default({ ...args }) {
  const [checked, setChecked] = useState(false);

  return <Switch {...args} checked={checked} onChange={() => setChecked(!checked)} />;
}

export function Sizes({ ...args }) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <p>medium</p>
      <Wrapper>
        <Switch {...args} checked={checked} onChange={() => setChecked(!checked)} />
      </Wrapper>
      <p>xlarge</p>
      <Wrapper>
        <Switch {...args} checked={checked} onChange={() => setChecked(!checked)} size="large" />
      </Wrapper>
    </>
  );
}

export default meta;
