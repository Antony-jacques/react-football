import React, {useState, useContext } from "react";
// import { getAuth, updateProfile } from "firebase/auth";
// import {updateProfile} from '../../firebase'
import {AuthContext} from '../../Context/AuthContext'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
      

      <Container>
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
    <Form.Label>url de votre image de profil</Form.Label>
    <Form.Control onChange={(e)=>setProfileImage(e.target.value)} type="text" placeholder="url" />
  </Form.Group>

  <Button variant="success" type="submit">
    Enregistrer
  </Button>
</Form>
{user.displayName ? user.displayName: 'null' }
<p>

{user.photoURL ? <img src={user.photoURL} alt=""/> : 'null'}
</p>
  </Row>
</Container>
    </div>
  );
};

export default UserProfileForm;
