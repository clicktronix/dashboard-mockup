import ClearIcon from '@mui/icons-material/Clear';
import { DateTimePicker as MuiDateTimePicker } from '@mui/lab';
import { Box, IconButton, TextField } from '@mui/material';

type DateTimePickerProps = {
  value: string | null;
  label: string;
  onChange: (value: Date | null) => void;
  onClear: () => void;
};

export function DateTimePicker({ value, label, onClear, onChange }: DateTimePickerProps) {
  return (
    <Box sx={{ position: 'relative' }}>
      <MuiDateTimePicker
        label={label}
        value={value}
        onChange={onChange}
        renderInput={(params) => <TextField sx={{ minWidth: '260px' }} {...params} />}
      />
      <IconButton
        edge="start"
        sx={{ margin: '8px 0 0 -82px', position: 'absolute' }}
        onClick={onClear}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
}
