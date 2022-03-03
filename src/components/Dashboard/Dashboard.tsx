import { Grid, Paper } from '@mui/material';
import { InstrumentsHeatmap } from 'components/InstrumentsHeatmap';
import { UidsTable } from 'components/UidsTable';

export const Dashboard = () => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <InstrumentsHeatmap />
      </Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <UidsTable />
      </Paper>
    </Grid>
  </Grid>
);
