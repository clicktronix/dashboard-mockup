import {
  Autocomplete,
  Box,
  Chip,
  ChipProps,
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
  alerts: CloseVolumeAlert[];
};

type CustomizedChipProps = {
  chipColor: ReturnType<typeof getColor>;
} & ChipProps;

const CustomizedChip = styled(Chip, {
  shouldForwardProp: (props) => props !== 'chipColor',
})<CustomizedChipProps>(({ chipColor }) => ({
  backgroundColor: chipColor,
  margin: 6,
}));

export function InstrumentsHeatmap({ alerts }: InstrumentsHeatmapProps) {
  const alertsMap = useMemo(() => R.groupBy(R.prop('symbol'), alerts), [alerts]);
  const instruments = useMemo(() => Object.keys(alertsMap), [alertsMap]);
  const navigate = useNavigate();

  const [selectedInstruments, setSelectedInstruments] = useState<string[]>([]);
  const average = useSelector(averageSelect);

  useEffect(() => {
    setSelectedInstruments(instruments);
  }, [instruments]);

  const onClickHandler = useCallback(
    (instrument: string, count: number) => () => {
      navigate(`/instruments/${instrument}?limit=${count}`);
    },
    [navigate],
  );

  const onChange = (_: React.SyntheticEvent, value: string[]) => {
    setSelectedInstruments(value.length === 0 ? instruments : value);
  };

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
      {Boolean(instruments.length) &&
        selectedInstruments
          .sort((a, b) => alertsMap[b].length - alertsMap[a].length)
          .map((i) => (
            <CustomizedChip
              label={
                <span>
                  {i} <b>({alertsMap[i]?.length})</b>
                </span>
              }
              key={i}
              onClick={onClickHandler(i, alertsMap[i].length)}
              chipColor={getColor(alertsMap[i].length, average)}
            />
          ))}
    </Box>
  );
}
