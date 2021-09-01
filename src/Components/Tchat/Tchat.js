import React, { useState, useEffect, useContext, useRef } from "react";
import firebase from "../../firebase";
import { db } from "../../firebase";
import { doc, setDoc, deleteDoc } from "firebase/firestore";

import { AuthContext } from "../../Context/AuthContext";
import Button from "react-bootstrap/Button";
import TchatItem from './TchatItem'
import './Tchat.css'

export default function Tchat() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const currentUserId = currentUser.uid;
  const [editMessage, setEditMessage] = useState(false);
  const [newEditedMessage, setNewEditedMessage] = useState("");
  const forScroll = useRef()
 

  useEffect(() => {
    //acceder à la table messages
    db.collection("messages")
      .orderBy("createdAt")
      .limit(25)
      .onSnapshot((snapshot) => {
        // snapshot.docs designe tous les enregistrements
        //data() data permet d'acceder aux données
        setMessages(
          snapshot.docs.map((doc) => {
            return { messageId: doc.id, data: doc.data() };
          })
        );
        forScroll.current.scrollIntoView({behaviour:'smooth'});
      });
  }, []);
// if( forScroll.current){

//   forScroll.current.scrollIntoView({behaviour:'smooth'});
// }


  //ajouter un enregistrement https://www.youtube.com/watch?v=zpQle4SBRfg
  const createMessage = (e) => {
    e.preventDefault();
    //selectionner la DB
    db.collection("messages")
      // la meth add permet d'ajouter un enreg. elle prend en arg un objet qui represente un document
      .add({
        text,
        authorId: currentUser.uid,
        createdAt: new Date(),
      });
    setText("");

    forScroll.current.scrollIntoView({behaviour:'smooth'});
  };

  const deleteMessage = (messageId) => {
    db.collection("messages")
      // doc() permet de selectionner un doc en particulier via le parametre
      .doc(messageId)
      .delete();
  };



  const sendEditedMessage = (messageId)=>{
    db.collection("messages")
    .doc(messageId)
    // update() change un seul champs du doc sans écraser tout le document
    .update({ text: newEditedMessage })

    setEditMessage(false)


  }


  return (
    <div className="container">
      <nav>
        <div className="heading">

      <h4>Chat en direct</h4>
        </div>
     
      <ul>

     
{
    messages.map((message,index)=>(
      <li>
      <TchatItem key={index} item={message} currentUserId={currentUserId}></TchatItem>
      </li>
      
      ))

    }
          <div className="forScroll" ref={forScroll}></div>
     </ul>
     </nav>
    
          <form onSubmit={createMessage}>
        <textarea
          placeholder="message"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <Button variant="success" type="submit">
          Envoyer
        </Button>
      </form> 
      {/* <div className="forScroll" ref={forScroll}></div> */}
    </div>
  );
}
