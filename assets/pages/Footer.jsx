import { CopyrightOutlined, Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Button, Link, styled, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const StyledButton = styled(Button)({
    '&:hover': {
      backgroundColor: '#D9AD2B',
      color:'white',
      border:'none',

      boxShadow: 'none',
    },
    
  
  })
  const StyledTextField = styled(TextField)({
    '&:hover': {
     
      border:'1px solid #D9AD2B',
      outlined:'none',

      boxShadow: 'none',
    },
     border:'1px solid #D9AD2B',
     '&:focus':{
        border:'1px solid #D9AD2B',
        color:'#D9AD2B'
     }
  
  })
const Footer = () => {
    const date = new Date()
  return (
     <>  
        <Stack direction='row' bgcolor='#F8F9FA' height='40vh' justifyContent='space-around' alignItems='center'>
          
          <Box display='flex' flexDirection='column'gap={2}> 
               <Typography variant='h4'>
                     USEFULl LINKS
                </Typography>
               <Link href='/about'underline='none' sx={{color:'#606360'}}>
                     <Typography variant='subtitle2'>About us</Typography>
               </Link>
               <Link href='/project' underline='none'sx={{color:'#606360'}}>
                   <Typography variant='subtitle2'>Our project</Typography>
                </Link>
               <Link href='/signUp' underline='none'sx={{color:'#606360'}}>
                        <Typography variant='subtitle2'> Join Us</Typography>
               
                </Link>
               <Link href='/donation'underline='none'sx={{color:'#606360'}}>
                    <Typography variant='subtitle2'> Make a donation</Typography>
               
               </Link>
         </Box>
            <Stack sx={{width:350}} gap={2}>
                    <Typography variant='h4' sx={{textAlign:'center'}}>
                            NEWSLETTER
                     </Typography>
                     <StyledTextField 
                         fullWidth 
                         label="Enter your emaila address " 
                        //  id="fullWidth" 
                    />
                     <StyledButton 
                         variant='outlined'
                         sx={{color:'#D9AD2B', border:'1px solid #D9AD2B'}}
                    > 
                       Subscribe Now
                    </StyledButton>

                 
            </Stack>
          
            <Stack direction='column' gap={13}>    
                <Typography variant='h4'>
                     CONTACT US
                </Typography>

                <Box  display='flex' direction='row' color='#707832' gap={4} justifyContent='center'>
                    <Instagram />
                    <Twitter/>
                    <Facebook/>
                </Box>

            </Stack>
          
         
           
        </Stack>
        <Stack bgcolor='#C2CF5D' height='10vh' flexDirection='row' justifyContent='center' alignItems='center'>
             <Typography variant='h6' >
                  <CopyrightOutlined/>
                  Copyright {date.getFullYear()}

             </Typography>
               
        </Stack> 


         
     </>
    
  )
}

export default Footer