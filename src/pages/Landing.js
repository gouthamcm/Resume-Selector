import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Redirect, useHistory } from 'react-router';
import Divider from '@mui/material/Divider';


const theme = createTheme();

function Landing() {
    const [navigate, setNavigate] = React.useState(false);
    // const [ref, setRef] = useState('');
    let history = useHistory();

    const handleAdmin = () => {
        // setNavigate(true);
        // setRef('/login'); 
        history.push('/signin');  
        
    } 
    const handleApplicant=()=>{
        // setNavigate(true);
        history.push('/user');
    }
  
    // if(navigate){
    //     return(<Redirect to='/user'/>)
    // }

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
            // backgroundImage: 'url(https://images.unsplash.com/photo-1637410130290-a905c3f910e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzODA1MjQ4Nw&ixlib=rb-1.2.1&q=80&w=1080)',
            backgroundImage: 'url(https://images.unsplash.com/photo-1511984804822-e16ba72f5848?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhpcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)',
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
              Recruiter
            </Typography>
            <Box sx={{ mt: 1, width:'100%' }}>
              
              <Button
                onClick={handleAdmin}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Recruiter? Log in please
              </Button>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default Landing