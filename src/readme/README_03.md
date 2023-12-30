### App.tsx  with useState


link : (https://www.youtube.com/watch?v=FJDVKeh7RJI)

- 26:39 

- 31:47 another useState
 which will contain all of todos so we are constantly
 entering our todos over here. (todo list infut ...)
 So this has to be inside of a particular state. 

- 32:12 
import the model that have created Todo

```ts
export interface Todo {
    id : number;
    todo: string;
    isDone:boolean;
}
```
----

```tsx
import {Todo} from "./model";
```


- 32:15 /  be an array of todos. So we are going to import the model 
that we have created Todo. 

```tsx

import {Todo} from "./model";




const [todos, setTodos] = useState<Todo>([]);
```

so Todo and it's going to be an array, so we're gonna
make it an array. 

ex : const [todos, setTodos] = useState<Todo[]>([]);
- 32:25 
So this is how create an array of a type or an interface.


- 32:31 
 Now let's try to create a *handle add function*,
 which will add the todos to this state. 

- So let's go back to our App. 
- create a new fuction over here 
it's going to take something inside of it,
and it's going to return. So this is a function over
here. it's going to take an *event from onSubmit.*
- 32:50 / 
So right over here from whenever we submit the form,
it should 

- 33:24 /
 to defin a function just like this. So since this
 function is not going to return anything, *void*
 So let's receive it over here. 

- 33:04 
And it should give us an error (on dev page )
because this function doesn't exist. 

ex 

```tsx
const  handleAdd = () => {}





<InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} >
```
- 33:11 
Now what are supposed to do?
We are supposed to add this funtion over here in
these props. so just like learned earlier, 
be supposed to define a funtion just like this.
So since this function is not going to return anything,

ex :
 handleAdd: () => void ;

so receive over here. just like that. 

({todo, setTodo, handleAdd})

```tsx
InputFeild.tsx

interface Props {
    todo:string;
    setTodo: React.Dispatche<React.setStateAction<string>>
}


const InputFeild: React.FC<Props> = ({todo, setTodo, handleAll})
```

- 33:35 
Now, what are we going to do whenever we click on this
*Go button* , so whenever we press submit, this, this function
should fire off. So onsubmit, 
we have to fire off this handleAdd function. 

ex:    <form className="input"  onSubmit={handleAdd}>

- 33:53 
Now one thing you will notice, whenever you presson Go, 
you cand see the page refreshes, 
so avoid that, what we do is we go to an inner normal JavaScript,
what we do is we just go to this function,and take an event
variable over here, and just write *e.preventDefault();*
- 34:14
const handleAdd = (e) =>{
    e.preventDefault();
}

But it's gonna give us this error. 
 Error : e implicitly has an array tyoe. 

 - So we are supposed to provide this a type. So 
 let's go on Google and type, *event type and react*
 search on Google , event type in react typescript

 ### event type in react typescript

 - So I'n just trying to show you over here what you need to do
 whever you get stuck in a particular thing
 in React Typescript. ... you can see it has given us ,
 this type react change event HTML input element. So we
 can take this but there is a better type.
 **React.FormEvent**

- 35:03 Now it's not going to give us any error. som it's giving us
an error, because we haven't set this type over there over into our
props right over here. So we are supposed to define this over here as well,
because we are supposed to define it everywhere
we are sending this variable. So great. That's awesome. 

```tsx
App.tsx

const handleAdd = (e : React.formEvent) => {
    e.preventDefault();
}
```

- InputFeild.tsx

```tsx

handleAdd: (e : React.FormEvent) => void;
```
we are sending this variable. 

- 35:14 Now whenever we click on this handler, 
- 35:22 what should happen is it should set our state 
if should set our todos. So set todos, 





