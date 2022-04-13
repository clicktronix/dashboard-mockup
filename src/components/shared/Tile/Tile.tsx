import { Box, CircularProgress, Paper } from '@mui/material';

type TileProps = {
  children: JSX.Element;
  isFetching?: boolean;
  error?: string;
};

export function Tile({ isFetching = false, children }: TileProps) {
  if (isFetching) {
    return (
      <Paper sx={{ p: 2 }}>
        <Box>
          <CircularProgress sx={{ display: 'flex', margin: '50px auto' }} />
        </Box>
      </Paper>
    );
  }
  return <Paper sx={{ p: 2 }}>{children}</Paper>;
}
