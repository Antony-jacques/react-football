import React, {useState, useEffect, createContext, useContext} from 'react';
import {auth} from '../firebase'

export const AuthContext = createContext()

export default function AuthProvider(props) {
    const [currentUser, setCurrentUser] = useState();

    function signUp(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }
    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }
    function logout(){
        return auth.signOut()
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
        })
        return unsubscribe

    },[])

    return (
        <AuthContext.Provider>
            {props.children}
        </AuthContext.Provider>
    );
}

 
