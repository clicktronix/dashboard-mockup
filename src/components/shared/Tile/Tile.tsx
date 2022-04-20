import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Alert,
  Box,
  CircularProgress,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

type TileProps = {
  children?: JSX.Element;
  title?: string;
  withReturn?: boolean;
  isFetching?: boolean;
  error?: string;
};

export function Tile({
  children,
  isFetching = false,
  withReturn = false,
  title,
  error,
}: TileProps) {
  const navigate = useNavigate();

  const onReturnClick = () => navigate(-1);
  const renderContent = () => {
    if (isFetching) {
      return (
        <Box>
          <CircularProgress sx={{ display: 'flex', margin: '50px auto' }} />
        </Box>
      );
    } else if (error) {
      return <Alert severity="error">{title}</Alert>;
    } else {
      return children ? <Box sx={{ marginTop: 2 }}>{children}</Box> : null;
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {withReturn && (
          <IconButton sx={{ marginRight: 2 }} onClick={onReturnClick}>
            <ArrowBackIcon />
          </IconButton>
        )}
        {title && <Typography variant="h6">{title}</Typography>}
      </Box>
      {renderContent()}
    </Paper>
  );
}
