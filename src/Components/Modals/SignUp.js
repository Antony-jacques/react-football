import React, { useRef, useState, useContext,  } from "react";
import {useHistory} from 'react-router-dom'
import "./AuthForm.css";

import { useSelector, useDispatch } from "react-redux";

import {AuthContext} from "../../Context/AuthContext";

export default function SignUp() {
  // aller chercher le state globlal qui se trouve dans le reducer
  const showModal = useSelector((state) => state);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({
      type: "CLOSEMODAL",
    });
  };

  const inputs = useRef([]);

  const addInput = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const {signUp} = useContext(AuthContext);
  const [error, setError] = useState('');

  const history = useHistory()

  async function handleSubmit(e){
    e.preventDefault();
    if (inputs.current[1].value !== inputs.current[2].value) {
      setError('Les mots de passe ne sont pas identiques')
    }
    
    else if(inputs.current[1].value.length < 6){
      setError('Le mot de passe doit faire au minimum 6 characters')
    }
    
    else{
      await signUp(inputs.current[0].value,inputs.current[1].value)
      closeModal()
      // inputs.current.forEach(inp =>{
      //   inp.value=''
      // })
      // setError('')
      history.push('/accueil')



      return;

    }
  };

  return (
    // <div className='global-modal'>
    <div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>
      <div onClick={closeModal} className="overlay"></div>
      <div className="container-modal">
        <form className="form-auth" onSubmit={handleSubmit}>
          <h2>Inscription</h2>
          <label htmlFor="mail">Email</label>
          <input type="email" htmlFor="mail" ref={addInput} required />

          <label htmlFor="psw">Mot de passe</label>
          <input type="password" htmlFor="psw" ref={addInput} required />

          <label htmlFor="confirmation">Confirmez le mot de passe</label>
          <input
            type="password"
            htmlFor="confirmation"
            ref={addInput}
            required
          />
          <p style={{color:'red'}}>
          {error}

          </p>
          <button>S'inscrire</button>
        </form>
        <button id="btn-close" className="close" onClick={closeModal}>
          X
        </button>{" "}
      </div>
    </div>
  );
}

// export default SignUp;
