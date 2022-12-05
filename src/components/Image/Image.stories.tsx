import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import Image from '@components/Image';

export default {
  title: 'Experiment/Image',
  component: Image
} as ComponentMeta<typeof Image>;

export function Default({ ...args }) {
  return (
    <Image
      {...args}
      src={
        args.src
          ? args.src
          : 'https://s3.ap-northeast-2.amazonaws.com/mrcamel/product/20221119_35576592_0.jpg'
      }
      alt={args.alt ? args.alt : 'Image Img'}
    />
  );
}

export function Fallback({ ...args }) {
  return <Image {...args} src="Error" alt="Error Img" />;
}
