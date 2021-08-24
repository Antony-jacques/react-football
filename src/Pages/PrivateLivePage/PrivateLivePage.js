import React from 'react'
import PrivateNavbar from '../../Components/PrivateNavbar/PrivateNavbar'
import LiveList from '../../Components/LiveList/LiveList'
import Tchat from '../../Components/Tchat/Tchat'

export default function PrivateLivePage() {
    return (
        <div>
            <PrivateNavbar/>
            PrivateLivePage
            <LiveList/>
            <Tchat/>
        </div>
    )
}
