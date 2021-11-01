import { Grid, Typography } from '@mui/material'

import React from 'react';
import AppBarTop from '../Layouts/AppBarTop';
import Feature from '../Layouts/Feature';
import ResumeList from '../Layouts/ResumeList';
function AdminView() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Feature />
                </Grid>
                <Grid item xs={9}>
                    <AppBarTop />
                    <ResumeList />
                </Grid>
                
            </Grid>
            
        </div>
    )
}

export default AdminView
