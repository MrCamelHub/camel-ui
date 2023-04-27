import type { ComponentMeta } from '@storybook/react';
import Icon from '@components/Icon';
import Fab from '@components/Fab';

export default {
  title: 'Components/Fab',
  component: Fab
} as ComponentMeta<typeof Fab>;

export function Default({ ...args }) {
  return (
    <Fab {...args}>
      <Icon name="CaretUpOutlined" />
    </Fab>
  );
}
