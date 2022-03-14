import { Slider as MuiSlider } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function valueLabelFormat(value: number) {
  return `${value} minutes`;
}

export function Slider() {
  const [value, setValue] = React.useState<number>(10);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: 550 }}>
      <Typography id="non-linear-slider" gutterBottom>
        Minutes: {value}
      </Typography>
      <MuiSlider
        value={value}
        min={5}
        step={1}
        max={180}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
}
