import { Box } from '@mui/material'
import React from 'react'

const Item = ({icon,description}) => {
  return (
    <Box desplay='flex' justifyContent='center'>
      <span style={{marginRight:'24px'}}>
          <img src={icon} alt='icon de description'width={30} height={50}/>
      </span>
      <span>{description}</span>
    </Box>  
    
  )
}

export default Item