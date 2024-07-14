import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" component="footer">
      <Container maxWidth="md">
        <Toolbar>
          <Box display="flex" flexDirection="column" alignItems="center" width="100%">
            <Box display="flex" justifyContent="center" mb={2}>
              <IconButton color="inherit" href="https://facebook.com">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com">
                <InstagramIcon />
              </IconButton>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
              <Box display="flex" alignItems="center" mb={1}>
                <LocationOnIcon />
                <Typography variant="body1" color="inherit" ml={1}>
                  Manuel Lopera y Francisco Montaño 
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <PhoneIcon />
                <Typography variant="body1" color="inherit" ml={1}>
                  +593 996097226
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" color="inherit">
              &copy; {new Date().getFullYear()} TecnoDay. Todos los derechos reservados.
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
