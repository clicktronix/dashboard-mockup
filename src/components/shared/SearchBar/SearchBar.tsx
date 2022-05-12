import SearchIcon from '@mui/icons-material/Search';
import { SxProps, Theme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { ChangeEvent, MouseEvent } from 'react';

type SearchBarProps = {
  value?: string;
  sx?: SxProps<Theme>;
  placeholder?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({ value, onClick, onChange, sx, placeholder }: SearchBarProps) {
  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Paper
      component="form"
      sx={{ p: 0.5, display: 'flex', alignItems: 'center', width: 330, ...sx }}
    >
      <InputBase
        value={value}
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search instrument' }}
        onChange={onChange}
      />
      <IconButton
        type="submit"
        sx={{ p: '10px' }}
        aria-label="search"
        onClick={onClickHandler}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
