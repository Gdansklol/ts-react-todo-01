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

### styles.css
- before ver 1
```css
.input {
    display: flex;
    width: 90%;
    position: relative;
    align-items: center;
}

.input__box {
    width: 100%;
    border-radius: 50px;
    padding: 20px 30px;
    font-size: 21px;
    border:none;
    transition: 0.2s;
    box-shadow: inset 0 0 5px black;
}
.input__box:focus {
    box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.5);
    outline: none;
   
}

.input__submit {
    position: absolute;
    width: 50px;
    height: 50px;
    margin: 12px;
    border-radius: 50px;
    right: 0px;
    border: none;
    font-size: 15px;
    background-color: #2f74c0;
    color: white;
    transition: 0.2s all;
    box-shadow: 0 0 10px black;
}
.input__submit :hover {
    background-color: blue;
}

.input__submit:active {
    transform: scale(0.7);
    box-shadow: 0 0 5px black;
}
.todos {
    display:flex;
    justify-content: space-evenly;
    width: 90%;
    flex-wrap: wrap;
}
.todos__single {
    display: flex;
    border-radius: 5px;
    padding: 20px;
    margin-top: 15px;
    background-image: url("https://img.freepik.com/free-photo/vertical-shot-patterns-sands-desert_181624-29789.jpg?w=740&t=st=1704345676~exp=1704346276~hmac=ee64f682f9146f0d65da3a971a2b75a373315191e0ff9258b30b946d76656cc2");
  }

  .todos__single--text{
    flex: 1;
    padding: 5px;
    border: none;
    font-size: 20px;
  }

  .todos__single--text:focus {
    outline:none;
  }

  .icon {
    margin-left: 10px;
    font-size: 25px;
    cursor: pointer;
  }
  @media (max-width: 1200px) {
   .todos__single{
    width: 40%;
   }
}

@media (max-width: 700px) {
    .input {
        width: 95%;
    }
    .todos {
        width: 95%;
    }
    .todos__single {
        width: 95%;
    }
}
```

- afeter ver 2

```css
.input {
    display: flex;
    width: 95%;
    position: relative;
    align-items: center;
}

.input__box {
    width: 100%;
    border-radius: 50px;
    padding: 20px 30px;
    font-size: 21px;
    border:none;
    transition: 0.2s;
    box-shadow: inset 0 0 5px black;
}
.input__box:focus {
    box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.5);
    outline: none;
   
}

.input__submit {
    position: absolute;
    width: 50px;
    height: 50px;
    margin: 12px;
    border-radius: 50px;
    right: 0px;
    border: none;
    font-size: 15px;
    background-color: #5698df;
    color: white;
    transition: 0.2s all;
    box-shadow: 0 0 10px black;
}
.input__submit :hover {
    background-color: rgb(75, 75, 232);
}

.input__submit:active {
    transform: scale(0.7);
    box-shadow: 0 0 5px black;
}
.container {
    display:flex;
    width:95%;
    margin-top: 10px;
    justify-content: space-between;
    align-items: flex-start;
    
}

.todos {
    display:flex;
    width: 47.5%;
    flex-direction: column;
    padding: 15px;
    border-radius: 5px;
    background-color: rgb(135, 202, 233);
}
.todos__heading {
    font-size: 30px;
    color: white
}
.todos__single {
    display: flex;
    border-radius: 5px;
    padding: 20px;
    margin-top: 15px;
    background-image: url("https://img.freepik.com/free-photo/vertical-shot-patterns-sands-desert_181624-29789.jpg?w=740&t=st=1704345676~exp=1704346276~hmac=ee64f682f9146f0d65da3a971a2b75a373315191e0ff9258b30b946d76656cc2");
    transition: 0.2s;
}
.todos__single:hover{
    box-shadow: 0 0 5px black;
    transform:scale(1.04);
}
  .todos__single--text{
    flex: 1;
    padding: 5px;
    border: none;
    font-size: 20px;
  }

  .todos__single--text:focus {
    outline:none;
  }

  .icon {
    margin-left: 10px;
    font-size: 25px;
    cursor: pointer;
  }

  @media (max-width:1100px) {
    .todos{
        width: 45%;
    }
  }

@media (max-width: 700px) {
    .input {
        width: 95%;
    }
    .todos {
        width: 95%;
        margin-bottom: 10px;
    }
}
```

- styling for Actives Tasks and Complete Tasks
direction with column 

 .container{
        width: 95%;
        flex-direction: column;
    }

- 1:13:05 
add remove class ,
background color is going to be orange.

- 1:13
start implementing **react beatiful dnd**
package into app.

- open new tab, search 
react-beautiful-dnd

- link (https://www.npmjs.com/package/react-beautiful-dnd)

- Install 

```bash
npm i react-beautiful-dnd
```

- 1:14
Create a new state for complete todos.
So useState **completed todos**.

App.tsx

```tsx

const [completedTodos,setCompletedTodos]= useState<Todo[]>([]);
```

- send both of these to TodoList component.
- it' giving us an error because this doen't exist
in todos list.

<TodoList 
        todos={todos} 
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
        />

- add this in interface Props{

}

- TodoList.tsx

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodo: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  }

- 1:17
TodoList.tsx

```tsx

    <div className='container'>
      <Droppable droppableId='TodosList'>
        {
          ()
        }
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
      </Droppable>
```
-
```tsx
 <Droppable droppableId='TodosList'>
        {
          () => (
            
          )
        }
      <div className="todos">
        <span className="todos__heading">
          Active Tasks
        </span>
```
-


