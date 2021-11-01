import { Autocomplete, Button, Chip, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import React from 'react'

function Filter() {
    return (
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
                        label="freeSolo"
                        placeholder="Skills"
                    />
                )}
                sx={{ m: 2 }}
            />
            <Button variant="contained" endIcon={<SendIcon />} sx={{m:2}}>
                Send
            </Button>
        </div>
    )
}

export default Filter

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