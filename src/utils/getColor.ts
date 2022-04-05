import { green, orange, red } from '@mui/material/colors';

export const getColor = (count: number) => {
  if (count < 10) {
    return green[100];
  } else if (count < 15) {
    return orange[100];
  } else {
    return red[200];
  }
};
