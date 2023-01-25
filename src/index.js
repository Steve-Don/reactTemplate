import React from 'react';
import ReactDOM from 'react-dom';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App(){
  return <h1>default react template</h1>;
}

root.render(<App />);