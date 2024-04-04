import React, { useState } from "react";
//import ReactDOM from "react-dom/client";
import "./App.css" ;

function App() {
  const [color, setColor] = useState("red");
  
    
  return (
    <div className="a">
      <p> hello</p>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>Blue</button>
      <button type="button" onClick={() => setColor("red")}>Red</button>
      <button type="button" onClick={() => setColor("pink")}>Pink</button>
      <button type="button" onClick={() => setColor("green")}>Green</button>
      <select>
        <option>india</option>
        <option>usa</option>
      </select>
    </div>
  );

}

export default App