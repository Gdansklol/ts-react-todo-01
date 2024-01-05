 ### Implement the Delete functionality

 - 54:58 

 ```tsx
    <span className="icon" onClick={()=> handleDelete(todo.id)}>
            <AiFillDelete />
            </span>
 ```

 ```tsx
  const handleDelete =(id:number) => {
    setTodos(todos.filter((todo)=> todo.id !== id))
  };
 ```

 ### Edit functionality
 - 56: 03
 We are going to create tow states.
 First one will keep the track if the 
 *edit mode is on or not.*

 And the second one will keep the value of
 the editor to do so you state.

 First one will be for edit, 

-
1. import React,{useState} from 'react';
2.  const [edit, setEdit] =  useState<boolean>(false);
3.  const [edit, setEdit] =  useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>("");

- git checkout main
 or 
 - git switch main


Switch between the Edit Modes. So if I go and to this, currently, it's not going to work.
So we have to add an input field over here and conditional over here.

{ todo.isDone ? ( {todo.todo} ) : ( {todo.todo} ) }

So let's add the conditional

- before
```tsx
 return (
    <form className="todos__single">
      {
        todo.isDone ? (
          <s className="todos__single--text">
          {todo.todo}
      </s>

        ):(
          <span className="todos__single--text">
          {todo.todo}
      </span>
        )
      }
    
        <div>
            <span className="icon"
             onClick={()=> {
              if(!edit && !todo.isDone){
                setEdit(!edit)
              }

            }}>
```

- after

```tsx
  const [edit, setEdit] =  useState<boolean>(false);

  const [editTodo, setEditTodo] = useState<string>(todo.todo);


   <form className="todos__single">
      {edit? (
        <input 
        value={editTodo}
        onChange={(e)=> setEditTodo(e.target.value)}
        className="todos__single--test"
        />
      ) :  todo.isDone ? (
          <s className="todos__single--text">{todo.todo}</s>
      ):(
          <span className="todos__single--text">{todo.todo}</span>
        )}
    
        <div>
            <span className="icon"
             onClick={()=> {
              if(!edit && !todo.isDone){
                setEdit(!edit)
              }
            }}
          >
          </form>

```

- 1:00 **onSubmit function, 
handleEdeit(e, todo.id)

```tsx
const handleEdit = (e:React.FormEvent, id:number) => {

  }

```

```tsx
  <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
  
  
  </form>
```

###   isDone, delete, edit 

```tsx
SingleTodo.tsx

import React,{useState} from 'react';
import {Todo} from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

type Props = {
    todo : Todo;
    todos : Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({todo, todos, setTodos}: Props) => {
  const [edit, setEdit] =  useState<boolean>(false);
  // const [editTodo, setEditTodo] = useState<string>("");
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
 

  const handleDone = (id:number) => {
    setTodos(todos.map((todo)=> 
    todo.id === id ? {...todo, isDone:
    !todo.isDone}:todo
     )
    );
  };

  const handleDelete =(id:number) => {
    setTodos(todos.filter((todo)=> todo.id !== id))
  };

  const handleEdit = (e:React.FormEvent, id:number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo)=>(
        todo.id===id?{...todo,todo:editTodo}: todo
      ))
    )
        setEdit(false);
  }

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit? (
        <input 
        value={editTodo}
        onChange={(e)=> setEditTodo(e.target.value)}
        className="todos__single--text"
        />
      ) :  todo.isDone ? (
          <s className="todos__single--text">{todo.todo}</s>
      ):(
          <span className="todos__single--text">{todo.todo}</span>
        )}
    
        <div>
            <span className="icon"
             onClick={()=> {
              if(!edit && !todo.isDone){
                setEdit(!edit)
              }
            }}
          >
            <AiFillEdit />
            </span>
            <span className="icon" onClick={()=> handleDelete(todo.id)}>
            <AiFillDelete />
            </span>
            <span className="icon" onClick={()=> handleDone(todo.id)} >
            <MdDone />
            </span>
        </div>
    </form>
  )
}

export default SingleTodo;
```


 