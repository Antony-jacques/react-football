import React, { useState, useEffect,useContext } from "react";
import firebase from '../../firebase'
import {db} from '../../firebase'
import { doc, setDoc, deleteDoc } from "firebase/firestore"; 

import {AuthContext} from '../../Context/AuthContext'
import Button from 'react-bootstrap/Button';

export default function Tchat() {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const {currentUser} = useContext(AuthContext)
  const currentUserId = currentUser.uid
  const [dataTest, setDataTest] = useState([]);


  useEffect(() => {
      //acceder à la table messages
    db.collection('messages')
    .orderBy('createdAt')
    .limit(25).onSnapshot((snapshot)=>{
      // snapshot.docs designe tous les enregistrements
      //data() data permet d'acceder aux données
        setMessages(snapshot.docs.map(doc=>doc.data()))
        setDataTest(snapshot.docs.map(doc=>{
          return {messageId:doc.id, data:doc.data()}
        }))
    })
  },[])

  //ajouter un enregistrement https://www.youtube.com/watch?v=zpQle4SBRfg
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

  const deleteMessage = (index)=>{
    db.collection('messages')
    .doc(index)
    .delete()


  }

 console.log(messages)
 console.log('dataTest',dataTest)

// console.log('currentUser', currentUser.uid)
//console.log('Date', new Date() )
  return (
    <div>
        <h4>Chat en direct</h4>
        {/* {messages.map(({text, authorId},index )=>(
          <div> 
            <p key={index}>
                {text} {index}
                
            {(currentUserId === authorId) && <Button onClick={()=>deleteMessage(index)} variant="danger">x</Button> }
            </p>

          </div>
          
        ))} */}
        



      {dataTest.map((val,index )=>(
        <div> 
          <p key={index}>
              {val.data.text} {val.messageId}
              
          {(currentUserId === val.data.authorId) && <Button onClick={()=>deleteMessage(val.messageId)} variant="danger">x</Button> }
          </p>

        </div>
        
      ))}
      <form onSubmit={createMessage}>
        <textarea placeholder="message" type="text" value={text} onChange ={(e)=>{setText(e.target.value)}}/>
        <button type="subit">Envoyer</button>
      </form>
    </div>
  );
}
