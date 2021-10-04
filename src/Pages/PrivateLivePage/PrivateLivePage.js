import React from 'react'
import PrivateNavbar from '../../Components/PrivateNavbar/PrivateNavbar'
import LiveList from '../../Components/LiveList/LiveList'
import Tchat from '../../Components/Tchat/Tchat'
import './PrivateLivePage.css'


export default function PrivateLivePage() {

const scrollFunction= ()=>{
    console.log('test')
}

    window.onscroll = function(){
        scrollFunction()
        console.log(document.body.scrollTop, document.documentElement.scrollTop)
   
     }
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
