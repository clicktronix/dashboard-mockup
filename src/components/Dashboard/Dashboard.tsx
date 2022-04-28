import { Grid } from '@mui/material';
import { InstrumentsHeatmap } from 'components/InstrumentsHeatmap';
import {
  datePeriodParamsSelect,
  limitSelect,
  sensorSelect,
} from 'components/Manipulator/redux';
import { SensorTable } from 'components/SensorTable';
import { Tile } from 'components/shared/Tile';
import { UidsTable } from 'components/UidsTable';
import { useSelector } from 'react-redux';
import { useGetCloseVolumeQuery, useGetProfitabilityQuery } from 'services/api/common';

export const Dashboard = () => {
  const datePeriodParams = useSelector(datePeriodParamsSelect);
  const limit = useSelector(limitSelect);
  const { data: profitabilityAlerts, isFetching: isProfitabilityFetching } =
    useGetProfitabilityQuery({ limit, period: datePeriodParams });
  const { data: closeVolumeAlerts, isFetching: isCloseVolumeFetching } =
    useGetCloseVolumeQuery({ limit, period: datePeriodParams });
  const sensors = useSelector(sensorSelect);

  return (
    <Grid container spacing={3}>
      {sensors.closeVolume && (
        <Grid item xs={12}>
          <Tile isFetching={isCloseVolumeFetching} title="Instruments bar">
            <InstrumentsHeatmap alerts={closeVolumeAlerts ? closeVolumeAlerts : []} />
          </Tile>
        </Grid>
      )}
      {sensors.profitability && (
        <Grid item xs={6}>
          <Tile isFetching={isProfitabilityFetching} title="UUIDs bar">
            <UidsTable alerts={profitabilityAlerts ? profitabilityAlerts : []} />
          </Tile>
        </Grid>
      )}
      <Grid item xs={6}>
        <Tile isFetching={isProfitabilityFetching && isCloseVolumeFetching}>
          <SensorTable
            profitabilityAlerts={profitabilityAlerts ? profitabilityAlerts : []}
            closeVolumeAlerts={closeVolumeAlerts ? closeVolumeAlerts : []}
          />
        </Tile>
      </Grid>
    </Grid>
  );
};
