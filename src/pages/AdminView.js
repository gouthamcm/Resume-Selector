import { Divider, Grid, Typography } from '@mui/material'
import { Autocomplete, Button, Chip, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

import React, { useState } from 'react';
import AppBarTop from '../Layouts/AppBarTop';
import Feature from '../Layouts/Feature';
import ResumeList from '../Layouts/ResumeList';
import EmptyContent from '../Components/EmptyContent';
import { Redirect } from 'react-router';
// const data2 = [
//     { Name: 'Sarthak', Phno: '8923918283', email: 'sarthak@gmail.com', date: 'time', skills: ['C++', 'SQL', 'Java'], color: 'success.main' },
//     { Name: 'Nitin', Phno: '982398901', email: 'nitin@gmail.com', date: 'time', skills: ['C++', 'Python', 'Javascript'] },
//     { Name: 'Abhishek', Phno: '7834289333', email: 'abhishek@gmail.com', date: 'time', skills: ['C++', 'django', 'python'] },
//     { Name: 'Ziyad', Phno: '8949289230', email: 'ziyad@gmail.com', date: 'time', skills: ['C++', 'Python', 'Java'] },
//     { Name: 'Goutham', Phno: '7839238943', email: 'gouthamgmail.com', date: 'time', skills: ['C++', 'Python', 'ML'] },
// ]

// let data=[]
// const data3 = []

function AdminView() {
    const [isLoading, setIsLoading] = useState(true)
    const [skills, setSkills] = useState([]);
    const [data, setData] = useState([]);
    const [isData, setIsData] = useState(false)
    const handleChange = (value) => {
        if (value == '') console.log('empty');
        setSkills(skills => [...skills, value]);
        console.log(skills);
    }
    const handleInput = (e, value) => {
        setSkills(value)
        // console.log(value);

    };
    // console.log(skills);

    const handleSubmit = () => {
        // console.log("Inside submit");
        const formData = new FormData();
        formData.append("keywords", JSON.stringify(skills))
        let token = localStorage.getItem('auth_token');
        // console.log(JSON.stringify(skills));
        fetch(
            'http://127.0.0.1:8000/get_resume',
            {
                method: 'POST',
                headers: {
                    'Authorization': 'Token ' + token,
                },
                body: formData,
            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log('Success', result.users);
                localStorage.setItem('data', result.users);
                // window.location.reload(); 
                setData(result.users);
                if (result.users.length > 0) {
                    setIsData(true);
                }
                else{
                    setIsData(false);
                }
                // console.log(data);
                // console.log(data2);
                // console.log('Success', result.users[0]);
            })
            .catch((error) => {
                console.log('Error', error);
            });

    }
    if(localStorage.getItem('username')==null){
        return(<Redirect to='/*'/>)
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
                            options={topSkills.map((option) => option.title)}
                            
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
                    {isData ?
                        (<ResumeList resumeData={data} />) :
                        (<EmptyContent />)
                    }
                    {/* <ResumeList resumeData={data} /> */}

                </Grid>

            </Grid>

        </div>
    )
}



export default AdminView

const topSkills = [
    { title: 'C' },
    { title: 'C++' },
    { title: 'Python' },
    { title: 'Java' },
    { title: 'Javascript' },
    { title: 'HTML/CSS' },
    { title: 'SQL' },
    { title: 'Machine Learning' },
    { title: 'Data Science' },

];