import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
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

  const handleCloseNavMenu = (link) => {
    navigate(link);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#AB47BC' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img src={logo} alt="Los colores de la luz" className="img-nav" style={{ width: '100px' }} />
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
