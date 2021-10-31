import { MenuBook } from '@mui/icons-material'
import { Icon } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Logo() {
    return (
        <Box  sx={{ width: 40, height: 40, p:2, m:1}} >
            <Icon>
                <MenuBook />
            </Icon>
        </Box>
    )
}

export default Logo
