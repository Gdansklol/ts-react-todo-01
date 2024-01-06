### Drag and drop in TodoList.tsx
- ver 1
```tsx
// rafce

import React from 'react';
import {Todo} from "../model";
import "./styles.css";
import SingleTodo from "./SingleTodo";
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  }

const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    // <div className='todos'>
    // {todos.map((todo)=>(
    //     <SingleTodo 
    //     todo={todo} 
    //     key={todo.id}
    //     todos={todos}
    //     setTodos={setTodos}
    //      />
    // ))}
    // </div>

    <div className='container'>
      <Droppable droppableId='TodosList'>
        {
          () => (
            <div className="todos">
        <span className="todos__heading">
          Active Tasks
        </span>
        {todos.map((todo)=> (
          <SingleTodo 
          todo={todo}
          todos={todos}
          key={todo.id}
          setTodos={setTodos}
          />
        ))}
            </div>
          )}
      </Droppable>
        <div className="todos remove">
        <span className="todos__heading">
          Complete Tasks
        </span>
        {todos.map((todo)=> (
          <SingleTodo 
          todo={todo}
          todos={todos}
          key={todo.id}
          setTodos={setTodos}
          />
        ))}
        </div>
    </div>
  );
};

export default TodoList;
```
- App.tsx
ver 1

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
- 1:18
inside of this function , it takes a
few parameters.

one will be **provided**. 

<Droppable>
{(provided)}
</Droppable>

- provided to parent div of 
this particular droppable zone.

