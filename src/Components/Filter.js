import { Autocomplete, Button, Chip, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import React, {useState} from 'react'



function Filter() {

    const [skills, setSkills] = useState([]);
    const handleChange = (value) => {
        if(value=='') console.log('empty');
        setSkills(skills => [...skills, value]);
        console.log(skills);
    }
    const handleInput = (e, value) => {
        setSkills(value)
        // console.log(value);
        
    };
    // console.log(skills);

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
            <Button variant="contained" onClick={handleSubmit} endIcon={<SendIcon />} sx={{m:2}}>
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