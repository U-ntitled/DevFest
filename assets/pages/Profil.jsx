import { Edit, EditAttributesTwoTone, EditNotifications } from '@mui/icons-material'
import { Avatar, Box, Link, Stack, Typography } from '@mui/material'
import React from 'react'

const Profil = () => {
  return (
      <Stack direction='column'alignItems='center' gap={3}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{width:'180px', height:'180px'}}/>
              <Box display='flex' flexDirection='row' gap={4}>
                    <Typography variant='h4' sx={{color:'#D9AD2B'}}>
                            USERNAME
                    </Typography>
                    <Link href='/actu/Myaccount/0000/edit'>
                        <Typography variant='title1'sx={{p:1, color:'blue'}}>
                                
                                <span style={{marginRight:2}}>Edit</span>
                                <Edit/>

                        </Typography>
                    </Link>
                   
              </Box>
              <Box display='flex' flexDirection='column' gap={2}>
                    <Typography variant='h5'>
                         Membership ID :   <sapn style={{color:'#606360'}}>ID154498</sapn>
                    </Typography>
                    <Typography variant='h5'>
                         OCCUPATION :   <sapn style={{color:'#606360'}}>Simple Member</sapn>
                    </Typography>

              </Box>

      </Stack>
  )
}

export default Profil