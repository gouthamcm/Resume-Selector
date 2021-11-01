import { Box } from '@mui/system'
import React from 'react'
import ResumeCard from '../Components/ResumeCard'

function ResumeList({resumeData, ...other}) {
    return (
        <div>
            <Box sx={{m:2}}>
                <ResumeCard resumeData={resumeData} />
            </Box>
        </div>
    )
}

export default ResumeList
