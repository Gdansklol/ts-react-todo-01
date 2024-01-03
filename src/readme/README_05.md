- 40:44 

Let's go back to our App.tsx
we are going to create a TodoList component,

go inside of components folder and
create a new file called
TodoList.ts

```tsx
// rafce

import React from 'react'

const TodoList:React.FC = () => {
  return (
    <div>TodoList</div>
  )
}

export default TodoList
```

- going to be a React. function component

ex ** const TodoList:React.FC = () => { **

and let's import this component in App.tsx

- 41:06 
There we go. It is important.

- TodoList.tsx
- 41:12 
inside of this div,
going to give this div a classNaem of todos

```tsx

return(
    <div className='todos'> </div>
)
```

And let's import our style sheet as well. 

import "./style.css";

- 41:31
 the todos.
 we don't have the todos over here.
 So we are suppose to bring them 
 in todos  ({todos})
 and setTodos as well. 
 - 41:44 
 * Because we are going to delete them as
 complete. So we are going to need setTodos as well. 

```tsx
const TodoList:React.FC =({todos, setTodos}) => {

}
```

 so setTodo so it's going to obviously going to complain 
 because we havn't defined the
 the type of these todos and setTodos.

 - 41:58 
 So let's define this over here.

 interface , Props todos .

 ```tsx
 interface Props {

 }
 ```
 So what todo is was it was an array of that
 type todo. Now next thig was setTodos.
 we don't know how do we define setTodos.

 - 42:17 

 So let's just go to App.tsx and hover on this. And
 let's just take this thing

 ex hover on  setTodo
 const [todo, setTodo] = 

and bring it over in TodoList.tsx

- 42: 29
Oh,ok. We havn't assigned it. 
** assign Props .
And let's refresh it. 


- 42:41 

 provided this todos and setTodos.
 So let's just provide it real quick dues
  

  See, this is what I like about typeScript,
  it cleary tells you what is going on why 
  it's going giving error, wrong

  Js might be wondering why it's giving error. 

  So set
   it's cleary showing you that what you are supposed
   to be next in your app. 


   ```tsx


   <TodoList todos={todos} setTodos={setTodos}>
   ```

   - 43:10 

   go back to our TodoList up.

   and let's start to *map* all of those todos. 
   Single todo


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
      <span className="heading">ToDo Task</span>
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

   ---

   ```tsx
   // rafce

// rafce

import React from 'react';
import {Todo} from "../model";
import "./styles.css";


interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;


}

const TodoList:React.FC<Props> = ({todos,setTodos}: Props) => {
  return (
    <div className='todos'>

    </div>
  )
}

export default TodoList;
   ```

- 43:17

```tsx
{todos.map(todo =>(
    
))}
```

And 

 