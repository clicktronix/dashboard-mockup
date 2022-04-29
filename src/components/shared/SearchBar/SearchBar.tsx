import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { ChangeEvent, MouseEvent } from 'react';

type SearchBarProps = {
  value?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({ value, onClick, onChange }: SearchBarProps) {
  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Paper
      component="form"
      sx={{ p: 0.5, display: 'flex', alignItems: 'center', width: 330 }}
    >
      <InputBase
        value={value}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search instrument"
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
