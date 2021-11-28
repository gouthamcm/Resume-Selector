import { Grid, TextField, Box, Container, Paper, Typography, Button, Fade, CircularProgress, Alert, AlertTitle } from '@mui/material'
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
    const [alert, setAlert] = useState(false);
    const [alertError, setAlertError] = useState(false);
    const [progress, setProgress] = useState(false);
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

        setProgress(true);
        setAlertError(false);
        setAlert(false);

        // timerRef.current = window.setTimeout(() => {
        //     setQuery('success');
        // }, 2000);
        // setIsFilePicked(false);
        formData.append('first_name', firstName+' '+lastName);
        // formData.append('last_name', lastName);
        // formData.append('email', email);
        // formData.append('phone_number', phNumber);
        formData.append('file', selectedFile);
        // console.log(formData);

        // let token = localStorage.getItem('auth_token');
        // console.log('token: ' + token);
        fetch(
            'http://127.0.0.1:8000/upload_resume/',
            {
                method: 'POST',
                
                body: formData,
                // mode: "no-cors"
            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log('Success', result);
                setAlert(true);

                setProgress(false);
            })
            .catch((error) => {
                console.log('Error', error);
                setAlertError(true);
                setProgress(false);
                // console.log("error");
            });
    };

    return (
        <div>
            {alert ? <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Resume uploaded — <strong>You can enter more!</strong>
            </Alert> : <></>}
            {alertError ? <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                File not Uploaded — <strong>Try again!</strong>
            </Alert> : <></>}
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
                            {/* <Grid item xs={12}>
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
                            </Grid> */}
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
                                {progress ? <CircularProgress color="secondary" /> : <></>}
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

export default UserUpload
