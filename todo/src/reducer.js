import { ADD_TODO, TOGGLE_COMPLETED, CLEAR_COMPLETED } from './actions'

// all state values need an initial value
const initialState = {
  todos: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const { todo } = action.payload
      const newTodoList = state.todos.concat([todo])

      return {
        ...state,
        todos: newTodoList
      }
    case TOGGLE_COMPLETED:
      const { bool, id } = action.payload
      const todoList = state.todos.map(todo => todo)
      todoList[id].completed = !bool

      return {
        ...state,
        todos: todoList
      }
    case CLEAR_COMPLETED:
      const clearedList = state.todos.filter(todo => !todo.completed)
      console.log(clearedList)

      return {
        ...state,
        todos: clearedList
      }

    default:
      return state
  }
}
