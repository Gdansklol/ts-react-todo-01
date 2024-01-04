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


## TypeScript Documentation
- link : (https://www.typescriptlang.org/)

1. click Docs and then Handbook

2. click ig  The Basics, Everyday Types etc


### import a Google font 

1. neucha font

link : (https://fonts.google.com/specimen/Neucha)


### create new folder , components 
- inside components create InputFeild.tsx 
- 21:26 create <InputFeild />

- 26:22

```tsx
import React,{useState} from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";


const App: React.FC = ()=> {
  return(
    <div className="App">
      <span className="heading">ToDo Task</span>
      <InputFeild  />
    </div>
  )
};

export default App;
```
***
#### src/components/InputFeiled.tsx
```tsx

import React from "react";

const InputFeild = () => {
    return(
    <form className="input">
     <input type="input" placeholder="Enter a todo task"
     className="input__box"/>
     <button className="input__submit" type="submit">
       Go
     </button>
    </form>

    );   
};

export default InputFeild;
```

### CSS Naming Conventions that Will Save You Hours of Debugging
#### That is the BEM naming convention.

- Have you ever seen class names written like this:

```css
.nav--secondary {  ...}
```
```css
.nav__header {  ...}
```
link : (https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/)


- `rafce`,  
- extention which is 
ES7 React/Redux/GraphQL/React-Nativ (dsznajder)

- create components/styles.css


### Install react-icons library 

link : (https://react-icons.github.io/react-icons/)


- 44:50
Let's just install this library

```bash
npm install react-icons --save

npm install react-icons 
```



