import { Grid, TextField, Box, Container, Paper, Typography, Button, Fade, CircularProgress } from '@mui/material'
import Send from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react'
const Input = styled('input')({
    display: 'none',
});

function UserUpload() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phNumber, setPhNumber] = useState('');
    const [loading, setLoading] = React.useState(false);
    const [query, setQuery] = React.useState('idle');
    const timerRef = React.useRef();

    React.useEffect(
        () => () => {
            clearTimeout(timerRef.current);
        },
        [],
    );

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleClickQuery = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        if (query !== 'idle') {
            setQuery('idle');
            return;
        }

        setQuery('progress');
        timerRef.current = window.setTimeout(() => {
            setQuery('success');
        }, 2000);
    };

    const handleSubmission = () => {
        const formData = new FormData();
        // setIsFilePicked(false);
        // window.location.reload();
        
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        if (query !== 'idle') {
            setQuery('idle');
            return;
          }
      
        setQuery('progress');

        timerRef.current = window.setTimeout(() => {
            setQuery('success');
        }, 2000);
        setIsFilePicked(false);
        formData.append('First Name', firstName);
        formData.append('Last Name', lastName);
        formData.append('Email', email);
        formData.append('Phone Number', phNumber);
        formData.append('File', selectedFile);
        console.log(formData);
        // fetch(
        //     url,
        //     {
        //         method: 'POST',
        //         body: formData
        //     }
        // )
        // .then((response)=>response.json())
        // .then((result)=>{
        //     console.log('Success', result);
        // })
        // .catch((error) => {
        //     console.log('Error', error);
        // });
    };

    return (
        <div>
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
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Email"
                                    fullWidth
                                    onInput={e => setEmail(e.target.value)}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
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
                                <Box sx={{ height: 40 }}>
                                    {query === 'success' ? (
                                        <Typography>Success!</Typography>
                                    ) : (
                                        <Fade
                                            in={query === 'progress'}
                                            style={{
                                                transitionDelay: query === 'progress' ? '800ms' : '0ms',
                                            }}
                                            unmountOnExit
                                        >
                                            <CircularProgress />
                                        </Fade>
                                    )}
                                </Box>
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

export default UserUpload
