import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-500 text-black rounded-xl mb-4">Tailwind Test</h1>
      <Card username="Sumit" visitBtn="Click Me" />
      <Card username="Anuj" visitBtn="Show Me" />
    </>
  );
}

export default App;
