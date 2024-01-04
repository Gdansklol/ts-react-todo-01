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

 - 52:14