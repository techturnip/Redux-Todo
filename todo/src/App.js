import React from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

function App() {
  return (
    <div className="container">
      <header>Redux Todo App</header>
      <TodoList />
      <AddTodo />
    </div>
  )
}

export default App
