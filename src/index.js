import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Relogio() {
  const [state, setState] = useState(new Date().toLocaleTimeString());


  // atualizar o state a cada segundo
  // setInterval(() => {
  //   setState(new Date().toLocaleTimeString());
  // }, 1000)

  // a atualizacao deve parar quando o component sair da tela


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
