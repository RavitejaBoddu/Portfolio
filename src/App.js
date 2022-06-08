import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './pages/Main/Main';
import Blog from './pages/Blog/Blog';
import Navbar from './components/navbar/Navbar';
import MainService from './pages/MainService/MainService';
import React, { useContext } from 'react'
import { themeContext } from "../src/Context";
import ScrollToTop from './ScrollToTop';

function App() {
  const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
  <div className="App"
  style={{
    background: darkMode ? "black" : "",
    color: darkMode ? "white" : "",
  }}>
  <Router>  
  <Navbar />
    <div>
    <ScrollToTop />
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/main-services">
          <MainService />
        </Route>
        <Route path="/home">
          <Main />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  </Router>
  
  </div>
    
  ); 
}

export default App;
