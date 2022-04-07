import { green, orange, red } from '@mui/material/colors';

export const getColor = (count: number, average: number) => {
  if (count < average) {
    return green[100];
  } else if (count < average + 5) {
    return orange[100];
  } else {
    return red[200];
  }
};
