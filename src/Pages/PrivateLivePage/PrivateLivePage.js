import React from 'react'
import PrivateNavbar from '../../Components/PrivateNavbar/PrivateNavbar'
import LiveList from '../../Components/LiveList/LiveList'
import Tchat from '../../Components/Tchat/Tchat'
import fansbanner from '../../images/vienna-reyes-qCrKTET_09o-unsplash.jpg'
import './PrivateLivePage.css'


export default function PrivateLivePage() {
    return (
        <div >
            <PrivateNavbar/>
            <div className='PrivateLivePage' >
                <h2 style={{margin:'auto', color: '#fff', fontSize:'5rem' }} >Les résultats en direct</h2>
            </div>
            <LiveList/>
            <Tchat/>
        </div>
    )
}
