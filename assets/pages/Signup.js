import React from 'react';
import { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import axios from 'axios';

const signup = () => {
    axios
       .get('/api/verif')
       .then(function(response)
        {
            let users = response.data;
            // alert(users)
            for(let user of users) {
                if(user.username == document.getElementById('username').value || document.getElementById('password').value.length < 8 || user.email == document.getElementById('mail').value || user.tel == document.getElementById('tel').value){
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

const Signup =({children}) =>{
    return(
        <div className="container">
            <h1>
                Bonjour le monde du dev
            </h1>
            <label>Name: </label> <input type="text" name='name' id='name'/><br/>
            <label>First Name: </label> <input type="text" name='firstname' id='firstname'/><br/>
            <label>Username: </label> <input type="text" name='username' id='username'/><br/>
            <label>Password: </label> <input type="password" name='password' id='password'/><br/>
            <label>Email: </label> <input type="email" name='mail' id='mail'/><br/>
            <label>Tel: </label> <input type="tel" name='tel' id='tel'/><br/>
            <label>Sexe: </label> <br/>
            <label>Male</label><input type="radio" name='sexe' id='male'/><label>Female</label><input type="radio" name='sexe' id='female'/><br/>
            <hr/>
            <label>Fonction: </label> <input type="text" name='fonction' id='fonction'/><br/>
            <label>Nom org: </label> <input type="text" name='nmOrg' id='nmOrg'/><br/>
            <br/>
            <button 
                // disabled={isSaving}
                onClick={signup}
                type="button"
                className="btn btn-primary mt-3">
                SIgn
            </button>
        </div>
    )
}
export default Signup;