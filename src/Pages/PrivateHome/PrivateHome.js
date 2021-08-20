import React, {useContext} from 'react';
import {AuthContext} from '../../Context/AuthContext'

const PrivateHome = () => {

    const {logout} = useContext(AuthContext)
    return (
        <div>
            <h1>Page privée</h1>
            <button onClick={logout}>Se déconnecter</button>
        </div>
    );
}

export default PrivateHome;
