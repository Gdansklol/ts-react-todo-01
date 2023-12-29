import React,{useState} from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import {Todo} from "./model";

const App: React.FC = ()=> {
// const [todo, setTodo] = useState<string | number>("");
const [todo, setTodo] = useState<string>("");
const [todos, setTodos] = useState<Todo[]>([]);

console.log(todo);

  return(
    <div className="App">
      <span className="heading">ToDo Task</span>
      <InputFeild  todo={todo} setTodo={setTodo}/>
    </div>
  )
}


export default App;


