import logo from "./logo.svg";
import "./App.css";

import React from "react";
import Payment from './Payment'

function App() {
 
 
 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" 
             alt="logo" />
          
<p>A simple React app.....</p>
  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form action="../../post" method="post"
              className="form">
          <button type="submit">Connected?</button>
        </form>
  
      <Payment></Payment>
 
      </header>
    </div>
  );
}
  
export default App;