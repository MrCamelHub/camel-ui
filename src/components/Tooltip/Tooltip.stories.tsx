import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import type { ComponentMeta } from '@storybook/react';
import Tooltip from '@components/Tooltip';
import Label from '@components/Label';
import Button from '@components/Button';
import Typography from '@components/Typography';

export default {
  title: 'Components/Tooltip',
  component: Tooltip
} as ComponentMeta<typeof Tooltip>;

const Wrapper = styled.div`
  margin-top: 1.5rem;
  padding: 3rem;
`;

export function Default({ ...args }) {
  const [open, setOpen] = useState(false);

  const anchorRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Wrapper>
      <Button
        componentRef={anchorRef}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        Open
      </Button>
      <Tooltip
        brandColor="primary-light1"
        open={open}
        placement="right"
        message={
          <div>
            <Typography>가격 내림</Typography>
            <Typography variant="h2">찜한 “OOOOOOOO..” 가격이 O.O만원 내려갔어요!</Typography>
          </div>
        }
        {...args}
      />
    </Wrapper>
  );
}
