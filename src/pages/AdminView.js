import { Grid, Typography } from '@mui/material'

import React from 'react';
import AppBarTop from '../Layouts/AppBarTop';
import Feature from '../Layouts/Feature';


function AdminView() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Feature />
                </Grid>
                <Grid item xs={9}>
                    <AppBarTop />
                </Grid>
                
            </Grid>
            
        </div>
    )
}

export default AdminView
