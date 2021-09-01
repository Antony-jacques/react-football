import React, { useState, useEffect, useContext } from "react";
import firebase from "../../firebase";
import { db } from "../../firebase";
import { doc, setDoc, deleteDoc } from "firebase/firestore";

import { AuthContext } from "../../Context/AuthContext";
import Button from "react-bootstrap/Button";

export default function Tchat() {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const currentUserId = currentUser.uid;
  const [dataTest, setDataTest] = useState([]);

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
      });
    setText("");
  };

  const deleteMessage = (messageId) => {
    db.collection("messages")
      // doc() permet de selectionner un doc en particulier via le parametre
      .doc(messageId)
      .delete();
  };

  const [editMessage, setEditMessage] = useState(false);
  const [newEditedMessage, setNewEditedMessage] = useState("");

  const sendEditedMessage = (messageId)=>{
    db.collection("messages")
    .doc(messageId)
    .update({ text: newEditedMessage })

    setEditMessage(false)


  }

  console.log("messages", messages);

  // console.log('currentUser', currentUser.uid)
  //console.log('Date', new Date() )
  return (
    <div>
      <h4>Chat en direct</h4>

      {messages.map((val, index) => (
        <div>
          <div key={index}>
            {!editMessage ? (
              <div style={{display:'inline'}} >{val.data.text}  </div> 
            ) : (
              <div>
                <textarea
                  defaultValue={val.data.text}
                    onChange={(e) => {
                      setNewEditedMessage(e.target.value);
                    }}
                  type="text"
                />{" "}
                <Button onClick={()=>{sendEditedMessage(val.messageId)}} variant="success">Envoyer la modification</Button>
              </div>
            )}

            {currentUserId === val.data.authorId && (
              <>
                <Button
                  onClick={() => deleteMessage(val.messageId)}
                  variant="danger"
                >
                  x
                </Button>
                <Button
                  variant="warning"
                  onClick={() => setEditMessage(!editMessage)}
                >
                  modifier
                </Button>
                {/* {editMessage && <div> <input value={val.data.text} type="text"/>  <Button variant="success">Envoyer</Button></div>} */}
              </>
            )}
          </div>
        </div>
      ))}
      <form onSubmit={createMessage}>
        <textarea
          placeholder="message"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button variant="success" type="subit">
          Envoyer
        </Button>
      </form>
    </div>
  );
}
