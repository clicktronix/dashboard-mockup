import { Grid } from '@mui/material';
import { InstrumentsTable } from 'components/InstrumentsTable';
import { datePeriodParamsSelect, limitSelect } from 'components/Manipulator/redux';
import { SearchBar } from 'components/shared/SearchBar';
import { Tile } from 'components/shared/Tile';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useLazyGetCloseVolumeInstrumentQuery } from 'services/api';

export function SymbolDashboard() {
  const params = useParams();
  const navigate = useNavigate();
  const [symbol, setSymbol] = useState(params.id || '');
  const limit = useSelector(limitSelect);
  const datePeriodParams = useSelector(datePeriodParamsSelect);
  const [trigger, { isFetching, data = [] }] = useLazyGetCloseVolumeInstrumentQuery();

  const fetchSymbols = useCallback(async () => {
    if (symbol && symbol.length > 4) {
      if (!params.id) {
        navigate(`/symbol/${symbol}`, { replace: true });
      }
      await trigger({
        symbol: symbol,
        limit,
        period: datePeriodParams,
      });
    }
  }, [datePeriodParams, limit, navigate, params.id, symbol, trigger]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSymbol(e.target.value.toUpperCase());
  };

  const onSearchClick = () => {
    fetchSymbols();
  };

  useEffect(() => {
    fetchSymbols();
  }, [fetchSymbols]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Tile
          isFetching={isFetching}
          title={symbol || 'Enter instrument name'}
          withReturn
          searchBar={
            <SearchBar value={symbol} onChange={onSearchChange} onClick={onSearchClick} />
          }
        />
      </Grid>
      {Boolean(data.length) && (
        <Grid item xs={12}>
          <InstrumentsTable data={data} isFetching={isFetching} />;
        </Grid>
      )}
    </Grid>
  );
}
