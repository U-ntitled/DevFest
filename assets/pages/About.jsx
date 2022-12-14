import { Stack } from '@mui/material'
import React from 'react'
import AboutCard from './AboutCard'
import SolidarityIcon from  './../img/preview 1.svg'
import GoalIcon from './../img/goal.svg'
import NetworkIcon from './../img/Network.svg'
const descriptions = [
  {
    image:SolidarityIcon,
    description:'consecrate the concept of common heritage of humanity not only for the benefit of spaces but also for the benefit of cultural goods, even “intangible”, such as the diversity of cultures'

  },
  {
    image:NetworkIcon,
    description:' to make itself known and maintain a relationship with its members, donors, members and even its beneficiaries,to make itself known and to maintain a relationship with its members, donors, members and even its volunteers.'

  },
  {
    image:GoalIcon,
    description:'Maintain natural balances; Recolonize certain living environments; Set up nature reserves to conserve fauna, flora and the natural environment; Limit the commercialization of endangered species'

  }

]


const About = () => {
  return (
     <Stack 
         direction='row' 
         gap={4}
         m={6}
         flexWrap='nowrap'
        sx={{width:'75%', m:'0 auto' ,height:'auto'}}
     >
         {descriptions.map(item =>(
               <AboutCard image={item.image} description={item.description}/>
         ))}
           
           
     </Stack>

      
  )
}

export default About