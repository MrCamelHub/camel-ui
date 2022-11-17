import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import Grid from '@components/Grid';

import { useTheme } from '@theme';

export default {
  title: 'Experiment/Grid',
  component: Grid
} as ComponentMeta<typeof Grid>;

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
