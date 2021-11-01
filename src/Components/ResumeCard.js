import React from 'react'
import { Button, Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'


const numberOfCards = 11;

function ResumeCard() {
    return (
        <div>
            {[...Array(numberOfCards)].map((e, i) => {
                return (
                    <Box sx={{ m: 2 }}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Box>
                )
            })}
        </div>
    )
}

export default ResumeCard
