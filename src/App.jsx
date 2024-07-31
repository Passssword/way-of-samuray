import './generalStyles/App.css';
import Header from './components/headerContener.jsx';
import Content from './components/content.js';
import Footer from './components/footer.js';
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Route path="/" render={ () => <Header /> } />
        <Route path="/" render={ () => <Content
          dispatch={props.dispatch}
          state={props.state}
          store={props.store}
          /> 
        } />
        <Route path="/" render={ () => <Footer /> } />

        <div className="color_bar">
        Colors: 
          <div className="color1" />
          <div className="color2" />
          <div className="color3" />
          <div className="color4" />
          <div className="color5" />
          <div className="color6" />
          <div className="color7" />
          <div className="color8" />
          <div className="color9" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;