import MenuIcon from '@mui/icons-material/Menu';
import { Toolbar, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

type AppBarProps = {
  open: boolean;
  toggle: () => void;
} & MuiAppBarProps;

const CustomizedAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<Omit<AppBarProps, 'toggle'>>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export function AppBar({ toggle, open, ...rest }: AppBarProps) {
  return (
    <CustomizedAppBar open={open} {...rest}>
      <Toolbar sx={{ pr: 3 }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggle}
          sx={{
            marginRight: 4,
            marginLeft: -2,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ textDecoration: 'none' }}
        >
          Dashboard
        </Typography>
      </Toolbar>
    </CustomizedAppBar>
  );
}
