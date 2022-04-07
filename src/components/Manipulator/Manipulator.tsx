import ClearIcon from '@mui/icons-material/Clear';
import { DateTimePicker } from '@mui/lab';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';

import {
  averageSelect,
  clearFromPeriod,
  clearToPeriod,
  datePeriodSelect,
  Sensors,
  sensorSelect,
  setAverage,
  setPeriod,
  setSensor,
} from './redux';

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
  const dispatch = useDispatch();
  const sensors = useSelector(sensorSelect);
  const average = useSelector(averageSelect);
  const datePeriod = useSelector(datePeriodSelect);

  const handleSelect = (event: SelectChangeEvent<number>) => {
    dispatch(setAverage(event.target.value as number));
  };

  const handleDateChange = (type: string) => (value: Date | null) => {
    if (value) {
      dispatch(
        setPeriod({
          ...datePeriod,
          [type]: dayjs(value).format('YYYY-MM-DDTHH:mm:ss'),
        }),
      );
    }
  };

  const onSensorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSensor(e.target.name as Sensors));
  };

  return (
    <FormGroup>
      <Stack spacing={4} direction="row">
        <FormControlLabel
          control={
            <Checkbox
              checked={sensors.profitability}
              name="profitability"
              onChange={onSensorChange}
            />
          }
          label="Profitability"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={sensors.closeVolume}
              name="closeVolume"
              onChange={onSensorChange}
            />
          }
          label="Close volume"
        />
        <Box sx={{ position: 'relative' }}>
          <DateTimePicker
            label="From Date/Time picker"
            value={datePeriod.from}
            onChange={handleDateChange('from')}
            renderInput={(params) => <TextField sx={{ minWidth: '250px' }} {...params} />}
            disableIgnoringDatePartForTimeValidation
          />
          <IconButton
            edge="start"
            color="inherit"
            sx={{ margin: '8px 0 0 -70px', position: 'absolute' }}
            onClick={() => dispatch(clearFromPeriod())}
          >
            <ClearIcon />
          </IconButton>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <DateTimePicker
            label="To Date/Time picker"
            value={datePeriod.to}
            onChange={handleDateChange('to')}
            renderInput={(params) => <TextField {...params} />}
            disableIgnoringDatePartForTimeValidation
          />
          <IconButton
            edge="start"
            color="inherit"
            sx={{ margin: '8px 0 0 -70px', position: 'absolute' }}
            onClick={() => dispatch(clearToPeriod())}
          >
            <ClearIcon />
          </IconButton>
        </Box>
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
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
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
