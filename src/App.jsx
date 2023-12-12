import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTask from './compontes/ToDoApp/AddTask'
import List from './compontes/ToDoApp/List'
import Todo from './compontes/ToDoApp/Todo'
import New from './compontes/ToDoApp/new'



function App() {

console.log('ananana')
  return ( 
  <div>
    <New/>
    <Todo></Todo>
  </div>

  )
}

export default App
