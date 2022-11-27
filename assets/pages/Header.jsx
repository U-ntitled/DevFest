import { Box, Button, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import WorldIllustration from '../img/WorldIllustre.svg'

const StyledButton = styled(Button)({
  '&:hover': {
    backgroundColor: '#D9AD2B',
   
    boxShadow: 'none',
  },
  

})


const Header = () => {

  return (
    <Stack 
          direction='row' 
          sx={{justifyContent:'space-around', 
          height:'90vh',width:'auto',
          }}
          flexWrap='nowrap'
          paddingLeft={7}
    >
        <Box 
             
            width='40%'
             display='flex'
             flexDirection='column'
             mt='12em'
             gap={5}
             
        >

      
              <Typography 
                  variant='h2'
                  sx={{fontSize:'60px', fontWeight:'bold',}}
              >
                  Let’s keep our environment<br/>
                  <span style={{color:'#D9AD2B'}}> clean 
                  </span > & 
                  <span style={{color:'#D9AD2B'}}> safe</span>

              </Typography>
              <Typography 
                  variant='body1' 
                  sx={{width:'75%',p:'12px'}}
              >
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus 
                 labore similique ad rem non assumenda laborum officia, id corrupti sint 
                 consequatur necessitatibus illo sit! Sed non quia quasi dolore exercitationem.

              </Typography>
              <StyledButton 
                   variant='contained'
                   sx={{backgroundColor:'#D9AD2B', width:'20%',padding:'8px 24px'}}
                   href='/signUp'
              >
                  JOIN US 
              </StyledButton>
        </Box>
        <Box mt='24px'>
             <img src={WorldIllustration} alt='illustration du monde' width={600} height={750}/>

        </Box>
    </Stack>
  )
}

export default Header