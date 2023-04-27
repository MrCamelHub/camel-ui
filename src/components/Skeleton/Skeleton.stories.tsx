import type { ComponentMeta } from '@storybook/react';
import Skeleton from '@components/Skeleton';

export default {
  title: 'Experiment/Skeleton',
  component: Skeleton
} as ComponentMeta<typeof Skeleton>;

export function Default({ ...args }) {
  return <Skeleton {...args} />;
}
