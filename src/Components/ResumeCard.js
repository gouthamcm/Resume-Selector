import React from 'react'
import { Button, Box, Card, CardActions, CardContent, Grid, CardMedia, Typography, Chip } from '@mui/material'
import MdPhone from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

function ResumeCard({ resumeData, ...other }) {

    // const handleDownload = () => {
    //     // window.open('http://127.0.0.1:8000/static/uploads/'+, '_blank');
    // }
    return resumeData.map(ele => (
        <div>
            <Box sx={{ m: 2 }}>
                <Card sx={{ maxWidth: 700 }}>


                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {ele.first_name}
                        </Typography>
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
                        <Button variant="outlined" startIcon={<EmailIcon />}>
                            Mail
                        </Button>

                        <Button variant="outlined" startIcon={<DownloadIcon />} onClick={() => {window.open('http://127.0.0.1:8000/static/uploads/'+ele.first_name, '_blank');}} >
                            Download
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    ))
}

export default ResumeCard
