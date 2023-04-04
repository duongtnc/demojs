import Axios from "axios"
import React from "react";

function App() {
  function handleClick (){
    Axios.post('http://localhost:8080/payment', {  
    data: JSON.stringify({cpfcnpj: "15060655709"})
    }).then(res =>  console.log(res.data))
      .catch(error => console.log(error))
  }
  return (
    <div className="Payment">
      <header className="Payment-header">
        <button type="submit" onClick={handleClick} >send payment</button>
      </header>
    </div>
  );
}
  
export default App;