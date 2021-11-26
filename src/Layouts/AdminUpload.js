import { Grid, TextField, Box, Container, Paper, Typography, Button } from '@mui/material'
import Send from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react'
import AppBarTop from './AppBarTop';
import AppBarTopAdmin from './AppBarTopAdminUpload';
const Input = styled('input')({
    display: 'none',
});

function AdminUpload() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    const [phNumber, setPhNumber] = useState('');

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
        const formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        // formData.append('email', email);
        formData.append('phone_number', phNumber);
        formData.append('file', selectedFile);
        console.log(formData);
        let token = localStorage.getItem('auth_token');
        
        // fetch(
        //     'localhost:8000/upload_resume/',
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Authorization': token,
        //         },
        //         body: formData
        //     }
        // )
        //     .then((response) => response.json())
        //     .then((result) => {
        //         console.log('Success', result);
        //     })
        //     .catch((error) => {
        //         console.log('Error', error);
        //     });
    };

    return (
        <div>
            <AppBarTopAdmin />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Upload Resume
                    </Typography>
                    <Box sx={{ m: 2 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="First name"
                                    fullWidth
                                    autoComplete="given-name"
                                    onInput={e => setFirstName(e.target.value)}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField

                                    id="lastName"
                                    name="lastName"
                                    label="Last name"
                                    fullWidth
                                    autoComplete="family-name"
                                    onInput={e => setLastName(e.target.value)}
                                    variant="standard"
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Email"
                                    fullWidth
                                    onInput={e=> setEmail(e.target.value)}
                                    variant="standard"
                                />
                            </Grid> */}
                            <Grid item xs={12}>
                                <TextField

                                    id="phone"
                                    name="phone"
                                    label="PhoneNumber"
                                    fullWidth
                                    autoComplete="tel"
                                    onInput={e => setPhNumber(e.target.value)}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <label htmlFor="contained-button-file">
                                    <Input type="file" name="file" id="contained-button-file" multiple onChange={changeHandler} />

                                    <Button variant="contained" component="span">
                                        Upload
                                    </Button>
                                    {isFilePicked ? (
                                        <p>
                                            {selectedFile.name}
                                        </p>
                                    ) : (
                                        <p>please select a file</p>
                                    )}
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" onClick={handleSubmission} endIcon={<Send />}>
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </div>
    )
}

export default AdminUpload
