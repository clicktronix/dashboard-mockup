import { Grid } from '@mui/material';
import { InstrumentsHeatmap } from 'components/InstrumentsHeatmap';
import {
  datePeriodParamsSelect,
  limitSelect,
  sensorsSelect,
} from 'components/Manipulator/redux';
import { SensorTable } from 'components/SensorTable';
import { SearchBar } from 'components/shared/SearchBar';
import { Tile } from 'components/shared/Tile';
import { UidsTable } from 'components/UidsTable';
import * as R from 'ramda';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  useLazyGetCloseVolumeQuery,
  useLazyGetProfitabilityByIdQuery,
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

  const [uuid, setUuid] = useState('');
  const [fetchProfitabilityAlert, { isFetching: isProfitabilityAlertFetching, data }] =
    useLazyGetProfitabilityByIdQuery();
  const alertsMap = useMemo(
    () => R.groupBy(R.prop('symbol'), closeVolumeAlerts),
    [closeVolumeAlerts],
  );

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUuid(e.target.value);
  };

  const onSearchClick = () => {
    fetchProfitabilityAlert(uuid);
  };

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
      <Grid item xs={6} container spacing={3}>
        {sensors.closeVolume && (
          <Grid item xs={12}>
            <Tile isFetching={isCloseVolumeFetching} title="Instruments bar">
              <InstrumentsHeatmap alertsMap={alertsMap} />
            </Tile>
          </Grid>
        )}
        <Grid item xs={12}>
          <Tile isFetching={isProfitabilityFetching || isCloseVolumeFetching}>
            <SensorTable
              profitabilityAlertsCount={profitabilityAlerts.length}
              closeVolumeAlertsCount={closeVolumeAlerts.length}
              instrumentsCount={Object.keys(alertsMap).length}
            />
          </Tile>
        </Grid>
      </Grid>
      {sensors.profitability && (
        <Grid item xs={6}>
          <Tile
            isFetching={isProfitabilityFetching || isProfitabilityAlertFetching}
            title="UUIDs bar"
            searchBar={
              <SearchBar
                sx={{ width: 400 }}
                value={uuid}
                placeholder="Search by id"
                onChange={onSearchChange}
                onClick={onSearchClick}
              />
            }
          >
            <UidsTable alerts={data ? [data] : profitabilityAlerts} />
          </Tile>
        </Grid>
      )}
    </Grid>
  );
};
