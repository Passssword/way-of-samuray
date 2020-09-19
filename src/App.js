import React from 'react';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header"><Header /></div>
      <div className="navi"></div>
      <div className="content"></div>
      <div className="footer"><Footer /></div>
    </div>
  );
}

export default App;
