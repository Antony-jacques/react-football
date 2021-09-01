import React, { useState, useEffect, useContext } from "react";
import firebase from "../../firebase";
import { db } from "../../firebase";
import { doc, setDoc, deleteDoc } from "firebase/firestore";

import { AuthContext } from "../../Context/AuthContext";
import Button from "react-bootstrap/Button";


const TchatItem = (item) => {

    const [text, setText] = useState("");
    const { currentUser } = useContext(AuthContext);
    const [editMessage, setEditMessage] = useState(false);
    const [newEditedMessage, setNewEditedMessage] = useState("");
    const message= item.item
    const currentUserId = currentUser.uid;


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



  const sendEditedMessage = (messageId)=>{
    db.collection("messages")
    .doc(messageId)
    // update() change un seul champs du doc sans écraser tout le document
    .update({ text: newEditedMessage })

    setEditMessage(false)


  }


  console.log("message", message);
  console.log("currentUserId", currentUserId);




    return (
<div>
    
    

        <div>
          <div className={currentUserId===message.data.authorId ? 'send' : 'received'} >
            {!editMessage ? (
              <div style={{display:'inline'}} >{message.data.text}  </div> 
            ) : (
              <div>
                <textarea
                  defaultValue={message.data.text}
                    onChange={(e) => {
                      setNewEditedMessage(e.target.value);
                    }}
                  type="text"
                />{" "}
                <Button onClick={()=>{sendEditedMessage(message.messageId)}} variant="success">Envoyer la modification</Button>
              </div>
            )}

            {currentUserId === message.data.authorId && (
              <>
                <Button
                  onClick={() => deleteMessage(message.messageId)}
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
              </>
            )}
          </div>
        </div>
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

export default TchatItem;
