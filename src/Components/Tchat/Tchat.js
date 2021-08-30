import React, { useState, useEffect } from "react";
import firebase from '../../firebase'
import {db} from '../../firebase'

export default function Tchat() {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
      //acceder à la table messages
    db.collection('messages').orderBy('createdAt').limit(25).onSnapshot((snapshot)=>{
        setMessages(snapshot.docs.map(doc=>doc.data()))
    })
  },[])

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
  return (
    <div>
        <h4>Chat en direct</h4>
        {messages.map(({id, text})=>(
            <p key={id}>
                {text}
            </p>
        ))}
        {text}
      {/* <form onSubmit={createMessage}>
        <textarea placeholder="message" type="text" value={text} onChange ={(e)=>{setText(e.target.value)}}/>
        <button type="subit">Envoyer</button>
      </form> */}
    </div>
  );
}
