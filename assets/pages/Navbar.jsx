import { AppBar, Avatar, Box, Button, Divider, Menu, MenuItem, Stack, styled, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/LOGO.svg'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { DashboardCustomizeOutlined, ExpandLessOutlined, ExpandMoreOutlined, LoginOutlined, LogoutOutlined, Scale, Transform } from '@mui/icons-material';
import { margin } from '@mui/system';

const StyledToolbar= styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",

})
const AvatarContainer= styled("div")(({theme})=>({
  backgroundColor:"#D6D6D6",
  padding:"8px 18px",
  borderRadius:'12px',
  width:"50px",
  display:'flex',
  alignItems:'center',
  justifyContent:'center'


}))



const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [y, setY] = useState(0);
  let isSticky
  const handleNavigation = (e) => {
    setY(window.scrollY);
    
  };
  isSticky= y > 0
  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));
  
    return () => { // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);
  
  
  return (
      <Stack 
            
            sx={{
               backgroundColor:'#fff',
               p:'12px',
               fontFamily:'roboto', 
               color:'#000',
               position :'fixed',
               width:'100%',
               padding:1, 
               mt:-1, 
               zIndex:12,
               transition:'1s ease-out',
            

              }}
            transition= '1s'
            boxShadow = {isSticky ?'rgba(0, 0, 0, 0.24) 0px 3px 8px': "" }
            height='8vh'

      >
           <Stack direction='row' spacing={2} sx={{justifyContent:"space-between", alignItems:'center',mr:6 , ml:6}}>
           
                <img src={Logo} alt='logo du site'/>
                <Stack direction='row' spacing={2} flexWrap={2} sx={{color:'white',}}>
                      <Link 
                         style={{color:'#000',textDecoration:'none'}}
                         to='/'
                      >
                        HOME
                      </Link>
                      <Link 
                          style={{color:'#000',textDecoration:'none'}}
                          to='/project'
                      >
                         PROJECT
                      </Link>
                      <Link 
                          style={{color:'#000',textDecoration:'none'}}
                          to='/about'
                      >
                        ABOUT US
                      </Link>
                </Stack>
                <Box display='flex'gap='12px'position='relative'>
                <Button 
                     startIcon={<LoginOutlined/>} 
                     component={Link} 
                     to='/login' 
                     type='text'
                     sx={{color:'#000'}}
                >
                   LOGIN
                </Button>
                <Button 
                    component={Link} 
                    to='/Signup' 
                    type='text'
                    sx={{color:'#000'}}
                    >
                   SIGN UP
                </Button>
                <AvatarContainer>
                    <Avatar src="/broken-image.jpg" />
                    {open ? (
                      <ExpandLessOutlined 
                           onClick={()=>setOpen(!open)}
                      />
                        ):
                        (
                          <ExpandMoreOutlined 
                          onClick={()=>setOpen(!open)}
                           />
                        )}

                </AvatarContainer>
                <Menu sx={{mt:'5em'}}
                      id="demo-positioned-menu"
                      aria-labelledby="demo-positioned-button"
                      onClose={(e)=> setOpen(!open)}
                      open={open}
                      anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                      }}
                      elevation={0}
                      transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                      }}
                >  
                    
                    <MenuItem>
                        <DashboardCustomizeOutlined/>
                              Dashboard
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} /> 
                    <MenuItem>
                        <LogoutOutlined/>
                        Logout
                    </MenuItem>
                  </Menu>
                
                

                </Box>
               

              

           </Stack>
      </Stack>
  )
}

export default Navbar