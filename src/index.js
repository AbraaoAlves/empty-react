import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Relogio() {
  const [state, setState] = useState(new Date().toLocaleTimeString());

  return (
    <div>
      <h2>It is {state}.</h2>

      <button onClick={() => setState(new Date().toLocaleTimeString())}>
        Atualizar
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Hello, world!</h1>
      <Relogio />
      <Relogio />
      <Relogio />
    </>
  );
}

root.render(<App />);
