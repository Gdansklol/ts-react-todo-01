
- 35:20
whenever we click on this handler,
what should happen is it should set our state
it should set our todos. So *setTodos* 
to be what?

- *** first of all, we're gonna check 
if there's something
inside of the todos, 

then only just we are supposed to set that todo .
so setTodo and take whatever that is already inside of
the *todos of this variable*. And we are going to add
another todo , 

```tsx
App.tsx

const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo){
    setTodos([...todos])
    }
}

```

- 35:48 
So comma, what was the thress fields first ws id,
so we're going to generate 10 random id for that. 
Let's just type ([{id:Date.now()   
so now as  you can see, as soon as I save, it's going to complain is  missing the
following properties todo and  isDone.

So let's just add them. , todo, isDone.
Obviously, it's just created, so it's not done. 
So just gonna give this by default false. 

- 36:22
So instead of wrting this todo;  we can just write
todo:toto, since these both are same name, That's fine.


```tsx
  if (todo) {
    setTodos([...todos, {id: Date.now(), todo, isDone:false}])
  }
};

```

- 36:32
And now what after this, 
after the todo has been created what we're supposed todo,
we are supposed to empty this " empty input fiel"

So *setTodo* is going to be empty.
Let's try this out. 

```tsx
setTodo("");

```

We're gonna do consolelog(todos), let's go to
inspect.

- 37:06
id is *random id* isDone : false.
Now let's go on and render all of these
 todo in form of this component,
 this card type of component. 

 - 37:17 
 so I'm going to go over here and create a new component. 
  < todo list card >

 - 37:20
 New component called todolist. 
 Now, we are supposed to create this *TodoList* component.
 But before we do this, 

- forgot todo one thing.
So if we go on inside of the input fielde, there's one
problem over here.

- 37:38

So if we go on and type for todo some list ... 
and press enter, it maintains this shadow state. 
So what's the solution for that, 

InputFeild.tsx

<input
>

- 37:45 whenever we press enter, it should 
get rid of this background shadown( ex blu color bg shadow)

- 37:53 
So for that, we are going use a React hook
called useRef.
So let's see how we use *useRef*
with typeScript.
First of all, we are supposed to add in handle submit.
So let me just write handleSubmit like this.

- 38: 03 
For now, let me just render all of those todos 
over here( under Enter a task input)
 ` todos.map`
 so that we can see all of them.

 So like, you can see all of these of do as todos are
 beginning to apper over here. 

```tsx
InputFeild.tsx


 const InputFeild: React.FC<Props> = ({todo, setTodo,handleAdd} ) => {
      const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form 
    className="input"
    onSubmit={(e) => {
      handleAdd(e);
      inputRef.current?.blur();
    }}>

```
----

```tsx
App.tsx

return(

    {/*TodoList/> */}
 {todos.map((t)=> (
    <li>{t.todo} </li>
 ))}


)
```

- App.tsx

```tsx
import React,{useState} from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";

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

      {/* <TodoList /> */}
      {todos.map((t)=>(
        <li>{t.todo}</li>
      ))}
    </div>
  )
}

export default App;

```


- InputField.tsx

```tsx
import React,{useRef} from 'react';
import "./styles.css"

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd :(e: React.FormEvent)=> void;
}

// const InputFeild = ({todo, setTodo} : Props) => {
    const InputFeild: React.FC<Props> = ({todo, setTodo,handleAdd} ) => {
      const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form 
    className="input"
    onSubmit={(e) => {
      handleAdd(e);
      inputRef.current?.blur();
    }}>
        <input 
        ref={inputRef}
         type="input"
         value={todo}
         onChange={(e) => setTodo(e.target.value)}
         placeholder='Enter a todo task'
         className='input__box'/>
        <button className='input__submit' type='submit'>
            Go
        </button>
    </form>
  )
}

export default InputFeild;
```














