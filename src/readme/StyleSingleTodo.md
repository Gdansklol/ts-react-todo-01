## style for SingleTodo.tsx

- 1:01
this thing outline if I remove this,
you're going to see 

```css
 .todos__single--text:focus {
    /* outline:none; */
  }
```

ugly outlline over here. edit input .

- 1:02
one flaw noticed, edit button 
, you can see the focus does not go
inside of this input component,

we have to manually click over here, 
and then type it. 
So let's just take care of that.
So we're just going to again,
use make the use of useRef hook

### useRef
- 1:02:50

```tsx
import React,{useRef} from 'react';


  const inputRef = useRef<HTMLInputElement>(null);


  <input
  ref={inputRef}

  >
```

### useEffect 
- 1:02:53

create a useEffeft, 

whenever the edit changes, it's going to fire off this.
That means it's going to wait good to do so

```tsx
import React,{useEffect} from 'react';

useEffect(()=> {

}, [])

```

- First inputRef above this one. 
so 
**inputRef.current?.foucus()**

So it's going to focus on that thing. 
Whenever this changes, so if I go and press
edit, you can see the focus is already inside of this.
it's working fine. Cool.

```tsx

const inputRef = useRef<HTMLInputElement>(null);

useEffect(()=>{
 inputRef.current?.focus();
},[edit]);

```

- 1:03
Why todoList has been successfully completed.
But there's one more thing left that to explain.

### useReduer hook

ig. use reducer hook
Youtube video, a shopping cart app by using use reducer hook. *React js shopping cart app*

##### React Shopping Cart Tutorial | Context API with useReducer Hook in React JS

link : (https://www.youtube.com/watch?v=HptuMAUaNGk&t=0s)

-  open model.ts
your job will be implement it inside of this project.
create component over here, a dummy component.

- rafce
-  inside of it, create a reducer by using useReducer

- we provided an initial value. 
(reducer, [])

First of all,let me just import it. 

```ts
model.ts



const ReducerExample= () => {

    const [state, dispatch] = useReducer(reducer, [])

  return (
  </div>
  )
}

export default ReducerExample;
```

- 1:04









