import React from 'react'
import { Box, Button, TextField, Stack,FormControl,InputLabel,Select,MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import ENV from "./../img/21912-nature-scene.gif"
import "./../styles/sn.css"
import LOGO from "./../img/LOGO.svg"
import axios from 'axios';

const Form = () => {
  const handleFormSubmit = (values) => {
      axios
         .get('/api/verif')
         .then(function(response)
          {
              let users = response.data;
              for(let user of users) {
                  if(user.username == values.address1 || values.address2.length < 8 || user.email == values.email || user.tel == values.contact){
                      alert('yup')
                      break
                  }
                  else{
                      alert('efa mande')
                  }
              }
          }
         )
      // alert('Coucou' + username);
    };
  // };
  const handleOnClick = () =>{
    
  }
  return (
    <Box>
    <Box id="logo" margin="auto">
        <img src={LOGO} alt="" />
    </Box>
    <Box display='flex' mb="50px" alignItems='center' flexDirection="row">

      <Box width="47%" display="flex" alignItems='center' justifyContent="center">
        <img id="env" src={ENV} width='75%' alt="" />
      </Box>

      <Box 
       width="30%" ml="auto" mr="auto">
        <Box id="bg-w">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            name,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Stack
                direction="column"
                spacing="10px"
                // width="75%"
              >
                <TextField
                
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                />
                <TextField
                
            
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                />
                <TextField
                
            
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="Username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address1}
                  name="address1"
                  error={!!touched.address1 && !!errors.address1}
                  helperText={touched.address1 && errors.address1}
                  sx={{ gridColumn: "span 4" }}
                />

                <TextField
                
            
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="Phone number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  name="contact"
                  error={!!touched.contact && !!errors.contact}
                  helperText={touched.contact && errors.contact}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                
            
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                
            
                  fullWidth
                  variant="outlined"
                  type="password"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address2}
                  name="address2"
                  error={!!touched.address2 && !!errors.address2}
                  helperText={touched.address2 && errors.address2}
                  sx={{ gridColumn: "span 4" }}
                />
              </Stack>
              <p>Sexe</p>
              <Box>
                  <input type='radio' name='sexe' value='M'/> <span>M</span><br/>
                  <input type='radio' name='sexe' value='F'/> <span>F</span> <br />
                  <br />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Organisation</InputLabel>
                  <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={"Organisation"}
                  label="Organisation"
                  onChange={handleChange}
                  >
                    <MenuItem value={1}>Recyclage</MenuItem>
                    <MenuItem value={2}>Reboisement</MenuItem>
                  </Select>
                </FormControl>
                  <br />
                  <br />
              </Box>
              
              <Box >
                <Button type="submit" id="but" onClick={handleOnClick} color="secondary" variant="contained">
                  Register
                </Button>
              </Box>
              
            </form>
          )}
        </Formik>
          </Box>
      </Box>
  </Box>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Form;