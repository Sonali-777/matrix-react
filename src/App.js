import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [bg, setBg] = useState("#282c34");
  const setStyle = (bg) => {
    setBg(bg);
  };

  return (
    <div className="App">
      <button className="b1" onClick={() => setStyle("#f00")}>
        {setStyle}
      </button>
      <button className="b1"></button>
      <button className="b1"></button>
      <button className="b1"></button>
      <button className="b1"></button>
      <button className="b1"></button>
      <button className="b1"></button>
      <button className="b1"></button>
      <button className="b1"></button>
      <button className="b1"></button>
      <button className="b1"></button>
      <button className="b1"></button>
      <button className="b1"></button>
      <button className="b1"></button>
      <button className="b1">hi</button>
      <button className="b1"></button>
    </div>
  );
}

export default App;
