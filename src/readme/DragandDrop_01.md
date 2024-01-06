### Integrating the Drag and drop 

- 1:07 
So let's make the suitable UI changes

So whenever we enter the todo,
it appears **Active Tasks**
And we should have a **Complete Tasks**
section over here. 

So let's go and make the changes in
this particular app. 

- go to <TodoList> in App.tsx

```tsx
import React,{useState} from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import TodoList from "./components/TodoList"
import {Todo} from "./model"

const App: React.FC = ()=> {
// const [todo, setTodo] = useState<string | number>("");
const [todo, setTodo] = useState<string>("");
const [todos, setTodos] = useState<Array<Todo>>([]);

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
    <div className="App">
      <span className="heading"> Earthlings' ToDo Task 📙 👌🎍😍</span>
      <InputFeild  todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>

      <TodoList todos={todos} setTodos={setTodos}/>
      {/* {todos.map((t)=>(
        <li>{t.todo}</li>
      ))} */}
    </div>
  )
}

export default App;

```

```tsx
// rafce

import React from 'react';
import {Todo} from "../model";
import "./styles.css";
import SingleTodo from "./SingleTodo";


interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='todos'>
    {todos.map((todo)=>(
        <SingleTodo 
        todo={todo} 
        key={todo.id}
        todos={todos}
        setTodos={setTodos}
         />
    ))}
    </div>
  );
};

export default TodoList;
```

```tsx
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
      <div className="todos">
        <span className="todos__heading">
          Active Tasks
        </span>
        {

        }

      </div>
        <div className="remove">
        
        </div>
    </div>
```

```tsx
TodoList.tsx

<div className='container'>
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
        ))
        }

      </div>
        <div className="remove">
        
        </div>
    </div>
```