import {
  Autocomplete,
  Box,
  Chip,
  ChipProps,
  CircularProgress,
  Divider,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { CloseVolumeAlert } from 'components/Dashboard/redux';
import { averageSelect } from 'components/Manipulator/redux';
import * as R from 'ramda';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getColor } from 'utils/getColor';

type InstrumentsHeatmapProps = {
  isLoading: boolean;
  alerts: CloseVolumeAlert[];
};

type CustomizedChipProps = {
  chipColor: ReturnType<typeof getColor>;
} & ChipProps;

const CustomizedChip = styled(Chip, {
  shouldForwardProp: (props) => props !== 'chipColor',
})<CustomizedChipProps>(({ chipColor }) => ({
  backgroundColor: chipColor,
}));

export function InstrumentsHeatmap({ isLoading, alerts }: InstrumentsHeatmapProps) {
  const alertsMap = useMemo(() => R.groupBy(R.prop('symbol'), alerts), [alerts]);
  const instruments = useMemo(() => Object.keys(alertsMap), [alertsMap]);
  const navigate = useNavigate();

  const [selectedInstruments, setSelectedInstruments] = useState<string[]>([]);
  const average = useSelector(averageSelect);

  useEffect(() => {
    setSelectedInstruments(instruments);
  }, [instruments]);

  const onClickHandler = useCallback(
    (instrument: string) => () => {
      navigate(`/instruments/${instrument}`);
    },
    [navigate],
  );

  const onChange = (_: React.SyntheticEvent, value: string[]) => {
    setSelectedInstruments(value.length === 0 ? instruments : value);
  };

  if (isLoading) {
    return (
      <Box>
        <CircularProgress sx={{ display: 'flex', margin: '20px auto' }} />
      </Box>
    );
  }

  return (
    <Box>
      <Stack spacing={5} direction="row" alignItems="center">
        <Autocomplete
          multiple
          id="instruments"
          sx={{ width: 500 }}
          options={instruments}
          onChange={onChange}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} label="Select instruments" placeholder="Instruments" />
          )}
        />
        <Typography>{`Count of alerts: ${alerts.length}`}</Typography>
        <Typography>{`Count of instruments: ${
          Object.keys(alertsMap).length
        }`}</Typography>
      </Stack>
      <Divider sx={{ my: 3 }} />
      <Stack spacing={3} direction="row">
        {Boolean(instruments.length) &&
          selectedInstruments.map((i) => (
            <CustomizedChip
              label={`${i} (${alertsMap[i].length})`}
              key={i}
              onClick={onClickHandler(i)}
              chipColor={getColor(alertsMap[i].length, average)}
            />
          ))}
        <Chip label="More instruments..." onClick={() => {}} />
      </Stack>
    </Box>
  );
}
