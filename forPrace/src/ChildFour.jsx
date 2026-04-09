
import React from 'react';
import { useContext } from 'react';
import { PracticeContext } from './PracticeContext';

export const ChildFour = () => {
    const deta = useContext(PracticeContext);
    return (
        <div>
            <p>{deta.name} is {deta.age} years old and lives in {deta.location}</p>
        </div>
    )
}