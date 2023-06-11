
import React, { useState } from 'react';
import './App.css';
import {BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import Home from './pages/Home'
import Chatpage from './pages/Chatpage'
import Login from './pages/Login'
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";

function App() {
  
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));


  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link>
          {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/chatpage"> Create Post </Link>
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
        </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>}/>
        <Route  path='/login' element={<Login setIsAuth={setIsAuth}/>}/>
        <Route  path='/chatpage' element={<Chatpage isAuth={isAuth}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
