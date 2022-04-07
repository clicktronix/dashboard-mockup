/* eslint-disable prettier/prettier */
import { Grid, Paper } from '@mui/material';
import { InstrumentsHeatmap } from 'components/InstrumentsHeatmap';
import { Manipulator } from 'components/Manipulator';
import { datePeriodSelect, sensorSelect } from 'components/Manipulator/redux';
import { SensorTable } from 'components/SensorTable';
import { UidsTable } from 'components/UidsTable';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import {
  useFetchCloseVolumeAlertsQuery,
  useFetchProfitabilityAlertsQuery,
} from 'services/api/common';

export const Dashboard = () => {
  const datePeriod = useSelector(datePeriodSelect);
  const formattedPeriod =
    datePeriod.from && datePeriod.to
      ? {
        from: dayjs(datePeriod.from).isValid()
          ? dayjs(datePeriod.from).unix()
          : null,
        to: dayjs(datePeriod.to).isValid()
          ? dayjs(datePeriod.to).unix()
          : null,
      }
      : undefined;
  const { data: profitabilityAlerts, isLoading: isProfitabilityLoading } =
    useFetchProfitabilityAlertsQuery(formattedPeriod);
  const { data: closeVolumeAlerts, isLoading: isCloseVolumeLoading } =
    useFetchCloseVolumeAlertsQuery(formattedPeriod);
  const sensors = useSelector(sensorSelect);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Manipulator />
        </Paper>
      </Grid>
      {sensors.closeVolume && (
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <InstrumentsHeatmap
              isLoading={isCloseVolumeLoading}
              alerts={closeVolumeAlerts ? closeVolumeAlerts.data : []}
            />
          </Paper>
        </Grid>
      )}
      {sensors.profitability && (
        <Grid item xs={6}>
          <Paper sx={{ p: 2 }}>
            <UidsTable
              isLoading={isProfitabilityLoading}
              alerts={profitabilityAlerts ? profitabilityAlerts.data : []}
            />
          </Paper>
        </Grid>
      )}
      <Grid item xs={6}>
        <Paper sx={{ p: 2 }}>
          <SensorTable
            isLoading={isProfitabilityLoading && isCloseVolumeLoading}
            profitabilityAlerts={profitabilityAlerts ? profitabilityAlerts.data : []}
            closeVolumeAlerts={closeVolumeAlerts ? closeVolumeAlerts.data : []}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};
