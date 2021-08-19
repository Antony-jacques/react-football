import React from "react";
import { useSelector } from "react-redux";
import './AuthForm.css'

const SignIn = () => {
  // aller chercher le state globlal qui se trouve dans le reducer
  const showModal = useSelector((state) => state);
  return (
    <div>
      {/* <div className="global-modal"> */}
      <div className={showModal.showSignIn ? "global-modal" : "hide-modal"}>
        <div className="overlay">
          <div className="container-modal">
            <form className="form-auth">
              <h2>Connexion</h2>
              <label htmlFor="mail">Email</label>
              <input type="email" htmlFor="mail" required />

              <label htmlFor="psw">Mot de passe</label>
              <input type="password" htmlFor="psw" required />

              <button>Se connecter</button>
            </form>
              <button id="btn-close" className="close">
                X
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
