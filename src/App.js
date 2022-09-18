import { useState } from "react";
import "./App.css"
function App(){

  const time= new Date().toLocaleTimeString();
  const [ctime,setCtime]=useState(time);

  const UpdateTime=()=>{
    let time=new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime,1000)
  return(
    <div className="body">
    <div className="cont">
      <h1>{ctime}</h1>
    </div>
    </div>
  )
}
export default App;