import React from "react";

import {useDispatch} from 'react-redux'
import "./LoginPage.css";

import MyNavbar from "../../Components/MyNavbar/MyNavbar";
import SignUp from "../../Components/Modals/SignUp";
import SignIn from "../../Components/Modals/SignIn";

import banner from '../../images/soccer-488700_1921.jpg'
import Button from '@material-ui/core/Button';

const LoginPage = () => {

  const dispatch= useDispatch()

  const toggleSignUp = ()=>{
    dispatch({
      type: 'TOGGLEUP'
    })
  }

  const toggleSignIn= ()=>{
    dispatch({
      type:'TOGGLEIN'
    })
  }
  return (
    <div style={{backgroundImage: `  linear-gradient(to top, rgba(245, 246, 252, 0.52), rgba(80, 80, 100, 0.73)), url(${banner}) `,backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover' }}>
      <MyNavbar></MyNavbar>
      <div className="content-container" >
        <h1 id='banner-title' style={{color:'#fff'}} >Bienvenue sur mon site de football</h1>
        <div style={{color:'#fff', fontSize:'2rem'}}>
          <div>
          <Button onClick={toggleSignIn} variant="contained" >Connectez-vous</Button>
          </div>
          <div>ou</div>
          <div><Button variant="contained" onClick={toggleSignUp}>inscrivez-vous</Button></div>
          <div> pour accéder au contenu du site</div>
           {" "}
         
        </div>
        <SignUp />
        <SignIn/>
      </div>
    </div>
  );
};

export default LoginPage;
