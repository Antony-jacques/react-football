import React, {useContext} from 'react';
import {AuthContext} from '../../Context/AuthContext'
import Highlights from '../../Components/Highlights/Highlights'

const PrivateHome = () => {

    const {logout} = useContext(AuthContext)
    return (
        <div>
            <h1>Page privée</h1>
            <button onClick={logout}>Se déconnecter</button>
            <Highlights/>
        </div>
    );
}

export default PrivateHome;
