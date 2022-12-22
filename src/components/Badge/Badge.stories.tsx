import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Button from '@components/Button';
import Badge from '@components/Badge';

export default {
  title: 'Experiment/Badge',
  component: Badge
} as ComponentMeta<typeof Badge>;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  padding: 1.5rem;

  & > div {
    margin-right: 24px;
  }
`;

export function Default({ ...args }) {
  return (
    <Badge
      open
      {...args}
      text={99}
      position={{
        top: -14,
        right: -14
      }}
    >
      <Button>Button</Button>
    </Badge>
  );
}

export function Variants({ ...args }) {
  return (
    <Wrapper>
      <Badge
        {...args}
        open
        text={99}
        position={{
          top: -14,
          right: -14
        }}
      >
        <Button>outline</Button>
      </Badge>
      <Badge
        {...args}
        open
        text={99}
        variant="ghost"
        position={{
          top: -14,
          right: -14
        }}
      >
        <Button>ghost</Button>
      </Badge>
      <Badge
        {...args}
        open
        text={99}
        variant="solid"
        position={{
          top: -14,
          right: -14
        }}
      >
        <Button>solid</Button>
      </Badge>
    </Wrapper>
  );
}

export function BrandColors({ ...args }) {
  return (
    <>
      <p>outline</p>
      <Wrapper>
        <Badge
          {...args}
          open
          text={99}
          position={{
            top: -14,
            right: -14
          }}
        >
          <Button>black</Button>
        </Badge>
        <Badge
          {...args}
          open
          brandColor="primary"
          text={99}
          position={{
            top: -14,
            right: -14
          }}
        >
          <Button>primary</Button>
        </Badge>
        <Badge
          {...args}
          open
          brandColor="blue"
          text={99}
          position={{
            top: -14,
            right: -14
          }}
        >
          <Button>blue</Button>
        </Badge>
        <Badge
          {...args}
          open
          brandColor="red"
          text={99}
          position={{
            top: -14,
            right: -14
          }}
        >
          <Button>red</Button>
        </Badge>
      </Wrapper>
      <p>ghost</p>
      <Wrapper>
        <Badge
          {...args}
          open
          variant="ghost"
          text={99}
          position={{
            top: -14,
            right: -14
          }}
        >
          <Button>black</Button>
        </Badge>
        <Badge
          {...args}
          open
          variant="ghost"
          brandColor="primary"
          text={99}
          position={{
            top: -14,
            right: -14
          }}
        >
          <Button>primary</Button>
        </Badge>
        <Badge
          {...args}
          open
          variant="ghost"
          brandColor="blue"
          text={99}
          position={{
            top: -14,
            right: -14
          }}
        >
          <Button>blue</Button>
        </Badge>
        <Badge
          {...args}
          open
          variant="ghost"
          brandColor="red"
          text={99}
          position={{
            top: -14,
            right: -14
          }}
        >
          <Button>red</Button>
        </Badge>
      </Wrapper>
      <p>solid</p>
      <Wrapper>
        <Badge
          {...args}
          open
          variant="solid"
          text={99}
          position={{
            top: -14,
            right: -14
          }}
        >
          <Button>black</Button>
        </Badge>
        <Badge
          {...args}
          open
          variant="solid"
          brandColor="primary"
          text={99}
          position={{
            top: -14,
            right: -14
          }}
        >
          <Button>primary</Button>
        </Badge>
        <Badge
          {...args}
          open
          variant="solid"
          brandColor="blue"
          text={99}
          position={{
            top: -14,
            right: -14
          }}
        >
          <Button>blue</Button>
        </Badge>
        <Badge
          {...args}
          open
          variant="solid"
          brandColor="red"
          text={99}
          position={{
            top: -14,
            right: -14
          }}
        >
          <Button>red</Button>
        </Badge>
      </Wrapper>
    </>
  );
}

export function Sizes({ ...args }) {
  return (
    <Wrapper>
      <Badge
        {...args}
        open
        text={99}
        position={{
          top: -14,
          right: -14
        }}
      >
        <Button>small</Button>
      </Badge>
      <Badge
        {...args}
        open
        size="xsmall"
        text={99}
        position={{
          top: -10,
          right: -10
        }}
      >
        <Button>xsmall</Button>
      </Badge>
    </Wrapper>
  );
}

export function DisablePositionAbsolute({ ...args }) {
  return (
    <Button endIcon={<Badge {...args} open text={99} disablePositionAbsolute />}>Button</Button>
  );
}
