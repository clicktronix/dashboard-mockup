import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Chart } from 'components/Chart';
import { MetricsTable } from 'components/MetricsTable';
import { Tile } from 'components/shared/Tile';
import { useLocation } from 'react-router-dom';
import { useGetCloseVolumeByIdQuery, useGetProfitabilityByIdQuery } from 'services/api';

const CustomizedPaper = styled(Paper)(() => ({
  padding: 2,
  display: 'flex',
  flexDirection: 'column',
  height: 300,
}));

export function MetricsDashboard() {
  const queryMap: Record<
    string,
    typeof useGetProfitabilityByIdQuery | typeof useGetCloseVolumeByIdQuery
  > = {
    ['profitability']: useGetProfitabilityByIdQuery,
    ['close_volume']: useGetCloseVolumeByIdQuery,
  };
  const location = useLocation();
  const [, sensor, id] = location.pathname.split('/');
  const { data, isFetching } = queryMap[sensor](id);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Tile isFetching={isFetching}>
          <Typography variant="h5">{data?.userUUID}</Typography>
        </Tile>
      </Grid>
      <Grid item xs={12}>
        <Tile isFetching={isFetching}>
          <MetricsTable data={data} sensor={sensor} />
        </Tile>
      </Grid>
      <Grid item xs={6}>
        <CustomizedPaper>
          <Chart />
        </CustomizedPaper>
      </Grid>
      <Grid item xs={6}>
        <CustomizedPaper>
          <Chart />
        </CustomizedPaper>
      </Grid>
      <Grid item xs={6}>
        <CustomizedPaper>
          <Chart />
        </CustomizedPaper>
      </Grid>
    </Grid>
  );
}
