import React, { useState, useEffect,useContext } from "react";
import firebase from '../../firebase'
import {db} from '../../firebase'
import { doc, setDoc } from "firebase/firestore"; 
import {AuthContext} from '../../Context/AuthContext'
import Button from 'react-bootstrap/Button';

export default function Tchat() {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const {currentUser} = useContext(AuthContext)
  const currentUserId = currentUser.uid


  useEffect(() => {
      //acceder à la table messages
    db.collection('messages')
    .orderBy('createdAt')
    .limit(25).onSnapshot((snapshot)=>{
      // snapshot.docs designe tous les enregistrements
      //data() data permet d'acceder aux données
        setMessages(snapshot.docs.map(doc=>doc.data()))
    })
  },[])

  //aouter un enregistrement https://www.youtube.com/watch?v=zpQle4SBRfg
  const createMessage = (e)=>{
    e.preventDefault()
    //selectionner la DB
    db.collection('messages')
    // la meth add permet d'ajouter un enreg. elle prend en arg un objet qui represente un document
    .add({
      text,
      authorId: currentUser.uid,
      createdAt: new Date()
    })
    setText('')
  }

//   const createMessage = (e) => {
//       e.preventDefault();
//     // on renseigne la DB qu'on utilise dans ref()
//     const messagesDB = firebase.database().ref("messagesDB");
//     const message = {
//       author,
//       text,
//     };

//     messagesDB.push(message);

//     setAuthor("");
//     setText("");
//   };

 console.log(messages)
// console.log('currentUser', currentUser.uid)
console.log('Date', new Date() )
  return (
    <div>
        <h4>Chat en direct</h4>
        {messages.map(({text, authorId} )=>(
          <div> 
            <p key={authorId}>
                {text}
                
            </p>
            <p>{currentUserId}</p>
            <p>{authorId}</p>
            {(currentUserId === authorId) && <Button variant="danger">Danger</Button> }
          </div>
          
        ))}
        
      <form onSubmit={createMessage}>
        <textarea placeholder="message" type="text" value={text} onChange ={(e)=>{setText(e.target.value)}}/>
        <button type="subit">Envoyer</button>
      </form>
    </div>
  );
}
