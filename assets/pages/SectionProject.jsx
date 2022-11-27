import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Project from "./Project";
import { Stack } from "@mui/material";
import { Box, Typography } from "@mui/material";
import Item from "./Item";
import network from './../img/network.svg'
import link from './../img/link.svg'
import share from './../img/share.svg'
import  Volunteer from './../img/Volunteer.svg'

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

 
const SectionProject = () =>{
    return(
         <>
            <Navbar/>
            <Stack direction='column'>
                    <Box padding={8} mt={6} textAlign='center'>
                            <Typography variant='h4' sx={{fontWeight:'bold'}}>
                                Aware about damage due to the climate  change and <br/>
                                the environmental  <span style={{color:'#D9AD2B'}}>pollution ?</span> {/* <AnimateQuestionMark>? </AnimateQuestionMark> */}
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
            <Footer/>
         </>
    )
}
export default SectionProject