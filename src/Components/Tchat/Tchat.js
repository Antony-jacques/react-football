import React, { useState, useEffect, useContext, useRef } from "react";
import firebase from "../../firebase";
import { db } from "../../firebase";
import { doc, setDoc, deleteDoc } from "firebase/firestore";

import { AuthContext } from "../../Context/AuthContext";
import Button from "react-bootstrap/Button";
import TchatItem from "./TchatItem";
import "./Tchat.css";

export default function Tchat() {

  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const currentUserId = currentUser.uid;
  const [editMessage, setEditMessage] = useState(false);
  const [newEditedMessage, setNewEditedMessage] = useState("");
  const forScroll = useRef();

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
        // scroll vers le bas de la liste de msg
        forScroll.current.scrollIntoView({ behaviour: "smooth" });
      });
  }, []);

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
        authorImageURL : currentUser.photoURL,
        authorName : currentUser.displayName
      });
    setText("");

    forScroll.current.scrollIntoView({ behaviour: "smooth" });
  };



  // console.log('currentUser', currentUser)
  return (
    <div className="container">
      <nav>
        <div className="heading">
          <h4>Chat en direct</h4>
        </div>

        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              <TchatItem
                // key={index}
                item={message}
                currentUserId={currentUserId}
              ></TchatItem>
            </li>
          ))}
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
<div>

        <Button  variant={text.length<= 0 ? 'secondary' :'success'} type="submit" disabled={text.length <= 0 && true} >
          Envoyer
        </Button>
</div>
      </form>
      {/* <div className="forScroll" ref={forScroll}></div> */}
    </div>
  );
}
