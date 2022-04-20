import React from 'react';
import { getUser, resetUserSession } from './AuthService';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    
    const user = getUser();
    const name = user !== 'undefined' && user ? user.name : '';
    const navigate = useNavigate();

    const logoutHandler = () => {
        resetUserSession();
        navigate('/login');
    }

    const createPostHandler = () => {
        navigate('/createpost');
    }

    return (
        <div>
            Hi {name}! <br/>
            <input type="button" value="Create Post" onClick={createPostHandler} /> 
            <input type="button" value="Logout" onClick={logoutHandler} /> 
        </div>
    )
}

export default Account;