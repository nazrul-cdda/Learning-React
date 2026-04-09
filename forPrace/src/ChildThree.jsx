
import React from 'react';
import { useContext } from 'react';
import { PracticeContext } from './PracticeContext';

export const ChildThree = () => {
    const item = useContext(PracticeContext);
    return (
        <div>
            <h4>{item.name} lives in {item.location}</h4>
        </div>
    )
}