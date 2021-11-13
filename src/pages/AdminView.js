import { Divider, Grid, Typography } from '@mui/material'

import React from 'react';
import AppBarTop from '../Layouts/AppBarTop';
import Feature from '../Layouts/Feature';
import ResumeList from '../Layouts/ResumeList';

const data = [
    { Name: 'Sarthak', Phno: '8923918283', email: 'sarthak@gmail.com', date: 'time', skills: ['C++','SQL', 'Java'] },
    { Name: 'Nitin', Phno: '982398901', email: 'nitin@gmail.com', date: 'time', skills: ['C++', 'Python', 'Javascript'] },
    { Name: 'Abhishek', Phno: '7834289333', email: 'abhishek@gmail.com', date: 'time', skills: ['C++', 'django', 'python'] },
    { Name: 'Ziyad', Phno: '8949289230', email: 'ziyad@gmail.com', date: 'time', skills: ['C++', 'Python', 'Java'] },
    { Name: 'Goutham', Phno: '7839238943', email: 'gouthamgmail.com', date: 'time', skills: ['C++', 'Python', 'ML'] },
]



function AdminView() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={3}>

                    <Feature />



                </Grid>


                <Divider orientation="vertical" flexItem>

                </Divider>
                <Grid item xs={8.9} >
                    <AppBarTop />

                    <ResumeList resumeData={data} />
                </Grid>

            </Grid>

        </div>
    )
}



export default AdminView
