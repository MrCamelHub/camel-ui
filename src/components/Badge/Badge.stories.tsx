import type { Meta } from '@storybook/react';
import styled from '@emotion/styled';
import Button from '@components/Button';
import Badge from '@components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Experiment/Badge',
  component: Badge
};

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

export function Variants() {
  return (
    <Wrapper>
      <Badge
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

export function BrandColors() {
  return (
    <>
      <p>outline</p>
      <Wrapper>
        <Badge
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

export function Sizes() {
  return (
    <Wrapper>
      <Badge
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

export function DisablePositionAbsolute() {
  return <Button endIcon={<Badge open text={99} disablePositionAbsolute />}>Button</Button>;
}

export default meta;
