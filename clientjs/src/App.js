import logo from "./logo.svg";
import "./App.css";
import {Axios} from 'axios'
import React from "react";


function App() {
   
    const handleClick = (product) =>{
      
      Axios.post("http://localhost:8080/payment",{
         name: "product 1",
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }
 
  
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
  
        <form action="../../payment" method="post"
              className="form">
          <button type="submit" onClick={handleClick} >send payment</button>
        </form>
 
      </header>
    </div>
  );
}
  
export default App;