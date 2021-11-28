import React from 'react'

  
// import { motion } from 'framer-motion';
// import { motion } from "framer-motion"
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
// components


  
function PageNotFound() {
    return (
        <div>
      
        
          <Box component="img" src="https://miro.medium.com/max/1400/1*EQisBuMOijQT8woW0Jn6pA.jpeg" sx={{ height: '100vh', width: '100%' }}>
            
              {/* <Typography variant="h3" paragraph>
                Sorry, page not found!
              </Typography>
            
            <Typography sx={{ color: 'text.secondary' }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL?
              Be sure to check your spelling.
            </Typography> */}
      
            
          </Box>
        
      
    </div>
    )
}

export default PageNotFound
