import type { Meta } from '@storybook/react';
import Icon from '@components/Icon';
import Fab from '@components/Fab';

const meta: Meta<typeof Fab> = {
  title: 'Components/Fab',
  component: Fab
};

export function Default({ ...args }) {
  return (
    <Fab {...args}>
      <Icon name="CaretUpOutlined" />
    </Fab>
  );
}

export default meta;
