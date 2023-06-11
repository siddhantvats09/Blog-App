import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth'
import {auth,provider} from '../Firebase'



const Login = ({setIsAuth}) => {

const navigate=useNavigate()


  const signin = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    
      navigate("/");
    });
  };
  return (
    <div className='loginPage'>
      <p>Sign In with Google to continue</p>
          <button className='login-with-google-btn' onClick={signin}> Sign in with Google</button>
    </div>
  )
}

export default Login
