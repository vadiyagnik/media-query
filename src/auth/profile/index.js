import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '..';

const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogout = ()=> {
        auth.logout()
        navigate('/');
    }
    return (
        <div>
            WelCome {auth.user}
            <button onClick={handleLogout}>LogOut</button>
        </div>
    );
};

export default Profile;