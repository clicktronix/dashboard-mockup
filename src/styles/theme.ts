import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export { theme };
