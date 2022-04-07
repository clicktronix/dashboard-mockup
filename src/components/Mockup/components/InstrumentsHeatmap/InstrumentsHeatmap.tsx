import {
  Autocomplete,
  Box,
  Checkbox,
  Chip,
  ChipProps,
  Divider,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { averageSelect } from 'components/Manipulator/redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getColor } from 'utils/getColor';
import { getSize } from 'utils/getSize';

const instrumentsMock = [
  { name: 'EURUSD', count: 1 },
  { name: 'USDBTC', count: 2 },
  { name: 'USDJPY', count: 1 },
  { name: 'GBPUSD', count: 6 },
  { name: 'AUDUSD', count: 6 },
  { name: 'USDCHF', count: 3 },
  { name: 'USDCAD', count: 2 },
];

type CustomizedChipProps = {
  chipColor: ReturnType<typeof getColor>;
  chipSize: ReturnType<typeof getSize>;
} & ChipProps;

const CustomizedChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== ('chipColor' || 'chipSize'),
})<CustomizedChipProps>(({ chipColor, chipSize }) => ({
  backgroundColor: chipColor,
  transform: `scale(${chipSize})`,
}));

export function InstrumentsHeatmap() {
  const navigate = useNavigate();
  const onClickHandler = (instrument: string) => () => {
    navigate(`/instruments/${instrument}`);
  };
  const [selectedInstruments, setSelectedInstruments] = useState(instrumentsMock);
  const average = useSelector(averageSelect);

  const onAutocompleteChange = (
    _: React.SyntheticEvent,
    value: typeof instrumentsMock,
  ) => {
    setSelectedInstruments(value.length === 0 ? instrumentsMock : value);
  };

  return (
    <Box>
      <FormGroup>
        <Stack
          sx={{ display: 'flex', justifyContent: 'space-between' }}
          direction="row"
          alignItems="center"
        >
          <Autocomplete
            multiple
            id="instruments"
            sx={{ width: '60%' }}
            options={instrumentsMock}
            onChange={onAutocompleteChange}
            getOptionLabel={(option) => option.name}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select instruments"
                placeholder="Instruments"
              />
            )}
          />
          <FormControlLabel control={<Checkbox />} label="Volume" />
          <FormControlLabel control={<Checkbox />} label="Alerts" />
        </Stack>
      </FormGroup>
      <Divider sx={{ my: 3 }} />
      <Stack spacing={3} direction="row" sx={{ flexWrap: 'wrap' }}>
        {selectedInstruments
          .sort((a, b) => b.count - a.count)
          .map((instrument) => (
            <CustomizedChip
              label={
                <span>
                  {instrument.name} <b>({instrument.count})</b>
                </span>
              }
              key={instrument.name}
              onClick={onClickHandler(instrument.name)}
              chipColor={getColor(instrument.count, average)}
              chipSize={getSize(instrument.count)}
            />
          ))}
      </Stack>
    </Box>
  );
}
