import React,{useState} from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";

const App: React.FC = ()=> {
  const [todo, setTodo] = useState("");
  
  return(
    <div className="App">
      <span className="heading">ToDo Task</span>
      <InputFeild />
    </div>
  )
}

export default App;


