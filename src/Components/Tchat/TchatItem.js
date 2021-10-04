import React, { useState,  useContext } from "react";
//import firebase from "../../firebase";
import { db } from "../../firebase";
//import { doc, setDoc, deleteDoc } from "firebase/firestore";

import { AuthContext } from "../../Context/AuthContext";
import Button from "react-bootstrap/Button";

const TchatItem = (item) => {
  //const [text, setText] = useState("");
  const { currentUser } = useContext(AuthContext);
  const [editMessage, setEditMessage] = useState(false);
  const [newEditedMessage, setNewEditedMessage] = useState("");
  const message = item.item;
  const currentUserId = currentUser.uid;



  const deleteMessage = (messageId) => {
    db.collection("messages")
      // doc() permet de selectionner un doc en particulier via le parametre
      .doc(messageId)
      .delete();
  };

  const sendEditedMessage = (messageId) => {
    db.collection("messages")
      .doc(messageId)
      // update() change un seul champs du doc sans écraser tout le document
      .update({ text: newEditedMessage });

    setEditMessage(false);
  };

   // console.log("message", message);
  //   console.log("currentUserId", currentUserId);

  return (
    <div className='tchat-item'>
      <div>
        <div
          className={
            currentUserId === message.data.authorId ? "send" : "received"
          }
        >
          {!editMessage ? (
            <div>
              <div className="img-container">
              {(message.data.authorName && message.data.authorImageURL) &&  <div className='authorContainer' > <img className='authorImage' src={message.data.authorImageURL} alt=""/> <p>{message.data.authorName}</p> </div> }
              </div>

            
            <div className='messageContainer' >

              <p className='message-text'>

              {message.data.text}
              </p>
            </div></div>
          ) : (
            <div>
              <textarea
                defaultValue={message.data.text}
                onChange={(e) => {
                  setNewEditedMessage(e.target.value);
                }}
                type="text"
              />{" "}
              <Button
                onClick={() => {
                  sendEditedMessage(message.messageId);
                }}
                variant="success"
              >
                Envoyer la modification
              </Button>
            </div>
          )}

        </div>
          {currentUserId === message.data.authorId && (
            <div className='author-box'>
              <Button
                onClick={() => deleteMessage(message.messageId)}
                variant="danger"
              >
                Supprimer 
              </Button>
              <Button
                variant="warning"
                onClick={() => setEditMessage(!editMessage)}
              >
                Modifier 
              </Button>
            </div>
          )}
      </div>
    </div>
  );
};

export default TchatItem;
