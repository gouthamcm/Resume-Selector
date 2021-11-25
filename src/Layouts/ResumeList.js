import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import ResumeCard from '../Components/ResumeCard'
import EmptyContent from '../Components/EmptyContent'

function ResumeList({resumeData, ...other}) {
    const [isData, setIsData] = useState(resumeData.length==0 ? false:true)
    
    return (
        <div>
            <Box sx={{m:2}}>
                {isData ?  
                (<ResumeCard resumeData={resumeData} />):
                (<EmptyContent />)
                }
                
            </Box>
        </div>
    )
}

export default ResumeList
