import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom'
import {AuthContext} from '../../Context/AuthContext'

const PrivateRoute = ({component: Component, ...rest}) => {

    const {currentUser} = useContext(AuthContext)

    return (
        <Route
        {...rest} // correspond à tout ce qui est passé à la route qd on l'appelle ex exact path etc.
        // render est une f dispo avec les Route
        render={()=>{
            return currentUser ? <Component/> : <Redirect to ='/' />
        }}
        >

        </Route>
    );
}

export default PrivateRoute;
