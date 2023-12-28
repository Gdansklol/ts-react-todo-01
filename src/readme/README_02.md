
# css input__box: focus with changes background color and outline shadow none

- components / styles.css

```css
.input {
    display: flex;
    width: 90%;
    position: relative;
    align-items: center;
}

.input__box {
    width: 100%;
    border-radius: 50px;
    padding: 20px 30px;
    font-size: 25px;
    border:none;
    transition: 0.2s;
    box-shadow: inset 0 0 5px black;
}
.input__box:focus {
    box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.5);
    outline: none;
   
}
```

- updated ver css

```css
.input {
    display: flex;
    width: 90%;
    position: relative;
    align-items: center;
}

.input__box {
    width: 100%;
    border-radius: 50px;
    padding: 20px 30px;
    font-size: 25px;
    border:none;
    transition: 0.2s;
    box-shadow: inset 0 0 5px black;
}
.input__box:focus {
    box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.5);
    outline: none;
   
}

.input__submit {
    position: absolute;
    width: 50px;
    height: 50px;
    margin: 12px;
    border-radius: 50px;
    right: 0px;
    border: none;
    font-size: 15px;
    background-color: #2f74c0;
    color: white;
    transition: 0.2s all;
    box-shadow: 0 0 10px black;
}
.input__submit :hover {
    background-color: blue;
}

.input__submit:active {
    transform: scale(0.7);
    box-shadow: 0 0 5px black;
}
```

---

```tsx
import React from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";

const App: React.FC = ()=> {
  return(
    <div className="App">
      <span className="heading">ToDo Task</span>
      <InputFeild />
    </div>
  )
}

export default App;

```

-----
App.css

```css
@import url('https://fonts.googleapis.com/css2?family=Neucha&display=swap');

.App {
  width:100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2f74c0;
  font-family: "Neucha", cursive;
}

.heading {
  text-transform: uppercase;
  font-size: 40px;
  margin: 30px 0;
  color: white;
  z-index: 1;
  text-align: center;
}

@media (max-width: 800px) {
  .heading {
    margin:15px 0;
    font-size: 35px;
  }
}



/* .App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
} */

```

----
 - components/ InputFeild.tsx

```tsx
 import React from 'react';
import "./styles.css"

const InputFeild = () => {
  return (
    <form className="input">
        <input type="input" placeholder='Enter a todo task' className='input__box'/>
        <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputFeild;
```