
import Chicken from "./Chicken.jsx";
import { Texts } from "./Chicken.jsx";

function Hello() {
  return(
    <>
      <h1>Hello Nexus!</h1>
      <h2>Hello Cow</h2>
    </>
  );
}
export default function App() {
  return (
    <div>
      <Chicken />
      <Texts />
      <Hello />
    </div>
  )
}
