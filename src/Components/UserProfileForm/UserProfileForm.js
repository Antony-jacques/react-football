import React, {useState, useContext } from "react";
import {AuthContext} from '../../Context/AuthContext'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { auth } from "../../firebase";

const UserProfileForm = () => {
    const currentUser = useContext(AuthContext)
    const [pseudo, setPseudo] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [error, setError] = useState();
    
    const user = auth.currentUser;

    const editProfile = (e)=>{
        e.preventDefault();

        user.updateProfile(
            {
                displayName: pseudo, 
                photoURL: profileImage
            }
            ).then(() => {
                setPseudo('')
                setProfileImage()
              }).catch((err) => {
                console.log(err)
                setError(err)
              }); 
    }

    console.log('user', user)
    console.log('currentUser', currentUser)

  return (
    <div>
      

      <Container style={{marginTop:'2rem'}}>
  <Row className="justify-content-md-center">

      <Form onSubmit={editProfile} >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Pseudo</Form.Label>
    <Form.Control onChange={(e)=>setPseudo(e.target.value)} type="text" placeholder="Pseudo" />
    <Form.Text className="text-muted">
      Le pseudo sera utilisé dans le chat en direct
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>URL de votre image de profil</Form.Label>
    <Form.Control onChange={(e)=>setProfileImage(e.target.value)} type="text" placeholder="URL" />
  </Form.Group>

  <Button variant="success" type="submit">
    Enregistrer
  </Button>
</Form>
<h3 style={{marginTop:'2rem'}}>

{user.displayName ? user.displayName: 'null' }
</h3>
<p>

{user.photoURL ? <img style={{width:'200px'}} src={user.photoURL} alt=""/> : 'null'}
</p>
  </Row>
</Container>
    </div>
  );
};

export default UserProfileForm;
