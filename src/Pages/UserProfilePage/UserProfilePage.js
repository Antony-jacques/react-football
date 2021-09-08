import React from 'react';
import UserProfileForm from '../../Components/UserProfileForm/UserProfileForm'
import PrivateNavbar from '../../Components/PrivateNavbar/PrivateNavbar'

const UserProfilePage = () => {
    return (
        <div>
            <PrivateNavbar/>
            <UserProfileForm/>
        </div>
    );
}

export default UserProfilePage;
