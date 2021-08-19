import React from "react";

const SignIn = () => {
  return (
    <div>
      <div className="global-modal">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
