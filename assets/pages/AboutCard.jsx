import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'


const AboutCard = ({image , description}) => {
  return (
    <Card sx={{display: 'flex',width:'50%', height:'20vh'}}>
        <CardMedia
                component="img"
                sx={{ width: 151 , p:'12px'}}
                image={image}
                alt="Live from space album cover"
                width={120}
                height={120}
           /> 
          <CardContent>
             <Typography variant='body1'>
                 {description}
             </Typography>
          </CardContent>
        
          
    </Card>
  )
}

export default AboutCard