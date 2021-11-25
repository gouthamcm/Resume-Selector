import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Redirect, useHistory } from 'react-router';
import Divider from '@mui/material/Divider';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Landing() {
    // const [navigate, setNavigate] = React.useState(false);
    // const [ref, setRef] = useState('');
    let history = useHistory();

    const handleAdmin = () => {
        // setNavigate(true);
        // setRef('/login'); 
        history.push('/login');  
    } 
    const handleApplicant=()=>{
        history.push('/user');
    }
  

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my:14,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'warning.main' }}>
              <SchoolIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Applicant
            </Typography>
            <Box  sx={{ mt: 1, width:'100%' }}>
              
              <Button
                onClick={handleApplicant}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Take this path, Applicant
              </Button>
              
            </Box>
            <br />
            <br />
            
            <br />
            <Divider variant="middle" />
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <ComputerIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Admin
            </Typography>
            <Box sx={{ mt: 1, width:'100%' }}>
              
              <Button
                onClick={handleAdmin}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Admin? Log in please
              </Button>
              {/* {navigate?<Redirect to={ref}} */}
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}