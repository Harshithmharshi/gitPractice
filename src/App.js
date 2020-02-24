import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let a=110;
  let b=20;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{a+b}</h1>
      </header>
    </div>
  );
}

export default App;
