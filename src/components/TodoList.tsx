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
      <Droppable droppableId='TodosList'>
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