import React from 'react';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Navi from './components/navigation/Navi.jsx';
import Content from './components/content/Content.jsx';
import Messeges from './components/messeges/Messeges.jsx';

import './App.css';

function App() {
    return ( 
      <div className = "App">
        <div className = "header"><Header /></div>
        <div className = "navi"> <Navi /> </div>
        <div className = "content"> <Content /> </div>
        <div className = "footer"> < Footer /> </div> 
      </div>
    );
}

export default App;