
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from './UserContext';

export const Avatar = () => {
    const[state, setState] = useState(true);
    const avData = useContext(UserContext);

    let checker = 1;
    const handleChangeName = () => {
        avData.setUser({...avData.user, name : (state? 'Kiki':'Bruce Wayne')});
        setState(!state);
    };
    return (
        <div>
            <p>Wecome, {avData.user.name}!</p>
            <button onClick={handleChangeName}>Change name </button>
            <p>WeLcome, {avData.user.name}</p>
        </div>
    )
}