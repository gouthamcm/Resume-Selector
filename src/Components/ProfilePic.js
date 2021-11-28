import { Avatar, Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import { boxSizing } from '@mui/system';
import React from 'react'
import { deepOrange, deepPurple } from '@mui/material/colors';
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

const AccountStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: theme.shape.borderRadiusSm,
    backgroundColor: theme.palette.grey[200]
}));

function ProfilePic() {
    let username = localStorage.getItem('username');

    // let variable = username[0];
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Box sx={{ m: 2 }}>
                    <AccountStyle>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Avatar sx={{ bgcolor: "#fcab10" }}>{username[0]}</Avatar>
                            </Grid>
                            <Grid item xs={9}>
                                <Box sx={{ m: 1 }}>
                                    <Typography variant="subtitle" sx={{ color: "#260F26" }}>
                                        <strong>Hello {username}</strong>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </AccountStyle>
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default ProfilePic
