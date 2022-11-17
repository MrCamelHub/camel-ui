import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import Box from '@components/Box';

import { useTheme } from '@theme';

export default {
  title: 'Components/Box',
  component: Box
} as ComponentMeta<typeof Box>;

export function Default({ ...args }) {
  const {
    theme: {
      palette: { common }
    }
  } = useTheme();
  return (
    <Box {...args} customStyle={{ padding: 8, backgroundColor: common.ui80 }}>
      Box
    </Box>
  );
}
