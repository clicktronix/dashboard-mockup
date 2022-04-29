import { Grid } from '@mui/material';
import { InstrumentsHeatmap } from 'components/InstrumentsHeatmap';
import {
  datePeriodParamsSelect,
  limitSelect,
  sensorsSelect,
} from 'components/Manipulator/redux';
import { SensorTable } from 'components/SensorTable';
import { Tile } from 'components/shared/Tile';
import { UidsTable } from 'components/UidsTable';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  useLazyGetCloseVolumeQuery,
  useLazyGetProfitabilityQuery,
} from 'services/api/common';

export const Dashboard = () => {
  const datePeriodParams = useSelector(datePeriodParamsSelect);
  const limit = useSelector(limitSelect);
  const sensors = useSelector(sensorsSelect);
  const [
    fetchCloseVolume,
    { isFetching: isCloseVolumeFetching, data: closeVolumeAlerts = [] },
  ] = useLazyGetCloseVolumeQuery();
  const [
    fetchProfitability,
    { isFetching: isProfitabilityFetching, data: profitabilityAlerts = [] },
  ] = useLazyGetProfitabilityQuery();

  useEffect(() => {
    if (sensors.closeVolume) {
      fetchCloseVolume({ limit, period: datePeriodParams });
    }
    if (sensors.profitability) {
      fetchProfitability({ limit, period: datePeriodParams });
    }
  }, [
    datePeriodParams,
    fetchCloseVolume,
    fetchProfitability,
    limit,
    sensors.closeVolume,
    sensors.profitability,
  ]);

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
