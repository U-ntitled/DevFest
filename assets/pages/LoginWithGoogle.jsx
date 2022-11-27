
import React, { useEffect , useState} from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script'

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const LoginWithGoogle = () => {
    const [profil, setProfil] = useState(null)
    useEffect(()=>{
        const initClient =() => {
            gapi.client.init({
                clientId: clientId,
                scope:''
            })
        }
         gapi.load('client:auth2',initClient)
    });
    const onSuccess = (res)=>{
        setProfil(res.profileObj)
        // console.log('success:',res)
    }
    const onFailure = (err)=>{
        console.log('failed:',err)
    }
    const logOut = ()=>{
        setProfil(null)
    }

  return (

      <div>
             <h2>React google login</h2>
              <br/>
              <br/>
              { profil ? (
                 <>
                   <img src={profil.imageUrl} alt='user pic'/>
                   <h3>Name: {profil.name}</h3>
                   <p>Email address:{profil.email}</p>
                   <br/>
                   <br/>
                   <GoogleLogout 
                        clientId={clientId} 
                        buttonText='Log Out'
                        onLogoutSuccess={logOut}
                        
                   />
                    
                 </>

                   
              ):(
                <GoogleLogin
                    clientId={clientId}
                    buttonText='Sign in with google'
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    isSignedIn={true}
                    cookiePolicy={'single_host_origin'}
            
                />

              )}

           
      </div>
      
  )
}


export default LoginWithGoogle