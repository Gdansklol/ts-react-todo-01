- 1:23
```tsx
import React,{useState} from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import TodoList from "./components/TodoList"
import {Todo} from "./model";
import {DragDropContext}from "react-beautiful-dnd";


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

console.log(todo);

console.log(todos)

  return(
    <DragDropContext onDragEnd={()=>{}}>
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

```
- update ver
```tsx
import React,{useState} from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import TodoList from "./components/TodoList"
import {Todo} from "./model";
import {DragDropContext, DropResult}from "react-beautiful-dnd";


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

const onDragEnd = (result: DropResult) => {
  const {source, destination} = result;

  console.log(result);

  if(!destination) return;

  if(
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  )
  return;
};

  return(
    <DragDropContext onDragEnd={onDragEnd }>
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

```