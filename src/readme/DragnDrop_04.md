- 1:20:58
- SingelTodo.tsx

<Draggable>
</Draggable>

- before update
```tsx
import React,{useEffect,useState} from 'react';
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";
import "./styles.css";

type Props = {
    index: number;
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
- update ver
- 1:21:42

```tsx
import React,{useEffect,useState} from 'react';
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";
import "./styles.css";
import { Draggable } from 'react-beautiful-dnd';

type Props = {
    index: number;
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
        ()=> (
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

-  part of update
```tsx
 return (
    <Draggable draggableId={todo.id.toString()} index={index}>
       {(provided)=> (
          <form 
          className="todos__single" 
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          >
         
```
- error code
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

const TodoList:React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    
    <div className='container'>
      <Droppable droppableId='TodosList'>
        {(provided) => (
            <div 
            className="todos"
            ref={provided.innerRef}
            {...provided.innerRef}
            >
        <span className="todos__heading">
          Active Tasks
        </span>
        {todos.map((todo, index)=> (
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
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {
          (provided)=> (
            <div 
            className="todos remove"
            ref={provided.innerRef}
            {...provided. droppableProps}
            >
            <span className="todos__heading">
              Complete Tasks
            </span>
            { completedTodos.map((todo, index)=> (
              <SingleTodo 
              index ={index}
              todo={todo}
              todos={ completedTodos}
              key={todo.id}
              setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
            </div>
          )
        }
      </Droppable>
       
    </div>
  );
};

export default TodoList;
```
- 1:28:21 App.tsx

```tsx
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
    }
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

```

- singelTodo.tsx
import React,{useEffect,useState} from 'react';
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";
import "./styles.css";
import { Draggable } from 'react-beautiful-dnd';

type Props = {
    index: number;
    todo : Todo;
    todos : Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({index,todo, todos, setTodos}: Props) => {
  const [edit, setEdit] =  useState<boolean>(false);
  // const [editTodo, setEditTodo] = useState<string>("");
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
 
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);


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
        todo.id===id ? {...todo,todo:editTodo}: todo
      ))
    )
        setEdit(false);
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
       {(provided)=> (
          <form 
          className="todos__single" 
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
        )}
    </Draggable>
  );
};

export default SingleTodo;

- update ver 
```tsx

```
- 1:31:30 
styles.css

```css

.dragactive {
    background-color:rgb(0, 221,236) ;
}

.dragcomplete {
    background-color: rgb(234, 51, 14);
}

.drag{
    box-shadow: 0 0 20px black;
}
```

- TodoList.tsx updated ver
```tsx
import React from 'react';
import { Todo } from '../model';
import './styles.css';
import SingleTodo from './SingleTodo';
import { Droppable} from 'react-beautiful-dnd';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  

  return (
   
      <div className='container'>
      <Droppable droppableId='TodosList'>

          {(provided, snapshot) => (
            <div
              className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className='todos__heading'>Active Tasks</span>
              {todos.map((todo, index) => (
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
        </Droppable>
        <Droppable droppableId='TodosRemove'>

          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`todos ${
                snapshot.isDraggingOver ? "dragcomplete" : "remove"
              }`}
            >
              <span className='todos__heading'>Complete Tasks</span>
              {completedTodos.map((todo, index) => (
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
          )}
        </Droppable>
      </div>

  );
};

export default TodoList;


```