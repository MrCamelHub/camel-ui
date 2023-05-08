import type { Meta } from '@storybook/react';
import Image from '@components/Image';

const meta: Meta<typeof Image> = {
  title: 'Experiment/Image',
  component: Image
};

export function Default({ ...args }) {
  return (
    <Image
      {...args}
      src={args.src ? args.src : 'https://static.mrcamel.co.kr/product/20221119_35576592_0.jpg'}
      alt={args.alt ? args.alt : 'Image Img'}
    />
  );
}

export function Fallback() {
  return <Image src="Error" alt="Error Img" />;
}

export default meta;
