import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Relogio() {
  const [state, setState] = useState(new Date().toLocaleTimeString());

  // quando o component renderiza 
  useEffect(() => {
    // atualizar o state a cada segundo
    let intervalID = setInterval(() => {
      setState(new Date().toLocaleTimeString());
    }, 1000)

    // quando o component sair da tela
    return () => {
      // para a atualizacao do state 
      clearInterval(intervalID)
    }
  });

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
