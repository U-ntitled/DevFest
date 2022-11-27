import { Stack } from '@mui/material'
import React from 'react'
import AboutCard from './AboutCard'
import SolidarityIcon from  './../img/preview 1.svg'
import GoalIcon from './../img/goal.svg'
import NetworkIcon from './../img/Network.svg'
const descriptions = [
  {
    image:SolidarityIcon,
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quo excepturi? Error doloribus quo aliquid quis non sint iure eius, harum consectetur repudiandae voluptatum officiis velit nihil ea iste nisi.'

  },
  {
    image:NetworkIcon,
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quo excepturi? Error doloribus quo aliquid quis non sint iure eius, harum consectetur repudiandae voluptatum officiis velit nihil ea iste nisi.'

  },
  {
    image:GoalIcon,
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quo excepturi? Error doloribus quo aliquid quis non sint iure eius, harum consectetur repudiandae voluptatum officiis velit nihil ea iste nisi.'

  }

]

const About = () => {
  return (
     <Stack 
         direction='row' 
         gap={4}
         m={6}
         flexWrap='nowrap'
        sx={{width:'75%', m:'0 auto'}}
     >
         {descriptions.map(item =>(
               <AboutCard image={item.image} description={item.description}/>
         ))}
           
           
     </Stack>

      
  )
}

export default About