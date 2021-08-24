import React from "react";

import {useDispatch} from 'react-redux'
import "./LoginPage.css";

import MyNavbar from "../../Components/MyNavbar/MyNavbar";
import SignUp from "../../Components/Modals/SignUp";
import SignIn from "../../Components/Modals/SignIn";

import Highlights from '../../Components/Highlights/Highlights';

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
    <div>
      <MyNavbar></MyNavbar>
      <div className="content-container">
        <h1>Bienvenue sur mon site de football</h1>
        <p>
          <button onClick={toggleSignIn} >Connectez-vous</button> ou <button onClick={toggleSignUp}>inscrivez-vous</button>{" "}
          pour accéder au contenu du site
        </p>
        <SignUp />
        <SignIn/>
      </div>
    </div>
  );
};

export default LoginPage;
