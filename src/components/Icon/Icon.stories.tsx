import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Icon from '@components/Icon';

import { ThemeProvider } from '@theme';

import * as SpecifySvgIcons from '../../assets/icons/specify';
import * as OutlinedSvgIcons from '../../assets/icons/outlined';
import * as FilledSvgIcons from '../../assets/icons/filled';

export default {
  title: 'Components/Icon',
  component: Icon
} as ComponentMeta<typeof Icon>;

const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;

  & div {
    min-width: 200px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & svg {
    margin: 20px;
  }
`;

export function Default({ ...args }) {
  return (
    <ThemeProvider theme="light">
      <Icon name="HeartOutlined" {...args} />
    </ThemeProvider>
  );
}

export function FilledIcons() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        {(Object.keys(FilledSvgIcons) as Array<keyof typeof FilledSvgIcons>).map((name) => (
          <div key={`filled-icon-${name}`}>
            <Icon name={name} />
            {name}
          </div>
        ))}
      </Wrapper>
    </ThemeProvider>
  );
}

export function OutlinedIcons() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        {(Object.keys(OutlinedSvgIcons) as Array<keyof typeof OutlinedSvgIcons>).map((name) => (
          <div key={`outlined-icon-${name}`}>
            <Icon name={name} />
            {name}
          </div>
        ))}
      </Wrapper>
    </ThemeProvider>
  );
}

export function SpecifyIcons() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        {(Object.keys(SpecifySvgIcons) as Array<keyof typeof SpecifySvgIcons>).map((name) => (
          <div key={`specify-icon-${name}`}>
            <Icon name={name} />
            {name}
          </div>
        ))}
      </Wrapper>
    </ThemeProvider>
  );
}
