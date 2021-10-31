import { Grid, Typography } from '@mui/material'

import React from 'react';
import AppBarTop from '../Layouts/AppBarTop';



function AdminView() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    hi
                </Grid>
                <Grid item xs={9}>
                    <AppBarTop />
                </Grid>
                
            </Grid>
            
        </div>
    )
}

export default AdminView
