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