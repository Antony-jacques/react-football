import React from "react";
import "./AuthForm.css";

import { useSelector, useDispatch } from "react-redux";

export default function SignUp() {
  // aller chercher le state globlal qui se trouve dans le reducer
  const showModal = useSelector((state) => state);

  return (
    // <div className='global-modal'>
    <div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>
      <div className="overlay">
        <div className="container-modal">
          <form className="form-auth">
            <h2>Inscription</h2>
            <label htmlFor="mail">Email</label>
            <input type="email" htmlFor="mail" required />

            <label htmlFor="psw">Mot de passe</label>
            <input type="password" htmlFor="psw" required />

            <label htmlFor="confirmation">Confirmez le mot de passe</label>
            <input type="password" htmlFor="confirmation" required />

            <button>S'inscrire</button>
          </form>
          <button id="btn-close" className="close">
            X
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

// export default SignUp;
