import type { Meta } from '@storybook/react';
import styled from '@emotion/styled';
import Icon from '@components/Icon';
import Button from '@components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button
};

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
  return <Button {...args}>Button</Button>;
}

export function Variants() {
  return (
    <Wrapper>
      <Button variant="inline" brandColor="primary">
        inline
      </Button>
      <Button variant="outline" brandColor="primary">
        outline
      </Button>
      <Button variant="ghost" brandColor="primary">
        ghost
      </Button>
      <Button variant="outline-ghost" brandColor="primary">
        outline-ghost
      </Button>
      <Button variant="solid" brandColor="primary">
        solid
      </Button>
    </Wrapper>
  );
}

export function BrandColors() {
  return (
    <>
      <p>inline</p>
      <Wrapper>
        <Button variant="inline" brandColor="black">
          black
        </Button>
        <Button variant="inline" brandColor="gray">
          gray
        </Button>
        <Button variant="inline" brandColor="primary">
          primary
        </Button>
        <Button variant="inline" brandColor="blue">
          blue
        </Button>
      </Wrapper>
      <p>outline</p>
      <Wrapper>
        <Button brandColor="black">black</Button>
        <Button brandColor="gray">gray</Button>
        <Button brandColor="primary">primary</Button>
        <Button brandColor="blue">blue</Button>
      </Wrapper>
      <p>ghost</p>
      <Wrapper>
        <Button variant="ghost" brandColor="black">
          black
        </Button>
        <Button variant="ghost" brandColor="gray">
          gray
        </Button>
        <Button variant="ghost" brandColor="primary">
          primary
        </Button>
        <Button variant="ghost" brandColor="blue">
          blue
        </Button>
      </Wrapper>
      <p>outline-ghost</p>
      <Wrapper>
        <Button variant="outline-ghost" brandColor="black">
          black
        </Button>
        <Button variant="outline-ghost" brandColor="gray">
          gray
        </Button>
        <Button variant="outline-ghost" brandColor="primary">
          primary
        </Button>
        <Button variant="outline-ghost" brandColor="blue">
          blue
        </Button>
      </Wrapper>
      <p>solid</p>
      <Wrapper>
        <Button variant="solid" brandColor="black">
          black
        </Button>
        <Button variant="solid" brandColor="gray">
          gray
        </Button>
        <Button variant="solid" brandColor="primary">
          primary
        </Button>
        <Button variant="solid" brandColor="blue">
          blue
        </Button>
        <Button variant="solid" brandColor="white">
          white
        </Button>
      </Wrapper>
    </>
  );
}

export function Sizes() {
  return (
    <Wrapper>
      <Button
        size="small"
        variant="solid"
        brandColor="primary"
        startIcon={<Icon name="AlarmFilled" />}
        endIcon={<Icon name="CloseOutlined" />}
      >
        small
      </Button>
      <Button
        size="medium"
        variant="solid"
        brandColor="primary"
        startIcon={<Icon name="AlarmFilled" />}
        endIcon={<Icon name="CloseOutlined" />}
      >
        medium
      </Button>
      <Button
        size="large"
        variant="solid"
        brandColor="primary"
        startIcon={<Icon name="AlarmFilled" />}
        endIcon={<Icon name="CloseOutlined" />}
      >
        large
      </Button>
      <Button
        size="xlarge"
        variant="solid"
        brandColor="primary"
        startIcon={<Icon name="AlarmFilled" />}
        endIcon={<Icon name="CloseOutlined" />}
      >
        xlarge
      </Button>
    </Wrapper>
  );
}

export function FullWidths() {
  return (
    <ColWrapper>
      <Button fullWidth variant="solid" brandColor="primary">
        Button
      </Button>
    </ColWrapper>
  );
}

export function Icons() {
  return (
    <Wrapper>
      <Button
        variant="solid"
        brandColor="primary"
        startIcon={<Icon name="AlarmFilled" />}
        endIcon={<Icon name="CloseOutlined" />}
      >
        Button
      </Button>
    </Wrapper>
  );
}

export function IconOnly() {
  return (
    <Wrapper>
      <Button variant="solid" brandColor="primary" startIcon={<Icon name="AlarmFilled" />} iconOnly>
        Button
      </Button>
    </Wrapper>
  );
}

export function SubTexts() {
  return (
    <>
      <p>xlarge</p>
      <Wrapper>
        <Button
          variant="inline"
          brandColor="black"
          size="xlarge"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
        >
          Button
        </Button>
        <Button
          variant="inline"
          brandColor="gray"
          size="xlarge"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
        >
          Button
        </Button>
        <Button
          variant="inline"
          brandColor="primary"
          size="xlarge"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
        >
          Button
        </Button>
        <Button
          variant="inline"
          brandColor="blue"
          size="xlarge"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
        >
          Button
        </Button>
      </Wrapper>
      <p>large</p>
      <Wrapper>
        <Button
          variant="inline"
          brandColor="black"
          size="large"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
        >
          Button
        </Button>
        <Button
          variant="inline"
          brandColor="gray"
          size="large"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
        >
          Button
        </Button>
        <Button
          variant="inline"
          brandColor="primary"
          size="large"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
        >
          Button
        </Button>
        <Button
          variant="inline"
          brandColor="blue"
          size="large"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
        >
          Button
        </Button>
      </Wrapper>
      <p>medium</p>
      <Wrapper>
        <Button
          variant="inline"
          brandColor="black"
          size="medium"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
        >
          Button
        </Button>
        <Button
          variant="inline"
          brandColor="gray"
          size="medium"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
        >
          Button
        </Button>
        <Button
          variant="inline"
          brandColor="primary"
          size="medium"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
        >
          Button
        </Button>
        <Button
          variant="inline"
          brandColor="blue"
          size="medium"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
        >
          Button
        </Button>
      </Wrapper>
      <p>small</p>
      <Wrapper>
        <Button
          variant="inline"
          brandColor="black"
          size="small"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
        >
          Button
        </Button>
        <Button
          variant="inline"
          brandColor="gray"
          size="small"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
        >
          Button
        </Button>
        <Button
          variant="inline"
          brandColor="primary"
          size="small"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
        >
          Button
        </Button>
        <Button
          variant="inline"
          brandColor="blue"
          size="small"
          startIcon={<Icon name="AlarmFilled" />}
          endIcon={<Icon name="CloseOutlined" />}
          subText={123}
        >
          Button
        </Button>
      </Wrapper>
    </>
  );
}

export function DisablePadding() {
  return (
    <Wrapper>
      <Button
        variant="inline"
        brandColor="primary"
        startIcon={<Icon name="AlarmFilled" />}
        endIcon={<Icon name="CloseOutlined" />}
        disablePadding
      >
        Button
      </Button>
    </Wrapper>
  );
}

export function Status() {
  return (
    <Wrapper>
      <Button size="medium" variant="solid" brandColor="primary" disabled>
        disabled
      </Button>
    </Wrapper>
  );
}

export default meta;
