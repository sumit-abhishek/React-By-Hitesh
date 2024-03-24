import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("You can't add more than 20");
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("No more items to remove");
    }
  };

  return (
    <>
      <h1>Counter to learn Hooks Usage</h1>
      <h2>Counter Value: {counter}</h2>
      <br />
      <button onClick={addValue}>Add Counter Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
