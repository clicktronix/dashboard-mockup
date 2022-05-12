import {
  Autocomplete,
  Box,
  Chip,
  ChipProps,
  Divider,
  Stack,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { averageSelect } from 'components/Manipulator/redux';
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CloseVolumeAlertResponse } from 'services/api/types/responses';
import { getColor } from 'utils/getColor';

import { setInstrument } from './redux/actions';
import { selectedInstrumentsSelect } from './redux/selectors';

type InstrumentsHeatmapProps = {
  alertsMap: Record<string, CloseVolumeAlertResponse[]>;
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

export function InstrumentsHeatmap({ alertsMap }: InstrumentsHeatmapProps) {
  const instruments = useMemo(() => Object.keys(alertsMap), [alertsMap]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedInstruments = useSelector(selectedInstrumentsSelect);
  const average = useSelector(averageSelect);

  const onClickHandler = useCallback(
    (instrument: string) => () => {
      navigate(`/symbol/${instrument}`, {
        state: {
          sensor: 'close_volume',
        },
      });
    },
    [navigate],
  );

  const onChange = (_: React.SyntheticEvent, value: string[]) => {
    dispatch(setInstrument(value));
  };

  return (
    <Box>
      <Stack spacing={5} direction="row" alignItems="center">
        <Autocomplete
          multiple
          id="instruments"
          value={selectedInstruments}
          sx={{ width: 370 }}
          options={instruments}
          onChange={onChange}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} label="Select instruments" placeholder="Instruments" />
          )}
        />
      </Stack>
      <Divider sx={{ my: 3 }} />
      {(selectedInstruments.length > 0 ? selectedInstruments : instruments)
        .slice()
        .sort((a, b) => alertsMap[b].length - alertsMap[a].length)
        .map((i) => (
          <CustomizedChip
            label={
              <span>
                {i} <b>({alertsMap[i]?.length})</b>
              </span>
            }
            key={i}
            onClick={onClickHandler(i)}
            chipColor={getColor(alertsMap[i].length, average)}
          />
        ))}
    </Box>
  );
}
