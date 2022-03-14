import { DateTimePicker } from '@mui/lab';
import { Checkbox, FormControlLabel, FormGroup, Stack, TextField } from '@mui/material';
import { useState } from 'react';

import { Slider } from '../Slider';

export function Manipulator() {
  const [value, setValue] = useState<Date | null>(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <FormGroup>
      <Stack direction="row" alignItems="center">
        <FormControlLabel control={<Checkbox />} label="Profitability" />
        <FormControlLabel control={<Checkbox />} label="Close volume" />
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
      <Slider />
    </FormGroup>
  );
}
