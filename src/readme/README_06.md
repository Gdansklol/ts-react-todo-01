###  SingeleTodo.tsx  with <form></form>


```tsx
import React from 'react';
import {Todo} from "../model";

type Props = {
    todo : Todo;
    todos : Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}


const SingleTodo = ({todo, todos, setTodos}: Props) => {
  return (
    <div>

    </div>
  )
}

export default SingleTodo;
```
- 47:19 
```tsx
 <form className="todos__singel">
        <span className="todos__single--text"></span>

    </form>
```
***
```tsx
import React from 'react';
import {Todo} from "../model";
import { AiFillEdit } from "react-icons/ai";

type Props = {
    todo : Todo;
    todos : Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}


const SingleTodo = ({todo, todos, setTodos}: Props) => {
  return (
    <form className="todos__singel">
        <span className="todos__single--text">
            {todo.todo}
        </span>

        <div>
            <span className="icon">
            <AiFillEdit />
            </span>
            <span className="icon"></span>
            <span className="icon"></span>
        </div>
    </form>
  )
}

export default SingleTodo;
```

link : (https://react-icons.github.io/react-icons/search/#q=edit)

link: (https://react-icons.github.io/react-icons/search/#q=done)

```tsx
 <form className="todos__singel">
        <span className="todos__single--text">
            {todo.todo}
        </span>

        <div>
            <span className="icon">
            <AiFillEdit />
            </span>
            <span className="icon">
            <AiFillDelete />
            </span>
            <span className="icon">
            <MdDone />
            </span>
        </div>
    </form>
```

  - 49:36 
    style these.
    import style.css


- freepic free-photos
link: (https://www.freepik.com/free-photos-vectors/photo)

ex >
 background-image: url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg");


 ```css
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
    background-image: url("https://img.freepik.com/free-photo/young-adult-enjoying-yoga-nature_23-2149573215.jpg?w=1480&t=st=1704344887~exp=1704345487~hmac=668ac4dd25f0b70f657e856ea628f3fdcab3920ad98d08cebad83055d55da6ec");
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
  
 ```


#### Add the responsiveness style for input box
 
 - 51:38 

 ```css
 @media (mac-width: 700px) {
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
 ### create the functiionality for icons in SingleTodo

 - 52:23

 add functionality for done.
 So on empty span, add onClick function.
 And what it's going to do, it's going to fire off handle,
 handledDon function, 

 *onClick={()=> handleDone()}*

 and sendt it it's id todo id. So this
 handleDone doesn't exist set to let's go on and create it

onClick= {()=>handleDone(todo.id)}

```tsx
<span className="icon" onClick={()=>handleDone(todo.id)}></span>
```

---

```tsx
const handleDone = () => {

  }
```
-

see, yor're not receiving it over ther. 
So let's receive it over there. 

- 52:59
the id over here and
this id is going to be of type = number.
 (id:number)

 ```tsx
 const handleDone = (id:number) => {

  }
```

- 53:03
manipulate our `setTodos` the state with
the help of this id.

```tsx
setTodos(todos.map())
```

So what are we going to do, map through this array,
and 
whichever id matches with this id, make there is don
property of that form false to true,

if todo.id equal to the id, that we are sending,

=> todo.id === id ?

-  setTodos(todos.map(todo)=> todo.id === id ?{ })

then what are we supposed to do ?
We're gonna *take that to do all of the properties,*

- {...todo, }

-  setTodos(todos.map(todo)=> todo.id === id ?{...todo,  })
-  setTodos(todos.map(todo)=> todo.id === id ? {...todo, 
isDone: !todo.isDone })

-  setTodos(todos.map(todo)=> todo.id === id ?
{...todo, isDone: !todo.isDone} : todo)

```tsx

SingleTodo.tsx

  const handleDone = (id:number) => {
    setTodos(todos.map((todo)=> 
    todo.id === id ? {...todo, isDone:
    !todo.isDone}:todo
     )
    );
  };
```

and we're gonna change the isDone property schema isDone.
    
And we're gonna invert the the value that was already
there. 
So in what todo isDone.
Otherwise, we're just gonna return the todo just like that. 
return :todo
 **wrap all of this stuff in the map. 

- 54:13

make it disabled. 
because we haven't implemented it. 
So what we are going to do, 
check it over here. 

If this is completed, then just 
*strike it off,* go on over here.
And check so to do the current todo isDone,

1.

```tsx

SingleTodo.tsx

<form className="todos__single">
      {
        todo.isDone
      }
```

2. 
```tsx
  {
        todo.isDone ? (
          
        ) : 
      }
```

3. 
```tsx
  {
        todo.isDone ? (
          
        ) : (

        )
      }
```
 4. 
 ```tsx
 {
  todo.isDone ? (
    <s className="todos__single--text>{todo.todo}</s>
  ):(
    <span className="todos__singel--text>{todo.tod}</span>
  )
 }
 ```

 - <s></s>
 as that is strike tag, so you can see it has been done.
 if I click again ove here, it's not done, !isDone.







