import { TextFields } from '@mui/icons-material';
import { Box, Button, Stack, TextField } from '@mui/material';
import React from 'react'

export default function Edit() {
   
  
    return (
         
     <Stack direction='column' alignItems='center' gap={2} justifyContent='center'>
        <Box display='flex' flexDirection='column' gap={2} width='40%'>
            <TextField label='Username' variant='outlined'/>
            <TextField label='old password' variant='outlined'/>
            <TextField label='New password' variant='outlined'/>
            <TextField label='Avantar Url' variant='outlined'/>
        </Box>
        <Box display='flex' flexDirection='row'  gap={2}>
            <Button  variant='contained'color='success'>Save</Button>
            <Button variant='outlined'>Cancel</Button>

        </Box>
        
     
       </Stack>
     
    );
  }