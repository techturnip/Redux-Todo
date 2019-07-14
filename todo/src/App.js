import React from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import { Navbar } from 'react-materialize'

function App() {
  const date = new Date()

  return (
    <div className="container">
      <Navbar brand={<span>Redux Todo App</span>} centerLogo />
      <TodoList />
      <AddTodo />
      <div className="card center-align">
        Tyler Turnipseed &copy; {`${date.getFullYear()}`}
      </div>
    </div>
  )
}

export default App
