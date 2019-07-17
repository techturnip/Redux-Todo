import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleCompleted } from '../actions'
import { Button } from 'react-materialize'

class Todo extends Component {
  handleClick = () => {
    const currentTodo = this.props.todos[this.props.todoId]
    this.props.toggleCompleted(currentTodo.completed, this.props.todoId)
  }

  render() {
    const todo = this.props.todos[this.props.todoId]

    return (
      <li
        className={`card flex${
          todo.completed ? ' teal lighten-2 completed' : ''
        }`}
      >
        <span>{todo.todo}</span>
        <Button onClick={this.handleClick}>
          {!todo.completed ? 'Complete' : 'Undo'}
        </Button>
      </li>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = {
  toggleCompleted: toggleCompleted
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)
