
import { people } from './data.jsx';

export default function App() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person=>
    <li key = {person.id}>
      {person.name}
    </li>
  );

  return(
    // {listItems}
   <ul> {listItems} </ul>
  );
}