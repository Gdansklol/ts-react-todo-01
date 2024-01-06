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