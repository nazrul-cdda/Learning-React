
import React from 'react';
import { PracticeContext } from './PracticeContext';
import { ChildOne } from './ChildOne';
import { ChildTwo } from './ChildTwo';
import { ChildThree } from './ChildThree';
import { ChildFour } from './ChildFour';

const user = {
  name: "Gil",
  age: "25",
  location: "Uttara"
}
export const App = () => {
  return(
    <PracticeContext value = {user}>
      <div>
        <h1>NEXUS</h1>
        <ChildOne />
        <ChildTwo />
        <ChildThree />
        <ChildFour />
      </div>
    </PracticeContext>
  )
}