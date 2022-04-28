import { Grid, Paper, styled } from '@mui/material';
import { Chart } from 'components/Chart';
import { InstrumentDetails } from 'components/InstrumentDetails';
import { MetricsTable } from 'components/MetricsTable';
import { SearchBar } from 'components/shared/SearchBar';
import { Tile } from 'components/shared/Tile';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  useLazyGetCloseVolumeByIdQuery,
  useLazyGetProfitabilityByIdQuery,
} from 'services/api';
import { isLocationWithState } from 'utils/guards/isLocationWithState';

const CustomizedPaper = styled(Paper)(() => ({
  padding: 2,
  display: 'flex',
  flexDirection: 'column',
  height: 300,
}));

export function UuidDashboard() {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [uuid, setUuid] = useState(params.id);
  const sensor = isLocationWithState(location) ? location.state.sensor : 'profitability';
  const queryMap = {
    ['profitability']: useLazyGetProfitabilityByIdQuery,
    ['close_volume']: useLazyGetCloseVolumeByIdQuery,
  };
  const [trigger, { isFetching, data }] = queryMap[sensor]();

  const fetchByUuid = useCallback(async () => {
    if (uuid) {
      if (!params.id) {
        navigate(`/uuid/${uuid}`, { replace: true });
      }
      await trigger(uuid);
    }
  }, [navigate, params.id, trigger, uuid]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUuid(e.target.value);
  };

  const onSearchClick = () => {
    fetchByUuid();
  };

  useEffect(() => {
    fetchByUuid();
  }, [fetchByUuid]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Tile
          isFetching={isFetching}
          title={uuid || 'Enter id'}
          withReturn
          searchBar={
            <SearchBar value={uuid} onChange={onSearchChange} onClick={onSearchClick} />
          }
        />
      </Grid>
      {data && (
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Tile isFetching={isFetching}>
                {/* This is a temporary solution
                We are waiting for a backend comparable with profitability to appear */}
                {sensor === 'close_volume' ? (
                  <InstrumentDetails data={data as any} />
                ) : (
                  <MetricsTable data={data} sensor={sensor} />
                )}
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
        </Grid>
      )}
    </Grid>
  );
}
