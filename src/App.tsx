import React,{useState} from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import TodoList from "./components/TodoList"
import {Todo} from "./model";
import {DragDropContext, DropResult}from "react-beautiful-dnd";
import { AiOutlineConsoleSql } from "react-icons/ai";


const App: React.FC = ()=> {
// const [todo, setTodo] = useState<string | number>("");
const [todo, setTodo] = useState<string>("");
// const [todos, setTodos] = useState<Array<Todo>>([]);
const [todos, setTodos] = useState<Todo[]>([]);
const [completedTodos, setCompletedTodos]= useState<Todo[]>([])


const handleAdd = (e : React.FormEvent)=> {
 e.preventDefault();

  if (todo) {
    setTodos([...todos, {id: Date.now(), todo, isDone:false}])
    setTodo("");
  }
};

// console.log(todo);
// console.log(todos)

const onDragEnd =(result:DropResult)=>{
  const {source, destination} = result;
  console.log(result);

if (!destination) return;

if(
  destination.droppableId ===source.droppableId &&
  destination.index ===source.index
)
    return;

    let add,
    active = todos,
    complete= completedTodos;

    if(source.droppableId === 'TodosList'){
      add = active[source.index];
      active.splice(source.index, 1)
    }else{
      add = complete[source.index];
      complete.splice(source.index, 1)
    }

    if(destination.droppableId === 'TodosList'){
      active.splice(destination.index, 0,add)
    }else{
      complete.splice(destination.index,0, add)
    }
    setCompletedTodos(complete);
    setTodos(active);

};

  return(
    <DragDropContext onDragEnd={onDragEnd}>
       <div className="App">
      <span className="heading"> Earthlings' ToDo Task 📙 👌🎍😍</span>
      <InputFeild  todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
        />
    </div>
    </DragDropContext>
   
  )
}

export default App;

