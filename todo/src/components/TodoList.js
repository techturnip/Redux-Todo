import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { clearCompleted } from '../actions'
import { Card, Row, Col, Button } from 'react-materialize'

const TodoList = props => {
  const { todos } = props

  return (
    <Card className="todo-list">
      <Row className="todo-list-header">
        <Col>
          <h4>Your Todo List:</h4>
        </Col>
        {todos.length ? (
          <Col s={3}>
            <Button onClick={() => props.clearCompleted()}>
              Clear Completed
            </Button>
          </Col>
        ) : (
          <span />
        )}
      </Row>

      <Row>
        <ul>
          {todos.length ? (
            todos.map((todo, i) => <Todo key={i} todoId={i} />)
          ) : (
            <li className="card flex">You don't have anything to do.</li>
          )}
        </ul>
      </Row>
    </Card>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = {
  clearCompleted: clearCompleted
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
