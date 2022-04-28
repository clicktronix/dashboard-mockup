import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Stack,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DateTimePicker } from 'components/shared/DateTimePicker';
import { Dayjs } from 'dayjs';
import { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { d } from 'utils/dateTime';

import {
  clearFromPeriod,
  clearToPeriod,
  manipulatorSelect,
  Sensor,
  setAverage,
  setLimit,
  setPeriod,
  setSensor,
} from './redux';

type Interval = {
  label: string;
  interval: [number, string];
};

const timeIntervals: Interval[] = [
  { label: '3 min', interval: [3, 'minute'] },
  { label: '5 min', interval: [5, 'minute'] },
  { label: '10 min', interval: [10, 'minute'] },
  { label: '15 min', interval: [15, 'minute'] },
  { label: '30 min', interval: [30, 'minute'] },
  { label: '45 min', interval: [45, 'minute'] },
  { label: '1 hour', interval: [1, 'hour'] },
  { label: '2 hour', interval: [2, 'hour'] },
  { label: '3 hour', interval: [3, 'hour'] },
  { label: '5 hour', interval: [5, 'hour'] },
];

export function Manipulator() {
  const dispatch = useDispatch();
  const { sensors, average, datePeriod, limit } = useSelector(manipulatorSelect);

  const handleAverageSelect = (event: SelectChangeEvent<number>) => {
    dispatch(setAverage(event.target.value as number));
  };

  const handleLimitSelect = (event: SelectChangeEvent<number>) => {
    dispatch(setLimit(event.target.value as number));
  };

  const handleDateChange = (type: string) => (value: Date | Dayjs | null) => {
    if (value) {
      dispatch(
        setPeriod({
          ...datePeriod,
          [type]: d(value).format(),
        }),
      );
    }
  };

  const onIntervalClick = useCallback(
    (interval: [number, string]) => () =>
      dispatch(
        setPeriod({
          from: d().subtract(interval[0], interval[1]).format(),
          to: d().format(),
        }),
      ),
    [dispatch],
  );

  const onSensorChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSensor(e.target.name as Sensor));
  };

  const onDatePeriodFromClear = () => dispatch(clearFromPeriod());

  const onDatePeriodToClear = () => dispatch(clearToPeriod());

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
        <DateTimePicker
          label="From Date/Time"
          value={datePeriod.from}
          onChange={handleDateChange('from')}
          onClear={onDatePeriodFromClear}
        />
        <DateTimePicker
          label="To Date/Time"
          value={datePeriod.to}
          onChange={handleDateChange('to')}
          onClear={onDatePeriodToClear}
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
            onChange={handleAverageSelect}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="limit-label">Limit</InputLabel>
          <Select
            labelId="limit-label"
            id="limit"
            value={limit}
            label="Limit"
            sx={{ width: 100, color: 'black' }}
            displayEmpty
            onChange={handleLimitSelect}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
            <MenuItem value={200}>200</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Divider sx={{ my: 3 }} />
      <Stack spacing={3} direction="row">
        {timeIntervals.map(({ label, interval }) => (
          <Button
            key={label}
            onClick={onIntervalClick(interval)}
            variant="outlined"
            sx={{ px: 3 }}
          >
            {label}
          </Button>
        ))}
      </Stack>
    </FormGroup>
  );
}
