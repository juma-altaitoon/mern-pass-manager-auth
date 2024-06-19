import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';

const pages = [
    { title: 'About', link: '/about' },
    { title: 'Page2', link: "" },
    { title: 'Page3', link: "" },
];
const settings = ['Profile', 'Dashboard', 'Logout'];

export default function NavMenu() {
  const [ anchorElNav, setAnchorElNav ] = useState(null);
  const [ anchorElUser, setAnchorElUser ] = useState(null);
  const [ auth, setAuth ] = useState(true);

  const handleChange = (event) => { 
    setAuth(event.target.checked);
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Box sx={{ flexGrow: 1 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={ auth ? 'Logout' : 'Login' }
          />
        </FormGroup>
      </Box>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CRED-GUARD
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" href={page.link}>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly' }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                href={page.link}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography>{page.title}</Typography>
                
              </Button>
            ))}
          </Box>
          {auth && (
          <Box sx={{ flexGrow: 0 }}>  
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* Add to Avatar: {...stringAvatar({fullName})} */}
                <Avatar alt="FL">FL</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          )}
          {!auth && (
          <Box sx={{ flexGrow: 0 }} >
            <Button color='inherit' href='/signin'>Sign In</Button>
            <Button color='inherit' href='/signup'>Sign Up</Button>
          </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}


// export default function NavMenu() {

//     return(
//         <nav className='navigation'>
//             <ul>
//                 <li>
//                     <Link to='/'>Home</Link>
//                 </li>
//                 <li>
//                     <Link to='/about'>About</Link>
//                 </li>
//                 <li>
//                     <Link to='/signup'>Sing Up</Link>
//                 </li>
//                 <li>
//                     <Link to='/signin'>Sign In</Link>
//                 </li>
//             </ul>
//         </nav>
//     )
// }
