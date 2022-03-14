import { Grid, Paper } from '@mui/material';

import { InstrumentsHeatmap } from './components/InstrumentsHeatmap';
import { Manipulator } from './components/Manipulator';
import { SensorTable } from './components/SensorTable';
import { UidsTable } from './components/UidsTable';

export const Mockup = () => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Paper sx={{ p: 2 }}>
        <Manipulator />
      </Paper>
    </Grid>
    <Grid item xs={8}>
      <Paper sx={{ p: 2 }}>
        <InstrumentsHeatmap />
      </Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ p: 2 }}>
        <SensorTable />
      </Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper sx={{ p: 2 }}>
        <UidsTable />
      </Paper>
    </Grid>
  </Grid>
);
