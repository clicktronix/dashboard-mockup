import { DateTimePicker } from '@mui/lab';
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

const timeIntervals = [
  '3 min',
  '5 min',
  '10 min',
  '15 min',
  '30 min',
  '45 min',
  '1 hour',
  '2 hour',
  '3 hour',
  '5 hour',
];

export function Manipulator() {
  const [value, setValue] = useState<Date | null>(new Date('2014-08-18T21:11:54'));
  const [average, setAverage] = useState(1);

  const handleSelect = (event: SelectChangeEvent<number>) => {
    setAverage(event.target.value as any);
  };

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <FormGroup>
      <Stack spacing={4} direction="row">
        <FormControlLabel control={<Checkbox />} label="Profitability" />
        <FormControlLabel control={<Checkbox />} label="Close volume" />
        <DateTimePicker
          label="From Date/Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <DateTimePicker
          label="To Date/Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <FormControl>
          <InputLabel id="average-label">Average</InputLabel>
          <Select
            labelId="average-label"
            id="average"
            value={average}
            label="Average"
            sx={{ width: 100, color: 'black' }}
            displayEmpty
            onChange={handleSelect}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Divider sx={{ my: 3 }} />
      <Stack spacing={3} direction="row">
        {timeIntervals.map((interval) => (
          <Button key={interval} variant="outlined" sx={{ px: 3 }}>
            {interval}
          </Button>
        ))}
      </Stack>
    </FormGroup>
  );
}
