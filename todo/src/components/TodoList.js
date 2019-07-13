import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'

const TodoList = props => {
  const { todos } = props
  return (
    <ul>
      {todos ? (
        todos.map((todo, i) => <Todo key={i} todoId={i} />)
      ) : (
        <li>You don't have anything to do.</li>
      )}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList)
