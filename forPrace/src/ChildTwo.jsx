
import React from 'react';
import { useContext } from 'react';
import { PracticeContext } from './PracticeContext';

export const ChildTwo = () => {
    const data = useContext(PracticeContext);
    return (
        <div>
            <h3>{data.name} is {data.age} years old</h3>
        </div>
    )
}