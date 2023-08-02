import { useTheme } from '@theme';
import type { Meta } from '@storybook/react';
import Flexbox from '@components/Flexbox';

const meta: Meta<typeof Flexbox> = {
  title: 'Experiment/Flexbox',
  component: Flexbox
};

export function Default({ ...args }) {
  const {
    theme: {
      palette: { common }
    }
  } = useTheme();
  return (
    <Flexbox {...args} customStyle={{ padding: 8, backgroundColor: common.ui80 }}>
      <div>ITEM1</div>
      <div>ITEM2</div>
      <div>ITEM3</div>
      <div>ITEM4</div>
      <div>ITEM5</div>
    </Flexbox>
  );
}

export default meta;
