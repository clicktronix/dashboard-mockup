import { DateTimePicker } from '@mui/lab';
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';

export function Manipulator() {
  const [value, setValue] = useState<Date | null>(new Date('2014-08-18T21:11:54'));
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(5);

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <FormGroup>
      <Stack
        sx={{ display: 'flex', justifyContent: 'space-between' }}
        direction="row"
        alignItems="center"
      >
        <Stack direction="column">
          <FormControlLabel control={<Checkbox />} label="Profitability" />
          <FormControlLabel control={<Checkbox />} label="Close volume" />
        </Stack>
        <Stack spacing={2} direction="row" alignItems="center">
          <Stack spacing={1} direction="row" alignItems="center">
            <Button variant="outlined" onClick={() => setHours((s) => s + 1)}>
              +
            </Button>
            <TextField
              id="hours"
              label="Hours"
              variant="standard"
              value={hours}
              sx={{ width: 55 }}
            />
            <Button variant="outlined" onClick={() => setHours((s) => s - 1)}>
              -
            </Button>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center">
            <Button variant="outlined" onClick={() => setMinutes((s) => s + 5)}>
              +
            </Button>
            <TextField
              id="hours"
              label="Minutes"
              variant="standard"
              value={minutes}
              sx={{ width: 55 }}
            />
            <Button variant="outlined" onClick={() => setMinutes((s) => s - 5)}>
              -
            </Button>
          </Stack>
        </Stack>
        <Stack spacing={2} direction="row">
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
        </Stack>
      </Stack>
    </FormGroup>
  );
}
