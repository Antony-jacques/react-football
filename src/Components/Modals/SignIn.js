import React, {useState, useRef, useContext} from "react";
import { useSelector, useDispatch } from "react-redux";
import './AuthForm.css'
import {AuthContext} from '../../Context/AuthContext'

const SignIn = () => {

  // aller chercher le state globlal qui se trouve dans le reducer
  const showModal = useSelector((state) => state);

  const dispatch = useDispatch()

  const inputs = useRef([])

  const {login} = useContext(AuthContext)

  const addInputs = (el)=>{
    if(el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }

  const closeModal = ()=>{
    dispatch({
      type:'CLOSEMODAL'
    })
  }

  const [error, setError] = useState('');

  async function handleSubmit(e){
e.preventDefault()
    try{
     await login(inputs.current[0].value, inputs.current[1].value)

    } catch{
      setError('Mail ou mot de passe incorrect')
    }
  }


  return (
    <div>
      {/* <div className="global-modal"> */}
      <div className={showModal.showSignIn ? "global-modal" : "hide-modal"}>
        <div className="overlay" onClick={closeModal}></div>
          <div className="container-modal">
            <form className="form-auth" onSubmit={handleSubmit}>
              <h2>Connexion</h2>
              <label htmlFor="mail">Email</label>
              <input type="email" htmlFor="mail" ref={addInputs} required />

              <label htmlFor="psw">Mot de passe</label>
              <input type="password" htmlFor="psw" ref={addInputs} required />
              <p style={{color:'red'}}>{error}</p>
              <button>Se connecter</button>
            </form>
              <button id="btn-close" className="close" onClick={closeModal}>
                X
              </button>
          </div>
        
      </div>
    </div>
  );
};

export default SignIn;
