import type { ComponentMeta } from '@storybook/react';
import Avatar from '@components/Avatar';

export default {
  title: 'Experiment/Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>;

export function Default({ ...args }) {
  return (
    <Avatar
      {...args}
      src="https://mrcamel.s3.ap-northeast-2.amazonaws.com/assets/images/platforms/102.png"
      alt="Platform Logo Img"
    />
  );
}

export function Fallback({ ...args }) {
  return <Avatar {...args} src="" alt="Platform Logo Img" />;
}
