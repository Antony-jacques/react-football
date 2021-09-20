import React, {useContext} from 'react';
import {AuthContext} from '../../Context/AuthContext'
import Highlights from '../../Components/Highlights/Highlights'
import PrivateNavbar from '../../Components/PrivateNavbar/PrivateNavbar'
import ScrollToTopBtn from '../../Components/ScrollToTopBtn/ScrollToTopBtn'


const PrivateHome = () => {

    const {logout} = useContext(AuthContext)
    return (
        <div >
            <PrivateNavbar/>
            <div style={{marginTop: '2rem'}}>
            <h1 style={{color:'#192a56'}} >Le meilleur du football européen</h1>
            <Highlights/>
            <ScrollToTopBtn></ScrollToTopBtn>

            </div>
        </div>
    );
}

export default PrivateHome;
