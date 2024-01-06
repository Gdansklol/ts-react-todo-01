# TODO LIST  Getting Started with Create React App and typescript.

1. ws > git clone + https://github.com/000/000 .git

2.  Adding TypeScript

link : (https://create-react-app.dev/docs/adding-typescript/)

install 

```bash
 npx create-react-app . --template typescript
```

3. Adding TypeScript

link : (https://create-react-app.dev/docs/adding-typescript/)

- If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app or yarn global remove create-react-app to ensure that npx always uses the latest version.

Global installs of create-react-app are no longer supported.

To add TypeScript to an existing Create React App project, first install it:

npm install --save typescript @types/node @types/react @types/react-dom @types/jest


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

1. Remove few of the files that do not need in this project
2. and then remove everyting inside of App.tsx


## `TypeScript Documentation`
- link : (https://www.typescriptlang.org/)

1. click Docs and then Handbook

2. click ig  The Basics, Everyday Types etc


### import a Google font 

1. neucha font

link : (https://fonts.google.com/specimen/Neucha)

### Install react-icons

```bash
npm install react-icons

```

### create new folder , components 
- inside components create InputFeild.tsx 
- 21:26 create <InputFeild />


- rafce ,  extention which is ES7 React/Redux/GraphQL/React-Nativ (dsznajder)

- create components/styles.css

### useState

```tsx
SingleTodo.tsx

const SingleTodo = ({todo, todos, setTodos}: Props) => {
  const [edit, setEdit] =  useState<boolean>(false);
  // const [editTodo, setEditTodo] = useState<string>("");
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
 
}

```

### Drag and Drop function
### Install react-beautiful-dnd
-1:13

```bash
npm i react-beautiful-dnd
```
doc link : (https://www.npmjs.com/package/react-beautiful-dnd)

```bash
npm install --save @types/react-beautiful-dnd
npm i @types/react-beautiful-dnd
```