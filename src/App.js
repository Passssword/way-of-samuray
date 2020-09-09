import React from 'react';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header"><Header /></div>
      <div className="navi"></div>
      <div className="content"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
