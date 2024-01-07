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

```tsx
{
          (provided) => (
            <div className="todos" ref={provided.innerRef}>

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
```

```tsx
 (provided) => (
            <div className="todos" ref={provided.innerRef}
            {...provided.droppableProps}
```

- ver 2
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
          (provided) => (
            <div className="todos" ref={provided.innerRef}
            {...provided.droppableProps}
            >
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
      <Droppable droppableId='TodosRemove'>
        {
          ()=> (
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
          )
        }
      </Droppable>
    </div>
  );
};

export default TodoList;
```

 <Droppable droppableId='TodosRemove'>
        {
          (provided)=> (
            <div className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
            >


</Droppable>

- upgrade ver

const TodoList:React.FC<Props> = ({todos,setTodos,completedTodos,setCompletedTodos}) => {
  return (

  )
}

- upgrade ver
```tsx
 {completedTodos.map((todo)=> (
              <SingleTodo 
              todo={todo}
              todos={completedTodos}
              key={todo.id}
              setTodos={setCompletedTodos}
              />
            ))}
```
- upgrade ver
- add index
- type of index is number

```tsx
TodoList.jsx
 {todos.map((todo,index)=> (
          <SingleTodo 
          index={index}
          todo={todo}
          todos={todos}
          key={todo.id}
          setTodos={setTodos}
          />
        ))}
            </div>
          )}
```

- upgrade ver in SingleTodo.tsx

```tsx
type Props = {
  index:number;
    todo : Todo;
    todos : Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

```
-
```tsx
const SingleTodo = ({index,todo, todos, setTodos}: Props) => {
```

- before changes code 
```tsx
import React,{useEffect,useState} from 'react';
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";
import "./styles.css";

type Props = {
  index:number;
    todo : Todo;
    todos : Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({index,todo, todos, setTodos}: Props) => {
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
  };

  const inputRef = useRef<HTMLInputElement>(null);

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
            <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
        </div>
    </form>
  )
}

export default SingleTodo;


```
- SingleTodo.tsx
with red color , not clean code yet

```tsx
import React,{useEffect,useState} from 'react';
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";
import "./styles.css";
import { Draggable } from 'react-beautiful-dnd';

type Props = {
  index:number;
    todo : Todo;
    todos : Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({index,todo, todos, setTodos}: Props) => {
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
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Draggable draggableId={todo.id.toString()}>
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
            <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
        </div>
    </form>
    </Draggable>
    
  )
}

export default SingleTodo;


```
- 
```tsx
return (
    <Draggable draggableId={todo.id.toString()} index={index}
    {
      () => (
        
      )
    }
    >
```
- not clean yet
```tsx
import React,{useEffect,useState} from 'react';
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";
import "./styles.css";

type Props = {
  index:number;
    todo : Todo;
    todos : Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({index,todo, todos, setTodos}: Props) => {
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
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Draggable  droppableId={todo.id.toString()} index={index}>
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
            <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
        </div>
    </form>
    </Draggable>
    
  )
}

export default SingleTodo;

```
- now upgrage ver
```
import React,{useEffect,useState} from 'react';
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";
import "./styles.css";
import { Draggable } from "react-beautiful-dnd";



type Props = {
  index:number;
    todo : Todo;
    todos : Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({index,todo, todos, setTodos}: Props) => {
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
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {
        () => (
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
            <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
        </div>
    </form>
        )
      }
      
    </Draggable>
    
  )
}

export default SingleTodo;

```
- update ver 

```tsx
import React,{useEffect,useState} from 'react';
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";
import "./styles.css";
import { Draggable } from "react-beautiful-dnd";



type Props = {
  index:number;
    todo : Todo;
    todos : Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({index,todo, todos, setTodos}: Props) => {
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
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {
        (provided) => (
          <form className="todos__single" 
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          >
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
            <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
        </div>
    </form>
        )
      }
      
    </Draggable>
    
  )
}

export default SingleTodo;


```
- update in TodoList.tsx

  {provided.placeholder}
```tsx
{todos.map((todo,index)=> (
          <SingleTodo 
          index={index}
          todo={todo}
          todos={todos}
          key={todo.id}
          setTodos={setTodos}
          />
        ))}
        {provided.placeholder}
            </div>
          )}


          completedTodos.map((todo, index)=> (
              <SingleTodo 
              index={index}
              todo={todo}
              todos={completedTodos}
              key={todo.id}
              setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
            </div>
```
- update
```tsx
onst onDragEnd = () => {

}

  return(
    <DragDropContext onDragEnd={onDragEnd }>
```
