import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Alert,
  Box,
  CircularProgress,
  IconButton,
  Paper,
  PaperProps,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

type TileProps = {
  children?: JSX.Element;
  title?: string;
  withReturn?: boolean;
  isFetching?: boolean;
  searchBar?: JSX.Element;
  error?: string;
} & PaperProps;

export function Tile({
  children,
  isFetching = false,
  withReturn = false,
  title,
  error,
  searchBar,
  ...restProps
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
    <Paper sx={{ p: 2 }} {...restProps}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
          {withReturn && (
            <IconButton sx={{ marginRight: 2 }} onClick={onReturnClick}>
              <ArrowBackIcon />
            </IconButton>
          )}
          {title && <Typography variant="h6">{title}</Typography>}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>{searchBar}</Box>
      </Box>
      {renderContent()}
    </Paper>
  );
}
