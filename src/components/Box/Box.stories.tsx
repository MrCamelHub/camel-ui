import { useTheme } from '@theme';
import type { Meta } from '@storybook/react';
import Box from '@components/Box';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box
};

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

export default meta;
