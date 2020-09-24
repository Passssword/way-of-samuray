import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Navi from './components/navigation/Navi.jsx';
import Content from './components/content/Content.jsx';
import Messeges from './components/messeges/Messeges.jsx';
import Profile from './components/profile/Profile.jsx';
import './App.css';


function App() {
    return (
      <BrowserRouter>
        <div className = "App">
          <div className = "header"><Header /></div>
          <div className = "navi"> <Navi /> </div>
          <div className = "content">
            <Route path='/messeges' component={Messeges} />
            <Route path='/profile' component={Profile} />
            </div>
          <div className = "footer"> < Footer /> </div> 
        </div>
      </BrowserRouter>
    );
}

export default App;