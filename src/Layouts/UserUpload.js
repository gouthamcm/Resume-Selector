import { Grid, TextField, Box, Container, Paper, Typography, Button } from '@mui/material'
import Send from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import React, {useState} from 'react'
const Input = styled('input')({
    display: 'none',
});

function UserUpload() {
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

    const handleSubmission = () => {
        const formData = new FormData();
        formData.append('File', selectedFile);
        console.log(selectedFile.name, selectedFile.size);
        
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
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Last name"
                                    fullWidth
                                    autoComplete="family-name"
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
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <label htmlFor="contained-button-file">
                                    <Input type="file" name="file" id="contained-button-file" multiple onChange={changeHandler}/>
                                    
                                    <Button variant="contained" component="span">
                                        Upload
                                    </Button>
                                    {isFilePicked ?(
                                    <p>
                                        {selectedFile.name}
                                    </p>    
                                    ):(
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

export default UserUpload
