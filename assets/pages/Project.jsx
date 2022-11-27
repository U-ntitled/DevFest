import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import {keyframes}from 'styled-components'
import network from './../img/network.svg'
import link from './../img/link.svg'
import share from './../img/share.svg'
import  Volunteer from './../img/Volunteer.svg'

import styled from 'styled-components'
import Item from './Item'

      const TopToDown = keyframes`
        from {
            transfrom: translateY(0);
        }
        to{
          transfrom: translateY(-3%);
        }
      `
      const AnimateQuestionMark = styled.div`
        
          animation:${TopToDown} 1s infinite linear,
      `
      const ListItems = [
        {
           icon:link,
           description:'Join our community as a volunteer'  
        },
        {
          icon :network,
          description:'be connected with people like you'
        },
        {
          icon:share,
          description:' Get and share your experience '

        }
    ]
      
     




const Project = () => {
  return (
     <Stack direction='column'>
          <Box padding={8} mt={6} textAlign='center'>
                <Typography variant='h4' sx={{fontWeight:'bold'}}>
                      Aware about damage due to the climate  change and <br/>
                      the environmental  <span style={{color:'#D9AD2B'}}>pollution</span> <AnimateQuestionMark>? </AnimateQuestionMark>
                </Typography>

          </Box>
          <Box display='flex' flexDirection='column' m='0 auto'>
               {ListItems.map(item =>(
                 <Item icon={item.icon} description={item.description}/> 
               ))}
          </Box>
          <Box margin='0 auto' mt={6}>
              <img src={Volunteer} alt='volunteer illustration' width={750} height={500}/>
          
          </Box>
         
     </Stack>
  )
}

export default Project