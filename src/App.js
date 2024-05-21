import React,{useState} from "react";
import Routes from "./Components/routes";


function App() {
  const [register, changeRegister] = useState(true)
  const [loginStatus, setLoginStatus] = useState(false)
  function changeSign(){
    register === true ? changeRegister(false) : changeRegister(true)
  }
  return (
    <div className="App text-3xl">
      <Routes loginStatus = {loginStatus} setLoginStatus = {setLoginStatus}/> 
    </div>
  );
}

export default App;