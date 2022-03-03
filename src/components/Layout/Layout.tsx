import { Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';

import { AppBar } from './AppBar';
import { Drawer } from './Drawer';

type LayoutProps = {
  children: React.ReactChild;
};

export function Layout({ children }: LayoutProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen((state) => !state);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="absolute" open={open} toggle={toggleDrawer} />
      <Drawer variant="permanent" open={open} toggle={toggleDrawer} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="xl" sx={{ mt: 3, mb: 3 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}
