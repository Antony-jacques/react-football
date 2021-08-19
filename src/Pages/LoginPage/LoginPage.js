import React from "react";

import "./LoginPage.css";

import MyNavbar from "../../Components/MyNavbar/MyNavbar";
import SignUp from "../../Components/SignUp/SignUp";

const LoginPage = () => {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <div className="content-container">
        <h1>Bienvenue sur mon site de football</h1>
        <p>
          <button>Connecte-vous</button> ou <button>identifiez-vous</button>{" "}
          pour accéder au contenu du site
        </p>
        <SignUp />
      </div>
    </div>
  );
};

export default LoginPage;
