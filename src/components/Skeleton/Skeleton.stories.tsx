import type { Meta } from '@storybook/react';
import Skeleton from '@components/Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Experiment/Skeleton',
  component: Skeleton
};

export function Default({ ...args }) {
  return <Skeleton {...args} />;
}

export default meta;
