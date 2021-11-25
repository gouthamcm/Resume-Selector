import { Divider, Grid, Typography } from '@mui/material'
import { Autocomplete, Button, Chip, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

import React, { useState } from 'react';
import AppBarTop from '../Layouts/AppBarTop';
import Feature from '../Layouts/Feature';
import ResumeList from '../Layouts/ResumeList';

// const data = [
//     { Name: 'Sarthak', Phno: '8923918283', email: 'sarthak@gmail.com', date: 'time', skills: ['C++', 'SQL', 'Java'] },
//     { Name: 'Nitin', Phno: '982398901', email: 'nitin@gmail.com', date: 'time', skills: ['C++', 'Python', 'Javascript'] },
//     { Name: 'Abhishek', Phno: '7834289333', email: 'abhishek@gmail.com', date: 'time', skills: ['C++', 'django', 'python'] },
//     { Name: 'Ziyad', Phno: '8949289230', email: 'ziyad@gmail.com', date: 'time', skills: ['C++', 'Python', 'Java'] },
//     { Name: 'Goutham', Phno: '7839238943', email: 'gouthamgmail.com', date: 'time', skills: ['C++', 'Python', 'ML'] },
// ]

const data=[]


function AdminView() {
    const [isLoading, setIsLoading] = useState(true)
    const [skills, setSkills] = useState([]);
    const handleChange = (value) => {
        if (value == '') console.log('empty');
        setSkills(skills => [...skills, value]);
        console.log(skills);
    }
    const handleInput = (e, value) => {
        setSkills(value)
        // console.log(value);

    };
    console.log(skills);

    const handleSubmit = () => {
        console.log("Inside submit");
        // fetch(
        //     url,
        //     {
        //         method: 'POST',
        //         body: JSON.stringify(skills),
        //     }
        // )
        // .then((response)=>response.json())
        // .then((result)=>{
        //     console.log('Success', result);
        // })
        // .catch((error) => {
        //     console.log('Error', error);
        // });
    }
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={3}>

                    <Feature />
                    <div>
                        <Autocomplete
                            multiple
                            id="tags-filled"
                            options={top100Films.map((option) => option.title)}
                            defaultValue={[top100Films[0].title]}
                            freeSolo
                            renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                ))
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="filled"
                                    label=""
                                    placeholder="Skills"
                                />
                            )}
                            sx={{ m: 2 }}
                            // onChange = {e=>handleChange(e.target.value)}
                            onChange={handleInput}
                        />
                        <Button variant="contained" onClick={handleSubmit} endIcon={<SendIcon />} sx={{ m: 2 }}>
                            Send
                        </Button>
                    </div>
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

const top100Films = [
    { title: 'C'},
    { title: 'C++' },
    { title: 'Python' },
    { title: 'Java'},
    { title: 'Javascript' },
    { title: 'HTML/CSS' },
    { title: 'SQL'},
    { title: 'Machine Learning' },
    { title: 'Data Science' },
    
];