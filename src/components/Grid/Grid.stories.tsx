import { useTheme } from '@theme';
import type { Meta } from '@storybook/react';
import Grid from '@components/Grid';

const meta: Meta<typeof Grid> = {
  title: 'Experiment/Grid',
  component: Grid
};

export function Default({ ...args }) {
  const {
    theme: {
      palette: { common }
    }
  } = useTheme();
  return (
    <Grid {...args} container customStyle={{ padding: 8, backgroundColor: common.ui80 }}>
      <Grid item xs={1}>
        XS1
      </Grid>
      <Grid item xs={2}>
        XS2
      </Grid>
      <Grid item xs={2}>
        XS2
      </Grid>
      <Grid item xs={3}>
        XS3
      </Grid>
      <Grid item xs={3}>
        XS3
      </Grid>
      <Grid item xs={3}>
        XS3
      </Grid>
    </Grid>
  );
}

export default meta;
