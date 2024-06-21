// import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignIn from './pages/User/SignIn';
import SignUp from './pages/User/SignUp';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container, Paper } from '@mui/material'
import Axios from 'axios';
import jwt_decode from "jwt-decode";
import Creds from './pages/Creds/CredsPage';
import Cred from './pages/Creds/components/Cred';
import CredEdit from './pages/Creds/components/CredEdit';


export default function App() {

  const [ isAuth, setIsAuth ] = useState(false);
  const [ user, setUser ] = useState({});
  const [ message, setMessage ] = useState(null);  
  

  const signupHandler = (user) => {
    Axios.post("user/signup", user)
    .then((res) => {
      console.log(res)
      setMessage("Sign Up Successful!")
    })
    .catch((error) => {
      console.log("Error Singing Up!", error)
    })
  }

  const signinHandler = (cred) => {
    Axios.post("user/signin", cred)
    .then((res) => {
      console.log(res);
      setIsAuth(true);
      setMessage("Sign In Successful!")
    })
    .catch( error => {
      console.log("Sign In Error!", error);
    })
  }

  const signoutHandler = (e) => {
    e.preventDefault();
    setIsAuth(false);
    setUser(null);
    setMessage("Sign Out Successful")
  }

  return (
      <Router>
        <Paper>  
          <Header signout={signoutHandler}/>
        </Paper>
        <Container 
          className='app'    
          sx={() => ({
            width: '100%',
            backgroundColor: 'linear-gradient(180deg, #CEE5FD, #121212)',
          })}
        >  
          <main>
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/signin' element={<SignIn signin={signinHandler}/>} />
              <Route path='/signup' element={<SignUp signup={signupHandler}/>} />
              <Route path='/about' element={<AboutPage/>} />
              <Route path='/credentials' element={<Creds/>} />
              <Route path='/credentials/create' element={<Cred/> } />
              <Route path='/credentials/edit' element={<CredEdit/> } />
            </Routes>
          </main>
        </Container>
        <Footer/>
      </Router>
  );
}