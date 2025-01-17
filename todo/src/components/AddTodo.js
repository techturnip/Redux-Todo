import React, { Component } from 'react'
import { Button, Icon, TextInput } from 'react-materialize'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todo: '',
      completed: false
    }
  }

  submitHandler = e => {
    e.preventDefault()

    this.props.addTodo(this.state)

    this.setState({
      todo: ''
    })
  }

  changeHandler = e => {
    this.setState({
      todo: e.target.value
    })
  }

  render() {
    const { todo } = this.state
    return (
      <div className="card">
        <h5>Add Todo:</h5>

        <form onSubmit={this.submitHandler}>
          <TextInput
            type="text"
            name="todo"
            placeholder="Add a todo"
            value={todo}
            onChange={this.changeHandler}
            required
          />

          <Button type="submit" waves="light">
            Submit
            <Icon right>send</Icon>
          </Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  addTodo: addTodo
}

export default connect(
  null,
  mapDispatchToProps
)(AddTodo)
