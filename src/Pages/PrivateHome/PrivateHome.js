import React, {useContext} from 'react';
import {AuthContext} from '../../Context/AuthContext'
import Highlights from '../../Components/Highlights/Highlights'
import PrivateNavbar from '../../Components/PrivateNavbar/PrivateNavbar'

const PrivateHome = () => {

    const {logout} = useContext(AuthContext)
    return (
        <div>
            <PrivateNavbar/>
            <h1>Page privée</h1>
            <button onClick={logout}>Se déconnecter</button>
            <Highlights/>
        </div>
    );
}

export default PrivateHome;
