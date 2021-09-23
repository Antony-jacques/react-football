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
    <div>
      <div>
        <div
          className={
            currentUserId === message.data.authorId ? "send" : "received"
          }
        >
          {!editMessage ? (
            <div className='messageContainer' >
              {(message.data.authorName && message.data.authorImageURL) && <div className='authorContainer' > <img className='authorImage' src={message.data.authorImageURL} alt=""/> {message.data.authorName}</div> }
              <p>

              {message.data.text}
              </p>
            </div>
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

          {currentUserId === message.data.authorId && (
            <div>
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
            </div>
          )}
        </div>
      </div>
      {/* <form onSubmit={createMessage}>
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
      </form>  */}
    </div>
  );
};

export default TchatItem;
