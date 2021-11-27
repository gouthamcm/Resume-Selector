import React from 'react'
import { Button, Box, Card, CardActions, CardContent, Grid, CardMedia, Typography, Chip } from '@mui/material'
import MdPhone from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

function ResumeCard({ resumeData, ...other }) {

    const handleDownload = () => {
        
    }
    return resumeData.map(ele => (
        <div>
            <Box sx={{ m: 2 }}>
                <Card sx={{ maxWidth: 700 }}>
                    <Grid container
                    >
                        <Grid item xs={1}>
                            <Box sx={{ bgcolor: ele.color,  p: 2 }}>
                                
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {ele.Name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Email id: {ele.email}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Phone no: {ele.Phno}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Skills: {ele.skills.map(skill => skill + "   ")}
                                </Typography>

                            </CardContent>
                        </Grid>
                        <Grid spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center" item xs={3}>

                            {/* <Chip icon={<DownloadIcon />} label="Download Resume" /> */}
                        </Grid>
                    </Grid>
                    <CardActions>
                    <Button size="small">Mail</Button>
                        <Button size="small">Call</Button>
                        <Button size="small" onClick={handleDownload}>Download</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    ))
}

export default ResumeCard
