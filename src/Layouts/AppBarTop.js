import React, { useState } from 'react'

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
import { Redirect, useHistory } from 'react-router';
import Menu from '@mui/material/Menu';
import resume from '../Assets/resume.png'

import {Link, NavLink} from 'react-router-dom';

// import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: "#e4572e"
      },
      secondary: {
        main: "#279af1"
      }
  }
});

function AppBarTop() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [navigate, setNavigate]=useState(false);
    let history = useHistory()
    // const 
    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        fetch(
            'http://127.0.0.1:8000/auth/token/logout/',
            {
                method: 'POST',
                
                
            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log('Success', result);
                localStorage.clear();
                setNavigate(true);
            })
            .catch((error) => {
                console.log('Error', error);
                // console.log("error");
            });
    };
    const handleRedirect=()=>{
        // setNavigate(true);
        history.push('/recruiter/upload');
    }
    if(navigate){
        return(<Redirect to='/signin'/>)
    }
    return (
        <ThemeProvider theme={theme}>
        <Box  sx={{ flexGrow: 1 }}>
            {/* <Box component="img" src={resume} sx={{ width: 110, height: 60, m:1}}>

            </Box> */}
            <AppBar position="static" color="primary" >
                <Toolbar>
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        
                    </Typography>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            edge="end"
                            
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
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
                            <MenuItem onClick={handleRedirect} >Upload Resume</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    
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
    )
}

export default AppBarTop
