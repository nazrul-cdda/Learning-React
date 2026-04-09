import React from 'react';
import { useContext } from 'react';
import { PracticeContext } from './PracticeContext';

export const ChildOne = () => {
    const use = useContext(PracticeContext);
    return(
        <div>
            <h2>Hello, {use.name}</h2>
        </div>
    )
}