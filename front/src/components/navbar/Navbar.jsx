import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import logo from '../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';

const pages = [
  {
    title: 'Inicio',
    link: '/',
  },
  {
    title: 'Sobre mí',
    link: '/about',
  },
  {
    title: 'Tratamientos',
    link: '/treatment',
  },
  {
    title: 'Contacto',
    link: '/contact',
  },
];

function NavBar() {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleCloseNavMenu = (link) => {
    navigate(link);
    setOpenDrawer(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#AB47BC' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img src={logo} alt="Los colores de la luz" className="img-nav" style={{ width: '90px' }} />
            </Link>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => handleCloseNavMenu(page.link)}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  paddingRight: '16px',
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
            >
              <Box
                sx={{
                  width: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingTop: '32px',
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page.title}
                    onClick={() => handleCloseNavMenu(page.link)}
                    sx={{ my: 2, color: 'black' }}
                  >
                    {page.title}
                  </Button>
                ))}
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
