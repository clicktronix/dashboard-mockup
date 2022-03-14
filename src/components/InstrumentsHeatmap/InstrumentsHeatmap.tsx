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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getColor } from 'utils/getColor';

const instrumentsMock = [
  { name: 'EURUSD', count: 1 },
  { name: 'USDBTC', count: 2 },
  { name: 'USDJPY', count: 1 },
  { name: 'GBPUSD', count: 6 },
  { name: 'AUDUSD', count: 1 },
  { name: 'USDCHF', count: 3 },
  { name: 'USDCAD', count: 2 },
];

type CustomizedChipProps = {
  chipColor: ReturnType<typeof getColor>;
} & ChipProps;

const CustomizedChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'chipColor',
})<CustomizedChipProps>(({ chipColor }) => ({
  backgroundColor: chipColor,
}));

export function InstrumentsHeatmap() {
  const navigate = useNavigate();
  const onClickHandler = (instrument: string) => () => {
    navigate(`/instruments/${instrument}`);
  };
  const [selectedInstruments, setSelectedInstruments] = useState(instrumentsMock);

  const onChange = (_: React.SyntheticEvent, value: typeof instrumentsMock) => {
    setSelectedInstruments(value.length === 0 ? instrumentsMock : value);
  };

  return (
    <Box>
      <Stack spacing={5} direction="row" alignItems="center">
        <Autocomplete
          multiple
          id="instruments"
          sx={{ width: 500 }}
          options={instrumentsMock}
          onChange={onChange}
          getOptionLabel={(option) => option.name}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} label="Select instruments" placeholder="Instruments" />
          )}
        />
        <Typography>{`Count of instruments: ${instrumentsMock.length + 1}`}</Typography>
        <Typography>{`Count of alerts: ${instrumentsMock.reduce((count, item) => {
          return item.count + count;
        }, 0)}`}</Typography>
      </Stack>
      <Divider sx={{ my: 3 }} />
      <Stack spacing={3} direction="row">
        {selectedInstruments
          .sort((a, b) => b.count - a.count)
          .map((instrument) => (
            <CustomizedChip
              label={`${instrument.name} (${instrument.count})`}
              key={instrument.name}
              onClick={onClickHandler(instrument.name)}
              chipColor={getColor(instrument.count)}
            />
          ))}
        <Chip label="More instruments..." onClick={() => {}} />
      </Stack>
    </Box>
  );
}
