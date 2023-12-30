
- 35:20
whenever we click on this handler,
what should happen is it should set our state
it should set our todos. So *setTodos* 
to be what?

- first of all, we're gonna check if there's something
inside of the todos, 
then only just we are supposed to set that todo .
so setTodo and take whatever that is already inside of
the *todos of this variable*. And we are going to add
another todo , 

```tsx
App.tsx

const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    setTodos([...todos])
}

```

- 35:48 
So comma, 
