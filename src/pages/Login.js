import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory, Redirect } from 'react-router';
import AppBarTopUser from '../Layouts/AppBarTopUser';
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

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                Resume Selector
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// const theme = createTheme();

export default function Login() {

    const [token, setToken] = React.useState('');
    const [redirect, setRedirect] = React.useState(false);

    let history = useHistory();
    const handleRegister = () => {
        history.push('/register');

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        // console.log({
        //     email: data.get('username'),
        //     password: data.get('password'),
        // });
        // setToken('auth_token');

        fetch(
            'http://127.0.0.1:8000/auth/token/login/',
            {
                method: 'POST',
                body: data
            }
        )
            .then((response) => response.json())
            .then((result) => {

                console.log('Success', result);
                setToken(result.auth_token);

                localStorage.setItem('auth_token', result.auth_token);
                localStorage.setItem('username', data.get('username'));
                // let token2 = localStorage.getItem('auth_token');
                // console.log('token is '+token2)
                setRedirect(true);
            })
            .catch((error) => {
                console.log('Error', error);
            });
    };

    if (redirect) {
        return (<Redirect to='/recruiter' />);
    }
    return (
        <div>
            <AppBarTopUser />
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                            color="secondary"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                            />
                            <TextField
                                color="secondary"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />

                            <Button
                                color="secondary"
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>

                                <Grid item>
                                    <Link color="#e6c229" onClick={handleRegister} variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </div>
    );
}