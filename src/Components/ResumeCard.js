import React from 'react'
import { Button, Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'


function ResumeCard({ resumeData, ...other }) {
    return resumeData.map(ele => (
        <div>
            <Box sx={{ m: 2 }}>
                <Card sx={{ maxWidth: 345 }}>
                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {ele.Name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {ele.email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {ele.Phno}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Email</Button>
                        <Button size="small">Call</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    ))
}

export default ResumeCard
