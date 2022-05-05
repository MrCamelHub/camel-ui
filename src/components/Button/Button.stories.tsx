import React from 'react';
import styled from '@emotion/styled';
import type { ComponentMeta } from '@storybook/react';
import Button from '@components/Button';
import Icon from '@components/Icon';

export default {
  title: 'Components/Buttons/Button',
  component: Button
} as ComponentMeta<typeof Button>;

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
  return <Button {...args}>Button</Button>;
}

export function Sizes() {
  return (
    <>
      <Wrapper>
        <Button size="xsmall">xsmall</Button>
        <Button size="xsmall" variant="contained" brandColor="primary">
          xsmall
        </Button>
        <Button size="xsmall" variant="contained" brandColor="common-grey">
          xsmall
        </Button>
        <Button size="xsmall" variant="contained" brandColor="common-grey-light">
          xsmall
        </Button>
      </Wrapper>
      <Wrapper>
        <Button size="small">small</Button>
        <Button size="small" variant="contained" brandColor="primary">
          small
        </Button>
        <Button size="small" variant="contained" brandColor="common-grey">
          small
        </Button>
        <Button size="small" variant="contained" brandColor="common-grey-light">
          small
        </Button>
      </Wrapper>
      <Wrapper>
        <Button size="medium">medium</Button>
        <Button size="medium" variant="contained" brandColor="primary">
          medium
        </Button>
        <Button size="medium" variant="contained" brandColor="common-grey">
          medium
        </Button>
        <Button size="medium" variant="contained" brandColor="common-grey-light">
          medium
        </Button>
      </Wrapper>
      <Wrapper>
        <Button size="large">large</Button>
        <Button size="large" variant="contained" brandColor="primary">
          large
        </Button>
        <Button size="large" variant="contained" brandColor="common-grey">
          large
        </Button>
        <Button size="large" variant="contained" brandColor="common-grey-light">
          large
        </Button>
      </Wrapper>
      <Wrapper>
        <Button size="xlarge">xlarge</Button>
        <Button size="xlarge" variant="contained" brandColor="primary">
          xlarge
        </Button>
        <Button size="xlarge" variant="contained" brandColor="common-grey">
          xlarge
        </Button>
        <Button size="xlarge" variant="contained" brandColor="common-grey-light">
          xlarge
        </Button>
      </Wrapper>
    </>
  );
}

export function Rounds() {
  return (
    <>
      <Wrapper>
        <Button round="0">round 0</Button>
        <Button round="2">round 2</Button>
        <Button round="4">round 4</Button>
        <Button round="8">round 8</Button>
        <Button round="16">round 16</Button>
        <Button round="24">round 24</Button>
      </Wrapper>
      <Wrapper>
        <Button round="0" variant="contained" brandColor="primary">
          round 0
        </Button>
        <Button round="2" variant="contained" brandColor="primary">
          round 2
        </Button>
        <Button round="4" variant="contained" brandColor="primary">
          round 4
        </Button>
        <Button round="8" variant="contained" brandColor="primary">
          round 8
        </Button>
        <Button round="16" variant="contained" brandColor="primary">
          round 16
        </Button>
        <Button round="24" variant="contained" brandColor="primary">
          round 24
        </Button>
      </Wrapper>
      <Wrapper>
        <Button round="0" variant="contained" brandColor="common-grey">
          round 0
        </Button>
        <Button round="2" variant="contained" brandColor="common-grey">
          round 2
        </Button>
        <Button round="4" variant="contained" brandColor="common-grey">
          round 4
        </Button>
        <Button round="8" variant="contained" brandColor="common-grey">
          round 8
        </Button>
        <Button round="16" variant="contained" brandColor="common-grey">
          round 16
        </Button>
        <Button round="24" variant="contained" brandColor="common-grey">
          round 24
        </Button>
      </Wrapper>
      <Wrapper>
        <Button round="0" variant="contained" brandColor="common-grey-light">
          round 0
        </Button>
        <Button round="2" variant="contained" brandColor="common-grey-light">
          round 2
        </Button>
        <Button round="4" variant="contained" brandColor="common-grey-light">
          round 4
        </Button>
        <Button round="8" variant="contained" brandColor="common-grey-light">
          round 8
        </Button>
        <Button round="16" variant="contained" brandColor="common-grey-light">
          round 16
        </Button>
        <Button round="24" variant="contained" brandColor="common-grey-light">
          round 24
        </Button>
      </Wrapper>
    </>
  );
}

export function FullWidths() {
  return (
    <ColWrapper>
      <Button fullWidth>Button</Button>
      <Button fullWidth variant="contained" brandColor="primary">
        Button
      </Button>
      <Button fullWidth variant="contained" brandColor="common-grey">
        Button
      </Button>
      <Button fullWidth variant="contained" brandColor="common-grey-light">
        Button
      </Button>
    </ColWrapper>
  );
}

export function Variants() {
  return (
    <Wrapper>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained">Contained</Button>
    </Wrapper>
  );
}

export function BrandColors() {
  return (
    <Wrapper>
      <Button>default</Button>
      <Button variant="contained" brandColor="primary">
        primary
      </Button>
      <Button variant="contained" brandColor="common-grey">
        common-grey
      </Button>
      <Button variant="contained" brandColor="common-grey-light">
        common-grey-light
      </Button>
    </Wrapper>
  );
}

export function Icons() {
  return (
    <>
      <Wrapper>
        <p>Start icon</p>
        <Button startIcon={<Icon name="AlramFilled" />}>Button</Button>
        <Button variant="contained" brandColor="primary" startIcon={<Icon name="HeartFilled" />}>
          Button
        </Button>
        <Button
          variant="contained"
          brandColor="common-grey"
          startIcon={<Icon name="AlramFilled" />}
        >
          Button
        </Button>
        <Button
          variant="contained"
          brandColor="common-grey-light"
          startIcon={<Icon name="AlramFilled" />}
        >
          Button
        </Button>
      </Wrapper>
      <Wrapper>
        <p>End icon</p>
        <Button endIcon={<Icon name="CloseOutlined" />}>Button</Button>
        <Button variant="contained" brandColor="primary" endIcon={<Icon name="CloseOutlined" />}>
          Button
        </Button>
        <Button
          variant="contained"
          brandColor="common-grey"
          endIcon={<Icon name="CloseOutlined" />}
        >
          Button
        </Button>
        <Button
          variant="contained"
          brandColor="common-grey-light"
          endIcon={<Icon name="CloseOutlined" />}
        >
          Button
        </Button>
      </Wrapper>
      <Wrapper>
        <p>Icon</p>
        <Button round="24">
          <Icon name="UserFilled" />
        </Button>
        <Button variant="contained" brandColor="primary">
          <Icon name="HeartFilled" />
        </Button>
        <Button variant="contained" brandColor="common-grey">
          <Icon name="HeartFilled" />
        </Button>
        <Button variant="contained" brandColor="common-grey-light">
          <Icon name="HeartFilled" />
        </Button>
      </Wrapper>
    </>
  );
}
