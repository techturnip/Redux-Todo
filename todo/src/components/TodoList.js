import React from 'react'
import { connect } from 'react-redux'

const TodoList = props => {
  console.log(props)
  const { todos } = props
  return (
    <ul>
      {todos.length ? (
        todos.map(todo => <li>{todo}</li>)
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
