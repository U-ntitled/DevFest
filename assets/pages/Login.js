import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import '../styles/Login.css';
import { Stack } from "@mui/system";
import { Form, Link, Navigate, redirect, Redirect } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Environement from '../img/28900-animated-globe-floating.gif'
import LOGO from '../img/LOGO.svg';
import { async } from 'regenerator-runtime';

const login = (values) => {
    axios
    .get('/api/login')
    .then(function(response)
    {
        let users = response.data;
        // alert(users)
        let auth = false;
        for(let user of users) {
            if(user.username == values.email && user.password == values.firstName){
                auth = true;
                break;
            }
            else{
                alert('no')
            }
        }
            auth && (window.location.href = 'http://127.0.0.1:8000/actu');
        }
       )
    // alert('Coucou' + username);
};


const Login =({children}) =>{
    return (


        <Box mt='10px' display='flex' justifyContent='center' alignItems='center'>
          <Box m="20px" display='flex'
          // width='60vw' 
          justifyContent='space-around' 
          alignItems='center' 
          height='90vh'
          boxShadow='rgba(0,0,0,0.35) 0px 5px 15px'
          borderRadius='30px'
          >
            <Box  width='65%'>
               <img id="glob" width='100%' src={Environement} alt="Image" />
            </Box>
      
            <Box width='35%' padding='40px' display='flex' alignItem="center" flexDirection='column' justifyContent='center'>
            <Box ml='auto' mr='auto' mb="60px"> <img src={LOGO} alt="" /> </Box>
      
              <Formik
              onSubmit={login}
              initialValues={initialValues}
              validationSchema={checkoutSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Stack direction='column'
                  
                  width="100%"
                   spacing='30px'
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Username"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      error={!!touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                    />
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="password"
                      label="Password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      name="firstName"
                      error={!!touched.firstName && !!errors.firstName}
                      helperText={touched.firstName && errors.firstName}
                    />
                    <Box display='flex' justifyContent="space-between">
              <input type="checkbox" value="true"/><span>Se souvenir</span>
              <Typography variant='a'>
                    <Link to='/recup' className="super-link"
                    marginTop='20px'
                    color="white"
                    >Mots de passe oublier?</Link> 
              </Typography>
              <Box>
      
              </Box>
                    </Box>
                  </Stack>
                  <Box mt="20px" mb='30px'>
                    <Button type="submit" className="login-b" fullWidth variant="contained">
                      Log In
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
            <Box  margin='auto' padding-right="10px">
              <Typography variant='p'>
                    Vous n'avez pas de compte?&nbsp;
              </Typography>
              <Typography variant='a'>
                    <Link to='/signup' className="super-link"
                    margin='auto'
                    >Créer un compte</Link> 
              </Typography>
            </Box>
            </Box>
          </Box>
          </Box>
        );
      };
      
      
      
      const checkoutSchema = yup.object().shape({
        firstName: yup.string().required("required"),
        email: yup.string().required("required"),
      
      });
      const initialValues = {
        firstName: "",
        email: "",
      };
      
export default Login;