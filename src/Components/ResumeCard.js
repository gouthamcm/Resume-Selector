import React from 'react'
import { Button, Box, Card, CardActions, CardContent, Grid, CardMedia, Typography, Chip, IconButton } from '@mui/material'
import CardHeader from "@mui/material/CardHeader";
import MdPhone from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import { borders } from '@mui/system';
import { styled } from '@mui/material/styles';
import { Avatar } from 'antd';
import { red } from '@mui/material/colors';
import { deepOrange, deepPurple } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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

function ResumeCard({ resumeData, ...other }) {

    // const handleDownload = () => {
    //     // window.open('http://127.0.0.1:8000/static/uploads/'+, '_blank');
    // }
    return resumeData.map(ele => (
        <div>
            <ThemeProvider theme={theme}>
            <Box sx={{ m: 2 }}>
                <Card sx={{ maxWidth: 700, boxShadow: 3, borderRadius: 5, backgroundColor: '#fff9ff' }}>

                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: "#fcab10" }}>{ele.first_name[0]}</Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        
                        title={ele.first_name}
                        subheader="Novemeber 28, 2021"
                    />

                    <CardContent>
                        {/* <Grid container spacing={2}>
                            <Grid item xs={1}>
                                
                            </Grid>
                            <Grid item xs={11}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {ele.first_name}
                                </Typography>
                            </Grid>
                        </Grid> */}
                        <Typography variant="body2" color="text.secondary">
                            <strong>Email id:</strong> {ele.email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Website:</strong> {ele.website}
                        </Typography>


                    </CardContent>

                    <Grid spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center" item xs={3}>

                        {/* <Chip icon={<DownloadIcon />} label="Download Resume" /> */}
                    </Grid>

                    <CardActions>
                        <Button color="secondary" variant="outlined" startIcon={<EmailIcon />} onClick={()=>window.open(`mailto:${ele.email}?subject=Subject&body=Body%20goes%20here`)}>
                            Mail
                        </Button>

                        <Button color="secondary" variant="outlined" startIcon={<DownloadIcon />} onClick={() => { window.open('http://127.0.0.1:8000/static/uploads/' + ele.first_name, '_blank'); }} >
                            Download
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            </ThemeProvider>
        </div>
    ))
}

export default ResumeCard
