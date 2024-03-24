import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("Black");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-evenly shadow-md bg-yellow-50 rounded-md w-2/4 h-100">
          <button
            onClick={() => {
              setcolor("red");
            }}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setcolor("green");
            }}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setcolor("blue");
            }}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setcolor("yellow");
            }}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setcolor("orange");
            }}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Orange" }}
          >
            Orange
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
