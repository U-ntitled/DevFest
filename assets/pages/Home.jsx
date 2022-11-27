import { Stack } from '@mui/material'
import React from 'react'
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import Project from './Project'

const Home = () => {
  return (
    <Stack 
         direction='column' 
         sx={{height:'250vh', width:'auto'}}
    >
        <Navbar/>
        <Header/>
        <About/> 
        <Project/>
        <Footer/>
       
    </Stack>
  )
}

export default Home;