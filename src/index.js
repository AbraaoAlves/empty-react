import React from 'react';  
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Relogio(props) {
  const date = props.date;
  return <div>
    <h1>Hello, world!</h1>
    <h2>It is {date}.</h2>
  </div>
} 

root.render(<Relogio date={new Date().toLocaleTimeString()} />);
