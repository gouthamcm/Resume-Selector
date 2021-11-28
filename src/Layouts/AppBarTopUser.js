import React, {useState} from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import resume from '../Assets/resume_logo.png'
import { Redirect } from 'react-router';

import { Link, NavLink } from 'react-router-dom';

// import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2' // navy blue
        },
      secondary: {
          
          main: "#f17105" // orange -> pumpkin
      },
      tertiary: {
          main: "#e6c229" //yellow -> jonquil
      },
      white: {
          main: "#fff" // white
      }
    }
  });


function AppBarTopUser() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [navigateWelcome, setNavigateWelcome] = useState(false);
    // const 
    const handleChange = (event) => {
        setAuth(event.target.checked);
    };
    const handleWelcome = ()=> {
        setNavigateWelcome(true);
    }
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    if(navigateWelcome){
        return (<Redirect to='/welcome' />)
    }
    return (
        <div>
        <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary" >
                <Toolbar>
                    <Box onClick={handleWelcome} component="img" src={resume} sx={{ width: 110, height: 60, m: 1 }} style={{cursor: 'pointer'}}>
                    </Box>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                    {/* <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            edge="end"
                            
                        >
                            <AccountCircle />
                        </IconButton> */}
                    {/* <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem ><Link style={{textDecoration:'none', color: 'black'}} to ="/admin/upload" >Upload Resume</Link></MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu> */}

                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </Box>
        </ThemeProvider>
        </div>
    )
}

export default AppBarTopUser
